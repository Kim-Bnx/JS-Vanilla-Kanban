const { Router } = require("express");
const router = Router();
const path = require("path");

// IMPORT CONTROLLERS
const listController = require("./controllers/listController.js");
const cardController = require("./controllers/cardController.js");
const tagController = require("./controllers/tagController");
const errorController = require('./controllers/errorController');

router.get("/", (_, res) => { 
  let filePath = path.join(__dirname, "../public/index.html"); 
  res.sendFile(filePath); 
});

// LISTS
router
  .get("/lists", listController.getAllLists)
  .post("/lists", listController.createList);
router
  .get("/lists/:id", listController.getOneList)
  .patch("/lists/:id", listController.updateList)
  .delete("/lists/:id", listController.deleteList);


// CARDS
router
  .get("/cards/:id", cardController.getOneCard)
  .patch("/cards/:id", cardController.updateCard)
  .delete("/cards/:id", cardController.deleteCard);
router.get("/lists/:id/cards", cardController.getCardsInList);
router.post("/cards", cardController.createCard);

// TAGS
router.get("/tags", tagController.getAllTags);
router.post("/tags", tagController.createTag);
router
  .patch("/tags/:id", tagController.updateTag)
  .delete("/tags/:id", tagController.deleteTag);
router
  .post("/cards/:cardId/tags/:tagId", tagController.associateTagToCard)
  .delete("/cards/:cardId/tags/:tagId", tagController.removeTagFromCard);
router.patch("/cards/:id/tags", tagController.updateCardTags);

// ERROR MANAGER
router.use(errorController.notFound)

module.exports = router;