// ===========================
// Mobile Menu Toggle
// ===========================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===========================
// Active Navigation Link
// ===========================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===========================
// Scroll Animation
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill tags, project cards, education cards
document.querySelectorAll('.skill-category, .project-card, .education-card, .achievement-card, .experience-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===========================
// Smooth Scroll
// ===========================

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

// ===========================
// Back to Top Button (Optional Enhancement)
// ===========================

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 300) {
        // Add any scroll-based effects here
    }
});

// ===========================
// Typing Animation for Hero Title (Optional)
// ===========================

function typeWriter() {
    const heroText = document.querySelector('.hero-text h1');
    const text = heroText.textContent;
    heroText.textContent = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            heroText.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }

    // Uncomment to enable typing animation
    // type();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // typeWriter();
});

// ===========================
// Skill Tag Interaction
// ===========================

document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
    });

    tag.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// ===========================
// Contact Form (if needed in future)
// ===========================

const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// ===========================
// Lazy Loading for Images (Optional)
// ===========================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ===========================
// Add scroll spy functionality
// ===========================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const id = section.getAttribute('id');
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);
document.addEventListener('DOMContentLoaded', updateActiveNavLink);
