const utenti = ["ciccioGamer", "icardi", "khaby", "rocco", "anna"];
const password = ["ciccio1", "wandanara", "tiktok", "siffredi33" , "tatangelo"];

function mostraPassword() {
    let bottone = document.getElementById("bottonePassword");
    let password = document.getElementById("password");

    if(password.type == "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }

    bottone.classList.toggle("bi-eye-fill");
    bottone.classList.toggle("bi-eye-slash");
}

function login() {
    let usernameIn = document.getElementById("username").value;
    let passwordIn = document.getElementById("password").value;

    let i = utenti.indexOf(usernameIn);

    if(i == -1) {
        loginFallito("Login Failed, User Not Registered.");
    } else if(password[i] != passwordIn) {
        loginFallito("Login Failed, Password Incorrect");
    } else {
        loginRiuscito();
    }

    console.log(utenti);
    console.log(password);
    console.log(i);
}

function loginFallito(messaggio) {
    let out = document.getElementById("infoLogin");
    out.innerHTML = messaggio;
    out.classList.remove("bg-success");
    out.classList.add("bg-danger");
}

function loginRiuscito() {
    let out = document.getElementById("infoLogin");
    out.innerHTML = "Successful Login";
    out.classList.remove("bg-danger");
    out.classList.add("bg-success");
}

function signupPrompt() {
    let prompt = document.getElementById("signupPrompt");
    prompt.classList.toggle("d-none");
}

function signUp() {
    let usernameIn = document.getElementById("usernameSignup").value;
    let passwordIn = document.getElementById("passwordSignup").value;



    let i = utenti.indexOf(usernameIn);
    if(i == -1) {
        if(passwordIn.length < 6) {
            signupFallito("Signup Error, Password Shorter Than 6 Characters");
            return;
        }
        utenti.push(usernameIn);
        password.push(passwordIn);
        singupRiuscito();
    } else {
        signupFallito("Signup Error, User Already Signed up");
    }

    console.log(utenti);
    console.log(password);
}

function singupRiuscito() {
    let out = document.getElementById("infoSignup");
    out.innerHTML = "Successful Signup";
    out.classList.remove("bg-danger");
    out.classList.add("bg-success");
}

function signupFallito(messaggio) {
    let out = document.getElementById("infoSignup");
    out.innerHTML = messaggio;
    out.classList.remove("bg-success");
    out.classList.add("bg-danger");
}