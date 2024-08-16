firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;
    
    if (user != null) {
      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
      var email_verified = user.emailVerified;

      if (email_verified) {
        document.getElementById("user_veri").style.display = "none";
      } else {
        document.getElementById("user_veri").style.display = "block";
      }

      document.getElementById("user_para").innerHTML =
        "Verification status = " + email_verified;
    }
  } else {
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
});

function login() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);
    });
}

function verification() {
  var user = firebase.auth().currentUser;

  user
    .sendEmailVerification()
    .then(function () {
      window.alert("Verification email sent!");
    })
    .catch(function (error) {
      window.alert("Error : " + errorMessage);
    });
}

function create() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(userEmail, userPass)
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);
    });
}

function forgot() {
  const email = document.getElementById("email_field").value;
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      alert("Password reset email sent!");
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });
}


function anonymous() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);
    });
}

function logout() {
  firebase.auth().signOut();
}
