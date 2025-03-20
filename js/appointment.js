document.getElementById("appointment-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const date = document.getElementById("appointment-date").value;
    const time = document.getElementById("appointment-time").value;

    try {
        const response = await fetch("http://localhost:5000/book-appointment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ date, time })
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        alert("Failed to book appointment. Try again later.");
    }
});
