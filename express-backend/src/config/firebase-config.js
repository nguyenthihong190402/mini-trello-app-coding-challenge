const firebaseAdmin = require("firebase-admin");
require("dotenv").config();

const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG);

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://mini-trello-app-firebase.firebaseio.com",
});

const db = firebaseAdmin.firestore();
module.exports = {db, firebaseAdmin};
