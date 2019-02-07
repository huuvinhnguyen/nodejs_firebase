var firebase = require('firebase')
// change lines below with your own Firebase snippets!
var config = {
  apiKey: "AIzaSyA1GUbp9tPz7Butdhb2u693pn1UzbIb5Jo",
  authDomain: "nodejs-b61db.firebaseapp.com",
  databaseURL: "https://nodejs-b61db.firebaseio.com",
  projectId: "nodejs-b61db",
  storageBucket: "nodejs-b61db.appspot.com",
  messagingSenderId: "334945148087"
};
const fire = firebase.initializeApp(config);
module.exports = fire;
