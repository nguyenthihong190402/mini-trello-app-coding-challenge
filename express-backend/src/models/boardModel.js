const { db } = require("../config/firebase-config");

const boardColection = db.collection("boards");

const boardMemberColection = db.collection("board-member");

async function createBoard(board) {
  const newBoard = await boardColection.add(board);
  return { id: newBoard.id, ...board };
}

async function createBoardMember(board) {
  const newBoardMember = await boardMemberColection.add(board);
  return { id: newBoardMember, ...board };
}

async function getBoardById(boardId) {
  const board = await boardColection.doc(boardId).get();
  if (!board.exists) {
    return null;
  } else {
    return { id: board.id, ...board.data() };
  }
}

async function getAllBoardByUser(userId) {
  const collectionBoardId = await boardMemberColection
    .where("userId", "==", userId)
    .get();
  const boardIds = collectionBoardId.docs.map((doc) => doc.data().boardId);
  console.log(boardIds);

  const boards = [];
  for (const id of boardIds) {
    const board = await getBoardById(id);
    console.log(board);

    if (board) {
      boards.push(board);
    }
  }

  return boards;
}

async function updateBoardDetail(boardId, userId, data) {
  const updateBoard = await boardColection.doc(boardId);
  await updateBoard.update(data);
  const result = await updateBoard.get();
  return { id: result.id, ...result.data() };
}

async function deleteBoard(boardId, userId) {
  const board = await boardColection.doc(boardId);
  await board.delete();
}
module.exports = {
  createBoard,
  getAllBoardByUser,
  createBoardMember,
  getBoardById,
  updateBoardDetail,
  deleteBoard,
};
