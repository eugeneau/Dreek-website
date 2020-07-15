var url = "https://example.com";

function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == password.correctAnswer) {
     alert("Correct");
     window.location.assign(url);
     return true;
   }
   alert("Incorrect password");
   return false;
}
