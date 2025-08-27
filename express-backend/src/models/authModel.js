const {db} = require("../config/firebase-config");
const userCollection = db.collection("users");

async function createUser(user) {
  const newUser = await userCollection.add(user);
  return { id: newUser.id, ...user };
}

async function findUserByEmail(email) {
  const user = await userCollection.where("email", "==", email).get();
  if (user.empty) {
    return false;
  } else {
    return true;
  }
}

async function getUserByEmail(email) {
  const user = await userCollection.where("email", "==", email).get();
  if (user.empty) {
    return null;
  } else {
    const userDoc = user.docs[0];
    return { id: userDoc.id, ...userDoc.data() };
  }
}

module.exports = { createUser, findUserByEmail ,getUserByEmail};
