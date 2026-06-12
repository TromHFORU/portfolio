function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Wait for the DOM structure to load completely
document.addEventListener('DOMContentLoaded', () => {
    // Locate the empty span by its ID
    const yearSpan = document.getElementById('current-year');
    
    // Fetch the 4-digit year from the system clock
    const currentYear = new Date().getFullYear();
    
    // Inject the year into the webpage
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }
});


