// js/script.js
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Item added to cart! 🛒');
  });
});

// Form Validation for Contact Page
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields 😬');
      e.preventDefault(); // stops form from submitting
    } else {
      alert('Message sent successfully! 💌');
    }
  });
}
