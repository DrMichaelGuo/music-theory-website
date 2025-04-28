// Main JavaScript for Music Theory Website

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add mobile navigation toggle if needed
    const header = document.querySelector('header');
    
    // Add scroll effect to header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Add animation to elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-card, .grade-card, .note-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate-bounce');
            }
        });
    };

    // Call once on load and then on scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Piano key functionality (if present)
    const pianoKeys = document.querySelectorAll('.piano-key');
    
    if (pianoKeys.length > 0) {
        pianoKeys.forEach(key => {
            key.addEventListener('click', function() {
                const note = this.getAttribute('data-note');
                if (note) {
                    playNote(note);
                }
            });
        });
    }

    // Function to play audio notes
    function playNote(noteName) {
        const audio = new Audio(`../audio/${noteName}.mp3`);
        audio.play();
    }

    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});
