var firebaseConfig = {
    apiKey: "AIzaSyABfKQ-aHubEH2cernJtcrHBPGPENBlKj4",
    authDomain: "kwitter-af80a.firebaseapp.com",
    databaseURL: "https://kwitter-af80a-default-rtdb.firebaseio.com",
    projectId: "kwitter-af80a",
    storageBucket: "kwitter-af80a.appspot.com",
    messagingSenderId: "713020852718",
    appId: "1:713020852718:web:26d35ea60587eb2278e6ff",
    measurementId: "G-BZ7XJZ3J5S"
};
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();