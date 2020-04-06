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

$("#bookFlight").on("click", function(event){

    event.preventDefault();

    var firstName = $("#form_name").val().trim();
    var lastName = $("#form_lastname").val().trim();
    var email = $("#form_email").val().trim ();
    var numPass = $("#form_need").val().trim();

    var passengerInfo = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        passengers: numPass,
    };

    database.ref().push(passengerInfo)

    console.log(passengerInfo.firstName)
    console.log(passengerInfo.lastName)
    console.log(passengerInfo.email)
    console.log(passengerInfo.passengers)

    $("#form_name").val("")
    $("#form_lastname").val("")
    $("#form_email").val("")
    $("#form_need").val("")

    window.location.replace("thankyou.html")
});


