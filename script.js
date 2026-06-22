// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Handle form submission
const quoteForm = document.getElementById('quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(quoteForm);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      address: formData.get('address'),
      service: formData.get('service'),
      timeline: formData.get('timeline'),
      details: formData.get('details'),
      timestamp: new Date().toISOString(),
    };
    
    // Send email notification
    try {
      // Replace with your actual backend endpoint or email service
      // For now, this logs the data and shows success message
      console.log('Quote request submitted:', data);
      
      // Alternative: Send via email service like Formspree, EmailJS, etc
      // await fetch('your-email-endpoint', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });
      
      // Show success message
      const successMsg = document.createElement('div');
      successMsg.className = 'form-success';
      successMsg.innerHTML = `
        <div style="background: #10b981; color: white; padding: 16px; border-radius: 12px; margin-bottom: 16px;">
          <strong>✓ Quote request submitted!</strong><br>
          We'll review your request and contact you within 24 hours.
        </div>
      `;
      quoteForm.insertBefore(successMsg, quoteForm.firstChild);
      
      // Reset form
      quoteForm.reset();
      
      // Remove success message after 5 seconds
      setTimeout(() => successMsg.remove(), 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an issue submitting your request. Please try calling or emailing directly.');
    }
  });
}

// Smooth scroll behavior for anchor links (already in CSS, but adding for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
