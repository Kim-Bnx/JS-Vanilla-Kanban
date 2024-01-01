const { Tag, Card } = require('../models/assoc');

const tagController = {

    // FETCH ALL TAGS
    getAllTags: async (_, response) => {
        try {
            const tags = await Tag.findAll();
            response.status(200).json(tags);
        } catch (error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },
  
    // CREATE NEW TAG
    createTag: async (request, response) => {
        const { name, color } = request.body;

        try {
            let bodyErrors = [];
            if (!name) {
                bodyErrors.push({ error : 'name can not be empty'});
            }
            if (!color) {
                bodyErrors.push({ error : 'color can not be empty'});
            }
  
            if (bodyErrors.length) {
                response.status(400).json(bodyErrors);
            } 
            
            let newTag = Tag.create(request.body);
            response.status(201).json(newTag);
  
        } catch (error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },
  
    // MODIFY A TAG
    updateTag: async (request, res, next) => {
        const { id }  = request.params;
        const { name, color } = request.body;
        try {
  
            let tag = await Tag.findByPk(id);
            if (!tag) {
                next();
            } else {
                if (name) {
                    tag.name = name;
                }
                if (color) {
                    tag.color = color;
                }
                await tag.save();
                res.json(tag);
            }
  
        } catch (error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },
  
    // DELETE A TAG
    deleteTag: async (request, response, next) => {
        const { id } = request.params.id;

        try {
            let tag = await Tag.findByPk(id);
            if (!tag) {
                next();
            } 
            
            await tag.destroy();
            response.status(200).json('Tag deleted successfully.');

        } catch (error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },
  
    // ASSOCIATE A TAG TO A CARD
    associateTagToCard: async (request, response, next) => {
        const { cardId, tagId } = request.params;

        try {
            let card = await Card.findByPk(cardId, {
                include: ['tags']
            });
            if (!card) {
                next();
            }
  
            let tag = await Tag.findByPk(tagId);
            if (!tag) {
                next();
            }
  
            // See instance's methods and mixins
            // https://sequelize.org/master/manual/assocs.html#special-methods-mixins-added-to-instances
            await card.addTag(tag);

            // Need to fetch card again to have the updated version
            card = await Card.findByPk(cardId, {
                include: ['tags']
            });
            response.status(200).json(card);
  
        } catch (error) {
            console.log(error);
            response.status(500).send(error);
        }
    },
  
    // REMOVE TAG FROM A CARD
    removeTagFromCard: async (request, response) => {
        const { cardId, tagId } = request.params;

        try {
            let card = await Card.findByPk(cardId, {
                include: ['tags']
            });
            if (!card) {
                next();
            }
  
            let tag = await Tag.findByPk(tagId);
            if (!tag) {
                next();
            }
  
            // Still a method from sequelize
            await card.removeTag(tag);
            
            // Fetch again to have the updated version
            card = await Card.findByPk(cardId, {
                include: ['tags']
            });
            response.status(200).json(card);
  
        } catch (error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },

    // REMOVE OR ADD MULTIPLE TAGS FROM A CARD
    updateCardTags: async (request, response, next) => {
        const { id } = request.params;
        let { tagsId } = request.body;

        tagsId = JSON.parse(tagsId);

        try {
            let card = await Card.findByPk(id);
            if (!card) {
                next();
            }

            // Find all the tags given
            const tags = await Tag.findAll({ 
                where: { id: tagsId } 
            });

            // Check if we found all the tags
            if (tags.length !== tagsId.length) {
                next();
            }

            // The set method remove all tags and associate new ones
            await card.setTags(tags);

            // Updated card
            card = await Card.findByPk(id, {
                include: ['tags']
            });

            return response.status(200).json(card);
        } catch (error) {
            return response.status(500).json({ error: 'Internal server error' });
        }
    },
};

module.exports = tagController;