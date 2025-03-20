document.addEventListener("DOMContentLoaded", function () {
    const doctorSearchForm = document.getElementById("doctor-search");
    
    if (doctorSearchForm) {
        doctorSearchForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            try {
                const response = await fetch("https://docyou-backend.onrender.com/doctors");
                const doctors = await response.json();

                const doctorList = document.getElementById("doctor-list");
                if (doctorList) {
                    doctorList.innerHTML = doctors.map(doctor => `
                        <div class='doctor-item'>
                            <strong>${doctor.name}</strong> - ${doctor.specialization}
                        </div>
                    `).join("");
                } else {
                    console.error("doctor-list element not found in DOM.");
                }
            } catch (error) {
                console.error("Failed to fetch doctors:", error);
                alert("Failed to fetch doctors. Try again later.");
            }
        });
    } else {
        console.error("doctor-search form not found in DOM.");
    }
});