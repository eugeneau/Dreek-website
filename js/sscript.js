  function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "Mitrz") {
     alert("Correct");
     window.location.assign("https://dreek16designer.com/auth");
     return true;
   }
   alert("Incorrect password");
   return false;
}
