function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.getElementById("user-registration").addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Check if email format is correct
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const formData = new FormData(this);

    try {
        const response = await fetch("https://docyou-backend.onrender.com/api/users/register", {
            method: "POST",
            body: formData
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        alert("Registration failed. Please try again.");
    }
});
