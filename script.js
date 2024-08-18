
document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.navbar-toggler');
    const navItems = document.querySelector('.nav-items');
    const openIcon = document.querySelector('.open-icon');
    const closeIcon = document.querySelector('.close-icon');

    // Toggle the menu and icons
    toggler.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the document click event from triggering
        navItems.classList.toggle('show');
        openIcon.classList.toggle('d-none');
        closeIcon.classList.toggle('d-none');
    });

    // Close menu and reset icons when clicking outside
    document.addEventListener('click', (e) => {
        if (!navItems.contains(e.target)) {
            navItems.classList.remove('show');
            openIcon.classList.remove('d-none');
            closeIcon.classList.add('d-none');
        }
    });

    // Close menu and reset icons when clicking on a nav item
    navItems.addEventListener('click', () => {
        navItems.classList.remove('show');
        openIcon.classList.remove('d-none');
        closeIcon.classList.add('d-none');
    });
});









// Function to add fade-in class when element is in viewport
document.addEventListener('DOMContentLoaded', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        fadeInElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }

    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});

// Card flip effect on click
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
        this.classList.toggle('flip');
    });
});





//contact form submition

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const place = document.getElementById('place').value;
    const contact = document.getElementById('contact').value;
    const message = document.getElementById('message').value;

    // Format the message
    const whatsappMessage = `Hello! Here are my details:\n\nFull Name: ${name}\nPlace: ${place}\nContact Number: ${contact}\nMessage: ${message}`;

    // WhatsApp API URL
    const whatsappURL = `https://wa.me/918606746083?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');
});



function openWhatsApp() {
    const phoneNumber = '918606746083';
    const message = 'Hello, I would like to book now';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
}