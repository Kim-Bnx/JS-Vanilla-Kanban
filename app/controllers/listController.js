// on récupère les models depuis l'index (super important pour avoir les associations !!)
const { List } = require('../models/assoc.js');

const listController = {

    // FETCH ALL LISTS
    getAllLists : async (_, response) => {
        try {
            // Find all list with cards and tags associated with
            const lists = await List.findAll({
                include: [
                    {
                        association: 'cards',
                        include: [
                            {
                                association: 'tags' 
                            }
                        ],
                        order: ['tags', 'name', 'ASC']
                    },
                ],
                order: [
                    ['position', 'ASC'], // list order
                    ['cards', 'position', 'ASC'] // card order
                ]
            });

            response.status(200).json(lists);

        } catch (error) {
            console.log(error);
            response.status(500).json(error.toString());
        }
    },

    // CREATE NEW LIST
    createList: async (request, response) => {
        let { name, position } = request.body;
        position = parseInt(position);

        try {
            // Params verifications
            if (!name) {
                return response.status(400).json({ error : "Missing body parameter: name" });
            }

            if (position && typeof position !== "number") {
                return response.status(400).json({ error : "Invalid type: position should be a number" });
            }
            
            const newList = await List.create(request.body);

            response.status(201).json(newList);

        } catch (error) {
            console.log(error);
            response.status(500).json(error.toString());
        }
    },

    // FETCH A LIST WITH ID
    getOneList: async (request, response, next) => {
        const { id } = request.params;

        try {
            const list = await List.findByPk(id, {
                include: [
                    {
                        association: 'cards',
                        include: [
                            {
                                association: 'tags'
                            }
                        ]
                    }
                ],
                order: [
                    ['cards', 'position', 'ASC']
                ]
            });

            if (!list) {
                next(); // redirect to notFound controller
            } 

            response.status(200).json(list);

        } catch (error) {
            console.log(error);
            response.status(500).json(error.toString());
        }

    },

    // MODIFY A LIST
    updateList: async (request, response, next) => {
        const { id } = request.params;

        try {
            const list = await List.findByPk(id);

            if (!list) {
                next();
            } 
            
            // Fetch the body once the list exists
            const { name, position } = request.body; 

            // Check body param and update what needed 
            if(name) {
                await list.update({ name: name })
            }
            if(position) {
                await list.update({ position: position })
            }
            
            response.status(200).json(list);

        } catch (error) {
            console.log(error);
            response.status(500).json(error.toString());
        }
    },

    // DELETE A LIST
    deleteList: async (request, response, next) => {
        const { id } = request.params;
        
        try {
            const list = await List.findByPk(id);

            if (!list) {
                next();
            }

            await list.destroy();
            response.json('List deleted successfully.')

        } catch (error) {
            console.log(error);
            response.status(500).json(error.toString());
        }
    }
}

module.exports = listController;