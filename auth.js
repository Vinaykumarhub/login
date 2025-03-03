function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Redirect to home page after successful login
            window.location.href = "home.html";
        })
        .catch((error) => {
            errorMessage.innerText = error.message; // Display error
        });
}

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "index.html"; // Redirect to login page
    }).catch((error) => {
        console.error("Error during logout:", error);
    });
}
