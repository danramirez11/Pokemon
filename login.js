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

    const userDataArray = JSON.parse(userData);
    const user = userDataArray.find(
      (user) => user.email === email && user.password === password
    );
  
    if (user) {
      const userString = JSON.stringify(user);
      localStorage.setItem("loggedUser", userString);
      window.location.href = "./main.html";
    } else {
      alert("Incorrect email or password");
    }
  }