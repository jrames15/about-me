// Tab functionality
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show selected tab content
    document.getElementById(tabName).classList.add('active');

    // Add active class to clicked button
    event.target.classList.add('active');
}

// Food carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.food-slide');
const totalSlides = slides.length;

function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const slidesContainer = document.getElementById('foodSlides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto-rotate food carousel
setInterval(() => {
    moveSlide(1);
}, 5000);

// Skill animation
function animateSkill(card) {
    const progressBar = card.querySelector('.skill-progress-bar');
    const width = progressBar.getAttribute('data-width');
    progressBar.style.width = width;

    setTimeout(() => {
        progressBar.style.width = '0%';
    }, 3000);
}

// Smooth scrolling for navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Update active nav link
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Back to top button
window.addEventListener('scroll', function () {
    const backToTop = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Handle contact form submission
function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate sending message
    alert(`Thank you ${name}! Your message has been sent. I'll get back to you at ${email} soon!`);

    // Clear form
    event.target.reset();
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
});

// Profile picture click effect
document.querySelector('.profile-pic').addEventListener('click', function () {
    this.style.transform = 'scale(1.1) rotate(360deg)';
    setTimeout(() => {
        this.style.transform = 'scale(1) rotate(0deg)';
    }, 500);
});

// Add some interactive easter eggs
let clickCount = 0;
document.addEventListener('click', function (e) {
    clickCount++;
    if (clickCount === 10) {
        alert('🎉 You found the easter egg! You\'re awesome!');
        document.body.style.animation = 'bgMove 2s infinite';
        setTimeout(() => {
            document.body.style.animation = 'bgMove 12s infinite alternate';
        }, 5000);
        clickCount = 0;
    }
});

// Initialize skill bars on page load
window.addEventListener('load', function () {
    setTimeout(() => {
        document.querySelectorAll('.skill-progress-bar').forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }, 1000);
});