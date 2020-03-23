function auth() {
  var password = prompt("Please enter the second password:", "");
  if (password == null || password == "") {
    alert("Please try again!");
    window.location.href = "https://dreek16designer.com/seecretlogin";
  }
  if (password == "yermZilchIsAFraud") {
    window.location.href = 'https://dreek16designer.com/secret/Meetourz/secret.bungpouhaihg.zilch';
  } else {
    alert("Incorrect password!");
  }
}
