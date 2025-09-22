// ========== Navbar Dropdown ========== //
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const dropdown = document.querySelector(".dropdown");

    if (hamburger && dropdown) {
        hamburger.addEventListener("click", () => {
            dropdown.classList.toggle("active");
        });
    }
});

// ========== Typewriter Effect ========== //
const typewriter = document.querySelector(".typewriter-text");
if (typewriter) {
    const words = ["Student", "Web Developer", "Programmer"];
    let i = 0, j = 0, currentWord = "", isDeleting = false;

    function typingEffect() {
        currentWord = words[i];
        if (isDeleting) {
            typewriter.textContent = currentWord.substring(0, j--);
            if (j < 0) {
                isDeleting = false;
                i = (i + 1) % words.length;
                setTimeout(typingEffect, 500);
            } else {
                setTimeout(typingEffect, 50);
            }
        } else {
            typewriter.textContent = currentWord.substring(0, j++);
            if (j > currentWord.length) {
                isDeleting = true;
                setTimeout(typingEffect, 1000);
            } else {
                setTimeout(typingEffect, 100);
            }
        }
    }

    typingEffect();
}

// ========== Form Notification ========== //
const form = document.querySelector("form");
const notification = document.querySelector(".notification");

if (form && notification) {
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // jangan reload page

        // simulasi submit sukses
        notification.style.display = "block";
        notification.style.opacity = "1";

        setTimeout(() => {
            notification.style.opacity = "0";
        }, 3000);

        form.reset(); // reset isi form
    });
}

// ========== Particle Background ========== //
function createParticle() {
    const particlesContainer = document.querySelector(".particles");
    if (!particlesContainer) return;

    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = `${Math.random() * window.innerWidth}px`;
    particle.style.animationDuration = `${2 + Math.random() * 3}s`;
    particle.style.opacity = Math.random();
    particle.style.transform = `scale(${Math.random()})`;

    particlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 5000);
}

setInterval(createParticle, 200);
