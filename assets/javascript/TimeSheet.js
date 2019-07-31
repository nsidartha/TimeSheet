$(document).ready(function () {
    const firebaseConfig = {
        apiKey: "AIzaSyB-XOg48Piw0h3Z08WGDgmGXaiyJEmoGwc",
        authDomain: "projectucsd-5ff85.firebaseapp.com",
        databaseURL: "https://projectucsd-5ff85.firebaseio.com",
        projectId: "projectucsd-5ff85",
        storageBucket: "",
        messagingSenderId: "97312050674",
        appId: "1:97312050674:web:f1bc355bcc0ef28e"
    };

    Firebase.initializeApp(firebaseConfig);
    var database = Firebase.database();

    var name = "";
    var email = "";
    var age = "";
    var comment = "";


});