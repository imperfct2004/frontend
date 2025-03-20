document.getElementById("user-registration").addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const userType = document.getElementById("user-type").value;
    const specialization = userType === "doctor" ? document.getElementById("specialization").value : "";

    try {
        const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, userType, specialization })
        });

        const result = await response.json();
        alert(result.message);

        if (response.ok) {
            document.getElementById("registration-card").classList.add("hidden");
            document.getElementById("appointment-card").classList.remove("hidden");
        }
    } catch (error) {
        alert("Registration failed. Please try again.");
    }
});
