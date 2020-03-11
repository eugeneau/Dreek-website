  function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "Mitrz") {
    window.location.href = '/';
    return true;
   }
   alert("Incorrect password!");
   return false;
   }
