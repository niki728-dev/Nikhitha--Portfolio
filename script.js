// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // animate outline with a slight delay
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // Optional: remove class to re-animate when scrolling up
            // entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.section, .hero-content, .glass-card, .feature-card, .skill-category');
hiddenElements.forEach((el) => {
    el.classList.add('hidden');
    observer.observe(el);
});

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Simple toggle for now, ideally we'd add a class to slide it in
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.right = '0';
        navLinks.style.backgroundColor = '#112240';
        navLinks.style.width = '100%';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 10px 30px -10px rgba(2,12,27,0.7)';
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// Reset menu styles on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'row';
        navLinks.style.position = 'static';
        navLinks.style.width = 'auto';
        navLinks.style.padding = '0';
        navLinks.style.boxShadow = 'none';
        navLinks.style.backgroundColor = 'transparent';
    } else {
        navLinks.style.display = 'none';
    }
});
