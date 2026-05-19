// Initialize Lucide Icons
if (window.lucide) { lucide.createIcons(); }

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');

if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        const icon = mobileNav.classList.contains('active') ? 'x' : 'menu';
        mobileMenuBtn.innerHTML = `<i data-lucide="${icon}"></i>`;
        if (window.lucide) lucide.createIcons();
    });
}

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('.mobile-link');
if (mobileLinks.length > 0 && mobileNav && mobileMenuBtn) {
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileMenuBtn.innerHTML = `<i data-lucide="menu"></i>`;
            if (window.lucide) lucide.createIcons();
        });
    });
}

// Sticky Header on Scroll
const header = document.getElementById('header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Accordion Logic
const accordionHeaders = document.querySelectorAll('.accordion-header');
if (accordionHeaders.length > 0) {
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            if (!content) return;
            
            // Lucide converts <i> to <svg>, so query for either
            const icon = header.querySelector('i, svg');
            
            // Toggle the current accordion
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                if (icon) {
                    // Recreate i tag to avoid svg mutation issues with Lucide
                    const newIcon = document.createElement('i');
                    newIcon.setAttribute('data-lucide', 'chevron-down');
                    icon.replaceWith(newIcon);
                }
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                if (icon) {
                    // Recreate i tag to avoid svg mutation issues with Lucide
                    const newIcon = document.createElement('i');
                    newIcon.setAttribute('data-lucide', 'chevron-up');
                    icon.replaceWith(newIcon);
                }
            }
            if (window.lucide) lucide.createIcons();
        });
    });
}

// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.section-title, .section-intro, .feature-card, .meal-card, .why-card, .audience-card, .review-card, .step, .contact-card, .about-text p, .about-image-wrapper img');

if (revealElements.length > 0) {
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
}

// Safe smooth scroll for anchor links (prevents console errors if target section doesn't exist)
const scrollLinks = document.querySelectorAll('a[href^="#"]');
if (scrollLinks.length > 0) {
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}
