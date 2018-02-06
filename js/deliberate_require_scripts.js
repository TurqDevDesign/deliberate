const firebase = require('firebase/app');
                 require('firebase/auth');
                 require('firebase/database');

// Initialize Firebase
const config = {
        apiKey            : "AIzaSyCcfxAD9d1Ew5jdKI-a9_ry-e3V5YONSu8",
        authDomain        : "lets-deliberate.firebaseapp.com",
        databaseURL       : "https://lets-deliberate.firebaseio.com",
        projectId         : "lets-deliberate",
        storageBucket     : "lets-deliberate.appspot.com",
        messagingSenderId : "308024527469"
    };

const deliberateAppFirebase = firebase.initializeApp(config);

module.exports = {
    firebaseConnection: deliberateAppFirebase
};
