document.getElementById("user-registration").addEventListener("submit", async function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const userType = document.getElementById("user-type").value;
    const specialization = userType === "doctor" ? document.getElementById("specialization").value : "";

    const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, userType, specialization })
    });

    const result = await response.json();
    alert(result.message);
});
