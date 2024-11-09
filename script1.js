let countdownInterval;

// Set the target date and time (YYYY-MM-DDTHH:MM:SS)
// const targetDate = new Date("2024-12-18T00:00:00").getTime(); // Set target date to 18th December 2024 at 00:00:00

// Set the target date and time to 1 minute from now
const targetDate = new Date(Date.now() + 1 * 60 * 1000).getTime(); // Set target date to 1 minute from now


function startCountdown() {
    countdownInterval = setInterval(function () {
        const now = new Date().getTime(); // Get current time
        const distance = targetDate - now; // Calculate the distance to the target date

        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the respective elements
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

        // If the countdown is finished, redirect to the wishes.html page
        if (distance <= 0) {
            clearInterval(countdownInterval);
            window.location.href = "http://localhost:8000/wishes.html";; // Redirect to the wishes page
            // document.getElementById('message').innerHTML = "Countdown finished!";
        }
    }, 1000);
}

// Automatically start the countdown when the page loads
window.onload = function() {
    startCountdown();
};