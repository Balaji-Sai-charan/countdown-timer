let countdownInterval;

function startCountdown() {
    const input = document.getElementById("datetime").value;
    
    if (!input) {
        alert("Please enter a valid date and time.");
        return;
    }

    const countDownDate = new Date(input).getTime();
    
    document.getElementById("countdown").style.display = "flex";
    
    clearInterval(countdownInterval);

    countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").style.display = "none";
            document.getElementById("message").innerText = "The event has started!";
        }
    }, 1000);
}

document.getElementById("start-button").addEventListener("click", startCountdown);
