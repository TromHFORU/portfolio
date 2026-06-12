function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Find the span element by its ID
const yearSpan = document.getElementById('current-year');

// Get the full 4-digit current year from the system clock
const currentYear = new Date().getFullYear();

// Insert the dynamic year into the HTML
yearSpan.textContent = currentYear;

