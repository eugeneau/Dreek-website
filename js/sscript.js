  function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "Meetourz") {
    window.location.href = 'secret/Meetourz/secret.bungpouhaihg.zilch.html';
    return true;
   }
   alert("Incorrect password!");
   return false;
   }
