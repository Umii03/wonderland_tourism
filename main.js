// Initialize Lucide Icons
if (window.lucide) { lucide.createIcons(); }

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');

mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    const icon = mobileNav.classList.contains('active') ? 'x' : 'menu';
    mobileMenuBtn.innerHTML = `<i data-lucide="${icon}"></i>`;
    lucide.createIcons();
});

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileMenuBtn.innerHTML = `<i data-lucide="menu"></i>`;
        lucide.createIcons();
    });
});

// Sticky Header on Scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Accordion Logic
const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('i');
        
        // Toggle the current accordion
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            icon.setAttribute('data-lucide', 'chevron-down');
        } else {
            // Close all other accordions first (optional, keeping it simple here without closing others)
            content.style.maxHeight = content.scrollHeight + "px";
            icon.setAttribute('data-lucide', 'chevron-up');
        }
        lucide.createIcons();
    });
});



// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.section-title, .section-intro, .feature-card, .meal-card, .why-card, .audience-card, .review-card, .step, .contact-card, .about-text p, .about-image-wrapper img');

revealElements.forEach(el => {
    el.classList.add('reveal');
});

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});
