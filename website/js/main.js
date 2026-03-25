/**
 * ElevexSocials - Main JavaScript File
 * Modern vanilla JS with ES6+ syntax
 * Features: Navigation, Animations, Forms, and more
 */

// ============================================================================
// 1. MOBILE NAVIGATION TOGGLE
// ============================================================================

function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const body = document.body;

  if (!hamburger) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu?.classList.toggle('active');
    body.classList.toggle('nav-open');
  });

  // Close menu when nav link clicked
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu?.classList.remove('active');
      body.classList.remove('nav-open');
    });
  });
}

// ============================================================================
// 2. SMOOTH SCROLL WITH OFFSET
// ============================================================================

function initSmoothScroll() {
  const NAVBAR_HEIGHT = 80;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const offsetTop = target.offsetTop - NAVBAR_HEIGHT;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });
}

// ============================================================================
// 3. SCROLL REVEAL ANIMATIONS
// ============================================================================

function initScrollReveal() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const element = entry.target;

      // Animate element
      element.classList.add('revealed');

      // Stagger children animations
      const children = element.querySelectorAll('[data-delay]');
      children.forEach(child => {
        const delay = parseInt(child.getAttribute('data-delay')) || 0;
        child.style.animationDelay = `${delay}ms`;
        child.classList.add('revealed');
      });

      observer.unobserve(element);
    });
  }, observerOptions);

  // Observe all reveal elements
  document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right').forEach(el => {
    observer.observe(el);
  });
}

// ============================================================================
// 4. NAVBAR SCROLL EFFECT
// ============================================================================

function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  const SCROLL_THRESHOLD = 50;

  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ============================================================================
// 5. STATS COUNTER ANIMATION
// ============================================================================

function initStatsCounter() {
  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const statsContainer = entry.target;
      const statElements = statsContainer.querySelectorAll('[data-target]');

      statElements.forEach(element => {
        const target = parseInt(element.getAttribute('data-target'));
        const hasSuffix = element.getAttribute('data-suffix') === '+';
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;
        let currentStep = 0;

        const counter = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;
          const current = Math.floor(target * progress);
          element.textContent = current + (hasSuffix ? '+' : '');

          if (currentStep >= steps) {
            element.textContent = target + (hasSuffix ? '+' : '');
            clearInterval(counter);
          }
        }, stepDuration);
      });

      observer.unobserve(statsContainer);
    });
  }, observerOptions);

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

// ============================================================================
// 6. TESTIMONIAL SLIDER
// ============================================================================

function initTestimonialSlider() {
  const slider = document.querySelector('.testimonial-slider');
  if (!slider) return;

  const cards = slider.querySelectorAll('.testimonial-card');
  const prevBtn = slider.querySelector('.slider-btn-prev');
  const nextBtn = slider.querySelector('.slider-btn-next');
  let currentIndex = 0;
  let autoplayInterval = null;

  if (cards.length === 0) return;

  function showSlide(index) {
    cards.forEach((card, i) => {
      card.classList.remove('active');
      if (i === index) {
        card.classList.add('active');
      }
    });
    currentIndex = index;
  }

  function nextSlide() {
    let next = (currentIndex + 1) % cards.length;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (currentIndex - 1 + cards.length) % cards.length;
    showSlide(prev);
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // Event listeners
  prevBtn?.addEventListener('click', () => {
    stopAutoplay();
    prevSlide();
    startAutoplay();
  });

  nextBtn?.addEventListener('click', () => {
    stopAutoplay();
    nextSlide();
    startAutoplay();
  });

  // Pause on hover
  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);

  // Initialize
  showSlide(0);
  startAutoplay();
}

// ============================================================================
// 7. FAQ ACCORDION
// ============================================================================

function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      // Close other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current item
      item.classList.toggle('active');
    });
  });
}

// ============================================================================
// 8. ACTIVE NAV LINK HIGHLIGHTING
// ============================================================================

