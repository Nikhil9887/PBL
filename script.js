// Initialize Firebase
var firebaseConfig = {
    // Your Firebase project configuration goes here
    apiKey: "AIzaSyCxmuZWnN3WHT8OdiUMmDrzfcOk2wKtaIs",
        authDomain: "pbl-attendance.firebaseapp.com",
        projectId: "pbl-attendance",
        storageBucket: "pbl-attendance.appspot.com",
        messagingSenderId: "708100114012",
        appId: "1:708100114012:web:70361b8ea9ffc44c1ac899"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the login form
  var loginForm = document.querySelector('#login-form');
  
  // Handle the form submit event
  loginForm.addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();
  
    // Get the user's email and password from the form
    var email = loginForm.email.value;
    var password = loginForm.password.value;
  
    const db = firebase.firestore();
    const data = 
    [
      {
        roll_no: 1,
        dsa: 0,
      },
      {
        roll_no: 2,
        dsa: 1,
      },
      {
        roll_no: 3,
        dsa: 1,
      },
      {
        roll_no: 4,
        dsa: 0,
      }
    ];

    data.forEach(function(user) {
    db.collection("attendance").doc().set(user)
        .then(function() {
            console.log("Document added successfully!");
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(userCredential) {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        // Redirect to the home page or show a success message
        console.log('Ho gaya bhai');
        window.location.href = '/';
      })
    }
  )