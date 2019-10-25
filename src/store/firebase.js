import * as firebase from 'firebase';const config = {
  apiKey: "AIzaSyC5krz4RBiT87RK7cEidh3n-A4H63uGcyM",
  authDomain: "retrod-7e2cd.firebaseapp.com",
  databaseURL: "https://retrod-7e2cd.firebaseio.com/",
}
firebase.initializeApp(config);
export const databaseRef = firebase.database();
