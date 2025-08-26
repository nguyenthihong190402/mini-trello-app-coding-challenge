const firebaseAdmin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://mini-trello-app-firebase.firebaseio.com",
});

const db = firebaseAdmin.firestore();
module.exports = db;
