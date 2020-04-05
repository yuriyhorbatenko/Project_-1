console.log("Hey!")

var firebaseConfig = {
    apiKey: "AIzaSyC_-K0cFpypwOzV9XEKUBRM2VHRR-x_94w",
    authDomain: "top-flight-55a6a.firebaseapp.com",
    databaseURL: "https://top-flight-55a6a.firebaseio.com",
    projectId: "top-flight-55a6a",
    storageBucket: "top-flight-55a6a.appspot.com",
    messagingSenderId: "451345762561",
    appId: "1:451345762561:web:6f28d34c7abaa218533300"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var auth = firebase.auth();


function signOut() {
    auth.signOut();
}

auth.onAuthStateChanged(function(user){
    if(user){
        var email = user.email;
        
        
    }else{
        window.location.replace("compindex.html");
    }
});


database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    var passFirstName = childSnapshot.val().firstName;
    var passLastName = childSnapshot.val().lastName;
    var passEmail = childSnapshot.val().email;
    var passNumber = childSnapshot.val().passengers;

    console.log(passFirstName)
    console.log(passLastName)
    console.log(passEmail)
    console.log(passNumber)

    var newRow = $("<tr>").append(
        $("<td>").text(passFirstName),
        $("<td>").text(passLastName),
        $("<td>").text(passEmail),
        $("<td>").text(passNumber)
    );

    $("#flightTable > tbody").append(newRow)
});