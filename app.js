// Update copyright year
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// EmailJS Integration
(function(){
    emailjs.init('SYRTHvjeWLapxz63t');
})();

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    emailjs.sendForm('service_p1p3lcj', 'template_ud06xzj', this)
        .then(function() {
            alert('Thank you for your message!');
            contactForm.reset();
        }, function(error) {
            alert('Oops! Something went wrong. Please try again.');
            console.log('FAILED...', error);
        });
});