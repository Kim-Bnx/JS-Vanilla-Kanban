// on récupère les models depuis l'index (super important pour avoir les associations !!)
const { Card } = require('../models/assoc.js');

const cardController = {

    // FETCH ALL THE CARDS OF A LIST
    getCardsInList : async (request, response, next) => {
        const { id } = request.params;

        try {
            const cards = await Card.findAll({
                where: {
                    list_id: id
                },
                include: [
                    {
                        association: 'tags', 
                    },
                ],
                order: [
                    ['position', 'ASC'],
                ]
            });

            if (!cards) {
                next();
            }

            response.status(200).json(cards);

        } catch (error) {
            console.log(error);
            response.status(500).json(error.toString());
        }
    },

    // FETCH A CARD WITH ID
    getOneCard: async (request, response, next) => {
        const { id } = request.params;

        try {
            const card = await Card.findByPk(id, {
                include: ['tags']
            })
            ;
            if (!card) {
                next();
            }
            
            response.status(200).json(card);
        } catch (error) {
            console.log(error);
            response.status(500).json(error.toString());
        }
    },

    // CREATE NEW CARD
    createCard: async (request, response) => {
        let { title, position, list_id } = request.body;
        position = parseInt(position);

        try {
            // Check params
            if (!title) {
                return response.status(400).json({ error: 'title cannot be empty'});
            }

            if (!list_id) {
                return response.status(400).json({ error: 'list_id cannot be empty'});
            }

            if (typeof parseInt(list_id) !== "number") {
                return response.status(400).json({ error: "Invalid type: list_id should be a number" });
            }

            if (position && typeof position !== "number") {
                return response.status(400).json({ error: "Invalid type: position should be a number" });
            }

            const newCard = Card.build(request.body);
            await newCard.save();
            
            response.status(201).json(newCard);

        } catch (error) {
            console.log(error);
            response.status(500).json(error);
        }
    },

    // MODIFY A WARD
    updateCard: async (request, response, next) => {
        const { id } = request.params;
        const { title, color, list_id, position } = request.body;

        try {
            const card = await Card.findByPk(id, {
                include: ['tags']
            });

            if (!card) {
                next();
            } 
            
            // Update params needed
            if (title) {
                card.title = title;
            }
            if (list_id) {
                card.list_id = list_id;
            }
            if (color) {
                card.color = color;
            }
            if (position) {
                card.position = position;
            }
            
            await card.save();

            response.status(200).json(card);
            
  
        } catch (error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },

    // DELETE CARD
    deleteCard: async (request, response, next) => {
        const { id } = request.params;
        try {
            const card = await Card.findByPk(id);

            if (!card) {
                next();
            }

            await card.destroy();

            response.status(200).json('Card deleted successfully.')

        } catch (error) {
            console.log(error);
            response.status(500).json(error.toString());
        }
    },

}

module.exports = cardController;