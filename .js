  function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "cindersandcoal") {
    return true;
   }
   alert("Incorrect password!");
   return false;
   }
