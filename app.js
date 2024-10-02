// Language selection
const languageSelect = document.getElementById('language-select');
const textElements = document.querySelectorAll('.lang');

// Function to switch language
function switchLanguage(language) {
    textElements.forEach(el => {
        const langText = el.getAttribute(`data-${language}`);
        if (langText) {
            if (el.placeholder !== undefined) {
                el.placeholder = langText;
            } else {
                el.textContent = langText;
            }
        }
    });
}

// Event listener for language selection
languageSelect.addEventListener('change', (e) => {
    switchLanguage(e.target.value);
});

// Initialize language based on default selection
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage(languageSelect.value);
    document.getElementById('current-year').textContent = new Date().getFullYear(); // Update copyright
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth Scrolling
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back-to-top button
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Privacy Policy Modal
const privacyPolicyLinks = document.querySelectorAll('a[href="#privacy-policy"]');
const privacyModal = document.getElementById('privacy-policy');
const closeBtn = document.querySelector('.close-btn');

privacyPolicyLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        privacyModal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', function() {
    privacyModal.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target == privacyModal) {
        privacyModal.style.display = 'none';
    }
});

// EmailJS Integration
(function(){
    emailjs.init('SYRTHvjeWLapxz63t'); // Using your Public Key (User ID)
})();

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Basic Form Validation
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Send the email
    emailjs.sendForm('service_p1p3lcj', 'template_ud06xzj', this)
        .then(function() {
            alert('Thank you for your message!');
            contactForm.reset();
        }, function(error) {
            alert('Oops! Something went wrong. Please try again.');
            console.log('FAILED...', error);
        });
});
