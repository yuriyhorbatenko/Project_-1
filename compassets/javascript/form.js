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

var auth = firebase.auth();

$("#signUp").on("click", function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    var promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

});

$("#login").on("click", function signIn(e){
    e.preventDefault()
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    var promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    
});

//To be used if we would incorporate "Sign Out" button on first page:
// function signOut() {
//     auth.signOut();
// }

auth.onAuthStateChanged(function(user){
    if(user){
        var email = user.email;
        window.location.replace("index2.html");
    }
});