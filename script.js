// Modern JavaScript with enhanced features

// Loading Screen
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  setTimeout(() => {
    loadingScreen.classList.add('fade-out');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 1000);
});

// Mobile Menu
const hamburger = document.querySelector('.hamburger--slider-r');
const menu = document.querySelector('.menu');

if (hamburger && menu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
      hamburger.classList.remove('is-active');
      menu.classList.remove('active');
    }
  });
}

// Typing Text Animation
if (document.querySelector('.multiple')) {
  const typed = new Typed('.multiple', {
    strings: ['Physical Fitness', 'Weight Gain','Strength Training','Fat Loss','Weight Lifting','Running/Cardio'],
    typeSpeed: 60,
    backSpeed: 60,
    backdelay: 1000,
    loop: true,
  });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Lazy Loading for Images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary-color);
  color: white;
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.opacity = '1';
    scrollToTopBtn.style.transform = 'translateY(0)';
  } else {
    scrollToTopBtn.style.opacity = '0';
    scrollToTopBtn.style.transform = 'translateY(10px)';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Enhanced Form Validation
function validateForm(form) {
  const inputs = form.querySelectorAll('input[required], select[required]');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.borderColor = '#ff4444';
      isValid = false;
    } else {
      input.style.borderColor = '#ddd';
    }
  });

  return isValid;
}

// Add form validation to registration forms
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    if (!validateForm(form)) {
      e.preventDefault();
      alert('Please fill in all required fields.');
    }
  });
});

// Performance Optimization - Debounced Scroll Handler
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Navbar background change on scroll
const navbar = document.querySelector('nav');
const debouncedScroll = debounce(() => {
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    navbar.style.backdropFilter = 'blur(10px)';
  } else {
    navbar.style.backgroundColor = 'black';
    navbar.style.backdropFilter = 'none';
  }
}, 10);

window.addEventListener('scroll', debouncedScroll);
  