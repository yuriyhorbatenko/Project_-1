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


function signOut() {
    auth.signOut();
}

auth.onAuthStateChanged(function(user){
    if(user){
        var email = user.email;
        alert(user.email)
        
    }else{
        window.location.replace("compindex.html");
    }
})