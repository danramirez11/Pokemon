const loggedUser = localStorage.getItem("loggedUser")
if(loggedUser !== null) {
    window.location.href = "./main.html"
}

function createUser() {
    const email = document.getElementById("email-input").value
    const password = document.getElementById("password-input").value
    const username = document.getElementById("username").value

    const errors = {
        username: "Username is required",
        email: "Email is required",
        password: "Password is required"
    }

    if (username === "") {
        errors.username = "Please enter a username";
    }

    if (email === "") {
        errors.email = "Please enter an email";
    }

    if (password === "") {
        errors.password = "Please enter a password";
    }

    if (username === "" || email === "" || password === "") {
        alert(`Error: ${errors.username}\n${errors.email}\n${errors.password}`);
        return;
    }

    const user = {
        username: username,
        email: email,
        password: password
    }
    const userString = JSON.stringify(user)
    localStorage.setItem("userData", userString)

    window.location.href = "./login.html"
}