import './style.css'

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Header Scroll Effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('bg-dark/90', 'backdrop-blur-md', 'shadow-lg');
  } else {
    header.classList.remove('bg-dark/90', 'backdrop-blur-md', 'shadow-lg');
  }
});

// Simple Fade-in Animation Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      entry.target.classList.remove('opacity-0', 'translate-y-10');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

// Target elements to animate
document.querySelectorAll('.animate-on-scroll').forEach((el) => {
  el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out');
  observer.observe(el);
});

// Hero Animation Trigger
setTimeout(() => {
  const heroContent = document.getElementById('hero-content');
  if (heroContent) {
    heroContent.classList.remove('translate-y-10', 'opacity-0');
    heroContent.classList.add('transition-all', 'duration-1000', 'ease-out');
  }
}, 100);


// Testimonial Slider
const slides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.remove('opacity-0', 'translate-x-full', '-translate-x-full');
      slide.classList.add('opacity-100', 'translate-x-0');
    } else {
      slide.classList.remove('opacity-100', 'translate-x-0');
      slide.classList.add('opacity-0');
      if (i < index) {
        slide.classList.add('-translate-x-full');
      } else {
        slide.classList.add('translate-x-full');
      }
    }
  });
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
  });
}

// FAQ Accordion
document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector('span:last-child');

    // Toggle current
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.classList.remove('rotate-45');
    } else {
      // Close others (optional)
      document.querySelectorAll('.faq-toggle').forEach(otherBtn => {
        if (otherBtn !== button) {
          otherBtn.nextElementSibling.style.maxHeight = null;
          otherBtn.querySelector('span:last-child').classList.remove('rotate-45');
        }
      });

      content.style.maxHeight = content.scrollHeight + "px";
      icon.classList.add('rotate-45');
    }
  });
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic Confirmation
    if (name && email && message) {
      // Simulate sending
      const btn = contactForm.querySelector('button');
      const originalText = btn.innerText;
      btn.innerText = 'Sending...';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerText = 'Message Sent!';
        btn.classList.add('bg-green-600', 'border-green-600', 'text-white');
        formStatus.innerText = "Thank you for contacting Aurum Strategy. We will respond within 24 hours.";
        formStatus.classList.remove('hidden', 'text-red-500');
        formStatus.classList.add('text-green-400');
        contactForm.reset();

        setTimeout(() => {
          btn.innerText = originalText;
          btn.disabled = false;
          btn.classList.remove('bg-green-600', 'border-green-600');
        }, 3000);
      }, 1500);
    }
  });
}
