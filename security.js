var url = "https://example.com";
var correctAnswer;

function checkPassword() {
   var password = document.getElementById("passwordBox");
   correctAnswer = document.getElementById("answer");
   var passwordText = password.value;
   if(passwordText == correctAnswer) {
     alert("Correct");
     window.location.assign(url);
     return true;
   }
   alert("Incorrect password");
   return false;
}
