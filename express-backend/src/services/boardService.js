const BoardModel = require("../models/boardModel");

async function createBoard(name, description, userId) {
  const newBoard = await BoardModel.createBoard({
    name: name,
    description: description,
    createdBy: userId,
  });

  await BoardModel.createBoardMember({
    boardId: newBoard.id,
    userId: userId,
  });

  return {
    id: newBoard.id,
    name: newBoard.name,
    description: newBoard.description,
  };
}

async function getAllBoardByUser(userId) {
  const result = await BoardModel.getAllBoardByUser(userId);
  return result.map((doc) => ({
    id: doc.id,
    name: doc.name,
    description: doc.description,
  }));
}

async function getBoardById(boardId) {
  const board = await BoardModel.getBoardById(boardId);
  return { id: board.id, name: board.name, description: board.description };
}

async function updateBoardDetail(boardId, userId, data) {
  const updateBoard = await BoardModel.updateBoardDetail(boardId, userId, data);
  return {
    id: updateBoard.id,
    name: updateBoard.name,
    description: updateBoard.description,
  };
}

async function deleteBoard(boardId, userId) {
  await BoardModel.deleteBoard(boardId, userId);
  return { message: "Board successfully deleted" };
}
module.exports = {
  createBoard,
  getAllBoardByUser,
  getBoardById,
  updateBoardDetail,
  deleteBoard
};
