const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Dreek16designer" && password === "Minecraft") {
        alert("You have successfully logged in.");
        window.location.href = 'https://dreek16designer.com/secret/Mitrz/';
    } else {
        loginErrorMsg.style.opacity = 1;
    }
    if (username === "Pickles" && password === "pandapancakes") {
        alert("You have successfully logged in.");
        window.location.href = 'https://dreek16designer.com/secret/Mitrz/';
    } else {
        loginErrorMsg.style.opacity = 1;
    }
    if (username === "GrenadeGuy2035" && password === "Minecraft") {
        alert("You have successfully logged in.");
        window.location.href = 'https://dreek16designer.com/secret/Mitrz/';
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
