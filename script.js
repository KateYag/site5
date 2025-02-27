document.addEventListener("DOMContentLoaded", function () {
    function applyStyles() {
        const letters = document.querySelectorAll(".wave-text .letter");
        const isMobile = window.matchMedia("(max-width: 560px)").matches; // Проверяем мобильный экран

        const stylesDesktop = [
            { x: "0vw", y: "-3vw", angle: "8deg" },
            { x: "0vw", y: "-1.5vw", angle: "6deg" },
            { x: "-0.5vw", y: "1vw", angle: "-28deg" },
            { x: "4vw", y: "-2.5vw", angle: "-24deg" },
            { x: "4vw", y: "-4.5vw", angle: "-24deg" },
            { x: "8vw", y: "-5vw", angle: "8deg" },
            { x: "8vw", y: "-4vw", angle: "13deg" },
            { x: "8vw", y: "-1vw", angle: "21deg" },
            { x: "8vw", y: "1vw", angle: "8deg" },
            { x: "8vw", y: "1.5vw", angle: "0deg" },
        ];

        const stylesMobile = [
            { x: "2vw", y: "-37vw", angle: "23deg" },
            { x: "2vw", y: "-32.5vw", angle: "34deg" },
            { x: "0vw", y: "-27vw", angle: "29deg" },
            { x: "0vw", y: "-13.5vw", angle: "99deg" },
            { x: "-9vw", y: "-4.5vw", angle: "96deg" },
            { x: "-15vw", y: "8vw", angle: "44deg" },
            { x: "-18vw", y: "15vw", angle: "43deg" },
            { x: "-20vw", y: "20vw", angle: "21deg" },
            { x: "-20vw", y: "22vw", angle: "7deg" },
            { x: "-20vw", y: "19.5vw", angle: "-14deg" },
        ];

        // Выбираем нужный набор стилей
        const selectedStyles = isMobile ? stylesMobile : stylesDesktop;

        // Применяем стили
        letters.forEach((letter, index) => {
            if (selectedStyles[index]) {
                letter.style.setProperty("--x", selectedStyles[index].x);
                letter.style.setProperty("--y", selectedStyles[index].y);
                letter.style.setProperty("--angle", selectedStyles[index].angle);
            }

            letter.style.opacity = "0";
            letter.style.transform = `translate(${selectedStyles[index].x}, ${selectedStyles[index].y}) rotate(${selectedStyles[index].angle})`;
            letter.style.animation = `waveFadeIn 1s ease-out forwards`;
            letter.style.animationDelay = `${index * 0.1}s`; // Добавляем задержку для эффекта волны

        });
    }

    // Вызываем функцию при загрузке страницы
    applyStyles();

    // Пересчитываем стили при изменении размера окна
    window.addEventListener("resize", applyStyles);
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
const targetDate = new Date("August 7, 2025 12:00:00").getTime();
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

