  function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "happybova") {
    return true;
   }
   alert("Incorrect password!");
   return false;
   }
