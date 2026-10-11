const TOTAL_SEATS = 8;

let bookedSeats = new Set([3]);

const seatLayout = document.getElementById("seatLayout");
const seatSelect = document.getElementById("seatSelect");
const activityLog = document.getElementById("activityLog");

function logActivity(message) {
    const item = document.createElement("p");

    item.textContent =
        new Date().toLocaleTimeString() + " - " + message;

    activityLog.prepend(item);
}

function renderSeats() {
    seatLayout.innerHTML = "";

    for (let i = 0; i < TOTAL_SEATS; i++) {
        const isBooked = bookedSeats.has(i);
        const button = document.createElement("button");

        button.type = "button";

        button.className =
            "seat " + (isBooked ? "booked" : "free");

        button.textContent =
            "Seat " + i + (isBooked ? " - Booked" : " - Free");

        button.setAttribute("aria-pressed", "false");

        button.addEventListener("click", function () {
            seatSelect.value = i;
            updateSelectedSeat();
        });

        seatLayout.appendChild(button);
    }

    document.getElementById("total").textContent = TOTAL_SEATS;
    document.getElementById("occupied").textContent = bookedSeats.size;
    document.getElementById("available").textContent =
        TOTAL_SEATS - bookedSeats.size;

    updateSelectedSeat();
}

function updateSelectedSeat() {
    const selected = Number(seatSelect.value);

    document.querySelectorAll(".seat").forEach(
        function (button, index) {
            const isSelected = index === selected;

            button.classList.toggle("selected", isSelected);

            button.setAttribute(
                "aria-pressed",
                String(isSelected)
            );
        }
    );
}

document.getElementById("bookBtn").addEventListener(
    "click",
    function () {
        const seat = Number(seatSelect.value);

        if (bookedSeats.has(seat)) {
            alert("Seat " + seat + " is already booked!");

            logActivity(
                "Seat " + seat + " booking failed: already booked."
            );

            return;
        }

        bookedSeats.add(seat);

        renderSeats();

        logActivity("Seat " + seat + " booked successfully.");

        alert("Seat " + seat + " booked successfully!");
    }
);

document.getElementById("releaseBtn").addEventListener(
    "click",
    function () {
        const seat = Number(seatSelect.value);

        if (!bookedSeats.has(seat)) {
            alert("Seat " + seat + " is already free!");

            logActivity("Seat " + seat + " is already free.");

            return;
        }

        bookedSeats.delete(seat);

        renderSeats();

        logActivity("Seat " + seat + " released successfully.");

        alert("Seat " + seat + " released successfully!");
    }
);

document.getElementById("resetBtn").addEventListener(
    "click",
    function () {
        if (!confirm("Reset all bookings?")) {
            return;
        }

        bookedSeats.clear();
        seatSelect.value = "0";

        renderSeats();

        logActivity("All seats have been reset.");
    }
);

seatSelect.addEventListener("change", updateSelectedSeat);

renderSeats();
