document.getElementById("doctor-search").addEventListener("submit", async function(event) {
    event.preventDefault();

    try {
        const response = await fetch("http://localhost:5000/doctors");
        const doctors = await response.json();

        const doctorList = document.getElementById("doctor-list");
        doctorList.innerHTML = doctors.map(doctor => `
            <div class='doctor-item'>
                <strong>${doctor.name}</strong> - ${doctor.specialization}
            </div>
        `).join("");
    } catch (error) {
        alert("Failed to fetch doctors. Try again later.");
    }
});