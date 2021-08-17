//import * as firebase from "firebase/app";
import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBcaYU1m4sDjMV_sGw4j_jeh_zNE6z38cc",
    authDomain: "huechat-c4ff0.firebaseapp.com",
    projectId: "huechat-c4ff0",
    storageBucket: "huechat-c4ff0.appspot.com",
    messagingSenderId: "44103926276",
    appId: "1:44103926276:web:b99f967e79f1153ff5ab51",
  })
  .auth();
