var firebaseConfig = {
    apiKey: "AIzaSyBsVgNfBLfCKeHRTet9Zra7UAmlwVwqKsk",
    authDomain: "projectkwittermode.firebaseapp.com",
    databaseURL: "https://projectkwittermode-default-rtdb.firebaseio.com",
    projectId: "projectkwittermode",
    storageBucket: "projectkwittermode.appspot.com",
    messagingSenderId: "314159630802",
    appId: "1:314159630802:web:d68c48279e1c0f2c16e00b",
    measurementId: "G-FZMVELEQPT"
};
firebase.initializeApp(firebaseConfig);

function addUser() {
    window.location = "kwitter_room.html";
    var t = document.getElementById("user_name").value;
    firebase.database().ref("/").child(t).update({ name: t });
}