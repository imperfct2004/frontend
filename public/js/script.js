document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const signInForm = document.querySelector(".sign-in-container");
    const userTypeForm = document.querySelector(".user-type-container");
    const doctorForm = document.querySelector(".doctor-container");
    const userForm = document.querySelector(".user-container");

    // Buttons
    document.getElementById("showRegister").addEventListener("click", function () {
        signInForm.classList.add("hidden");
        userTypeForm.classList.remove("hidden");
    });
    
    document.getElementById("showLogin").addEventListener("click", function () {
        userTypeForm.classList.add("hidden");
        signInForm.classList.remove("hidden");
    });
    
    document.getElementById("registerDoctor").addEventListener("click", function () {
        userTypeForm.classList.add("hidden");
        doctorForm.classList.remove("hidden");
    });
    
    document.getElementById("registerUser").addEventListener("click", function () {
        userTypeForm.classList.add("hidden");
        userForm.classList.remove("hidden");
    });
    
    document.getElementById("backToUserType").addEventListener("click", function () {
        doctorForm.classList.add("hidden");
        userTypeForm.classList.remove("hidden");
    });
    
    document.getElementById("backToUserType2").addEventListener("click", function () {
        userForm.classList.add("hidden");
        userTypeForm.classList.remove("hidden");
    });
});
