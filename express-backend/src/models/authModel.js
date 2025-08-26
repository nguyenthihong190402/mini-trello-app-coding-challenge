const db = require("../config/firebase-config");

const userCollection = db.collection("users");

async function getAllUser() {
    const data = await userCollection.get();
    return data.docs.map((value) => ({id: value.id, ...value.data()}))
}

module.exports = {getAllUser}