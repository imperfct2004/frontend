const API_BASE_URL = "https://docyou-backend.onrender.com"; // ✅ Use your actual Render backend URL

document.getElementById("user-registration").addEventListener("submit", async function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const userType = document.getElementById("user-type").value;
    const specialization = userType === "doctor" ? document.getElementById("specialization").value : "";

    try {
        const response = await fetch(`${API_BASE_URL}/api/users/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, userType, specialization })
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        alert("Registration failed. Please try again.");
        console.error("Error:", error);
    }
});
