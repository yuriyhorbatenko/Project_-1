console.log("hey")

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

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,

    ],

});

var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

  function login() {
    function newLogInHappened(user) {
        if (user) {
            app(user);
        } else {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider);
        }
    };

    firebase.auth().onAuthStateChanged(newLogInHappened);
  };

  window.onload = login;



