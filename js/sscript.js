  function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "Meetourz") {
    window.location.href = '/';
    return true;
   }
   alert("Incorrect password!");
   return false;
   }
