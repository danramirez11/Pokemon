function signUp() {
    const loggedUser = localStorage.getItem("loggedUser"); // Verifica si hay un usuario logueado
    if (loggedUser !== null) {
      window.location.href = "./main.html"; // Redirige a la página principal si hay un usuario logueado
    }
  
    const email = document.getElementById("email-input").value; // Obtiene el valor del campo de correo electrónico
    const password = document.getElementById("password-input").value; // Obtiene el valor del campo de contraseña
    const username = document.getElementById("username").value; // Obtiene el valor del campo de nombre de usuario
  
    
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
    
    const userData = localStorage.getItem("userData");
    let userDataArray = [];
    if (userData) {
      userDataArray = JSON.parse(userData);
    }
  
    const user = {
      username: username,
      email: email,
      password: password,
    };
  
    userDataArray.push(user);
    const updatedUserData = JSON.stringify(userDataArray);
    localStorage.setItem("userData", updatedUserData);
  
    window.location.href = "./login.html";
  }