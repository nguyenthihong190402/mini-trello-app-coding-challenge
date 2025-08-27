const express = require("express");
const router = express.Router();

const BoardController = require("../controllers/boardController");
const { authenticate } = require("../middleware/authenticate");

router.post("/", authenticate, BoardController.createBoard);
router.get("/", authenticate, BoardController.getAllBoard);
router.get("/:id", authenticate, BoardController.getBoardById);
router.put("/:id", authenticate, BoardController.updateBoardDetail);
router.delete("/:id", authenticate, BoardController.deleteBoardById);

module.exports = router;