function initActiveNavLink() {
  const navLinks = document.querySelectorAll('.nav-menu a');
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Exact match or partial match for home page
    const isActive = currentPath === href ||
                     (href === '/' && currentPath === '') ||
                     (href !== '/' && currentPath.includes(href));

    if (isActive) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ============================================================================
// 9. BACK TO TOP BUTTON
// ============================================================================

function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (!backToTopBtn) return;

  const SCROLL_THRESHOLD = 300;

  window.addEventListener('scroll', () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ============================================================================
// 10. FORM VALIDATION
// ============================================================================

function initFormValidation() {
  const contactForms = document.querySelectorAll('.contact-form');

  contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Clear previous errors
      form.querySelectorAll('.error-message').forEach(msg => msg.remove());
      form.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
      });

      let isValid = true;

      // Check required fields
      form.querySelectorAll('[required]').forEach(field => {
        const formGroup = field.closest('.form-group');
        if (!field.value.trim()) {
          isValid = false;
          if (formGroup) {
            formGroup.classList.add('error');
            const errorMsg = document.createElement('span');
            errorMsg.className = 'error-message';
            errorMsg.textContent = `${field.name} is required`;
            formGroup.appendChild(errorMsg);
          }
        }
      });

      // Check email format
      const emailField = form.querySelector('input[type="email"]');
      if (emailField && emailField.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
          isValid = false;
          const formGroup = emailField.closest('.form-group');
          if (formGroup) {
            formGroup.classList.add('error');
            const errorMsg = document.createElement('span');
            errorMsg.className = 'error-message';
            errorMsg.textContent = 'Please enter a valid email address';
            formGroup.appendChild(errorMsg);
          }
        }
      }

      if (isValid) {
        // Form is valid - you can submit here
        console.log('Form is valid, ready to submit');
        // Optionally submit the form
        // form.submit();
      }
    });
  });
}

// ============================================================================
// 11. PARTICLE/FLOATING ELEMENTS
// ============================================================================

function initParticles() {
  const heroSection = document.querySelector('.hero');
  if (!heroSection) return;

  const particleCount = 20;
  const container = document.createElement('div');
  container.className = 'particles-container';
  container.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  `;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    const size = Math.random() * 4 + 2;
    const delay = Math.random() * 2;
    const duration = Math.random() * 3 + 4;
    const xStart = Math.random() * 100;
    const yStart = Math.random() * 100;

    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      left: ${xStart}%;
      top: ${yStart}%;
      animation: float ${duration}s ease-in-out ${delay}s infinite;
    `;

    container.appendChild(particle);
  }

  // Inject animation keyframes if not present
  if (!document.querySelector('style[data-particles]')) {
    const style = document.createElement('style');
    style.setAttribute('data-particles', 'true');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
        50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }

  heroSection.style.position = 'relative';
  heroSection.insertBefore(container, heroSection.firstChild);
}

// ============================================================================
// 12. PAGE LOAD ANIMATION
// ============================================================================

function initPageLoadAnimation() {
  document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure styles are applied
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 100);
  });
}

// ============================================================================
// 13. LAZY LOADING
// ============================================================================

function initLazyLoading() {
  const images = document.querySelectorAll('img:not([loading])');

  images.forEach(img => {
    img.setAttribute('loading', 'lazy');
  });

  // Optional: Use IntersectionObserver for better control
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.add('loaded');
          }
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// ============================================================================
// INITIALIZATION
// ============================================================================

function init() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAll);
  } else {
    initializeAll();
  }
}

function initializeAll() {
  // Initialize all features in order
  initMobileNav();
  initSmoothScroll();
  initNavbarScroll();
  initPageLoadAnimation();
  initScrollReveal();
  initStatsCounter();
  initTestimonialSlider();
  initFAQAccordion();
  initActiveNavLink();
  initBackToTop();
  initFormValidation();
  initParticles();
  initLazyLoading();

  console.log('ElevexSocials JS initialized successfully');
}

// Start initialization
init();
