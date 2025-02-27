document.addEventListener("DOMContentLoaded", function () {
    let progress = 1;
    let progressText = document.getElementById("progress");

    let interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
            document.getElementById("preloader").style.display = "none";
            document.getElementById("content").style.display = "block";
        } else {
            progress++;
            progressText.textContent = progress;
        }
    }, 25); // Скорость загрузки
});








function startCountdown(targetDate) {
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            document.getElementById("countdown").innerHTML = "Событие началось!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}

// Устанавливаем дату окончания
const targetDate = new Date("November 15, 2025 12:00:00").getTime();
startCountdown(targetDate);


document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    hiddenElements.forEach(element => observer.observe(element));
});


document.addEventListener("DOMContentLoaded", () => {
    const titleSection = document.querySelector(".fade-in");
    titleSection.classList.add("show");
});

