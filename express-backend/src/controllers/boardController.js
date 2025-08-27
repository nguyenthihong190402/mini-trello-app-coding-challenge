const BoardService = require("../services/boardService");

const getAllBoard = async (req, res) => {
  try {
    const userId = req.user.userId;
    const boards = await BoardService.getAllBoardByUser(userId);
    return res.status(200).json(boards);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createBoard = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { name, description } = req.body;
    const newBoard = await BoardService.createBoard(name, description, userId);
    return res.status(201).json(newBoard);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getBoardById = async (req, res) => {
  const { id } = req.params;
  try {
    const board = await BoardService.getBoardById(id);
    return res.status(200).json(board);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateBoardDetail = async (req, res) => {
  const { name, description } = req.body;
  const { id } = req.params;
  const userId = req.user.userId;
  try {
    const board = await BoardService.updateBoardDetail(id, userId, {
      name,
      description,
    });
    return res.status(200).json(board);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteBoardById = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;
  try {
    await BoardService.deleteBoard(id, userId);
    return res.status(204).json({message: "Board successfully deleted"});
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


module.exports = { getAllBoard, createBoard, getBoardById, updateBoardDetail,deleteBoardById };
