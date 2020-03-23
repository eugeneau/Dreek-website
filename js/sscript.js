  function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "Mitrz") {
     alert("Correct!");
     window.location.assign("https://dreek16designer.com/secret/Meetourz/secret.bungpouhaihg.zilch");
     return true;
   }
   alert("Incorrect password!");
   return false;
   }
