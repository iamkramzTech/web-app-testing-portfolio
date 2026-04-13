// LOGIN
document.getElementById("welcomeSection")?.classList.add("hidden");
    let isLoginStatus = false;
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    // ❌ BUG: Allows empty password
    if(email === "test@gmail.com" && password === "123456") {
        document.getElementById("loginMessage").innerText = "Login successful!";
        isLoginStatus = true;
    } 
    else {
        document.getElementById("loginMessage").innerText = "Invalid credentials";
    }


// successful login
if (isLoginStatus) {
  document.getElementById("welcomeSection").classList.remove("hidden");
  document.getElementById("loginSection").classList.add("hidden");
  document.getElementById("email").innerText = email;
} 

});


// REGISTER
document.getElementById("registerForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // ❌ BUG: No email validation
    // ❌ BUG: Password mismatch still passes
    if(name !== "" && email !== "" && password !== "") {
        document.getElementById("registerMessage").innerText = "Registered successfully!";
    } else {
        document.getElementById("registerMessage").innerText = "Please fill all fields";
    }
});

