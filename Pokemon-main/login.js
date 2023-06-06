const loggedUser = localStorage.getItem("loggedUser")
if(loggedUser !== null) {
    window.location.href = "./main.html"
}

function login() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const errors = {
        email: "Email is required",
        password: "Password is required",
    };
    if (email === "") {
        errors.email = "Please enter an email";
    }

    if (password === "") {
        errors.password = "Please enter a password";
    }

    if (email === "" || password === "") {
        alert(`Error: ${errors.username}\n${errors.email}\n${errors.password}`);
        return;
    }
    const userData = localStorage.getItem("userData")
    if (!userData) {
        alert("Error: User not found");
        return;
    }

    const userDataJSON = JSON.parse(userData)

    if (email === userDataJSON.email && password === userDataJSON.password) {
        const userString = JSON.stringify(userDataJSON)
        localStorage.setItem("loggedUser", userString)
        window.location.href = "./main.html"
    } else {
        alert("Incorrect username or password")
    }

}