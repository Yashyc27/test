// Add event listeners for animations and interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Function to animate skill bars based on scrolling
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const animateSkills = () => {
        skillBars.forEach(skillBar => {
            const skillLevel = skillBar.getAttribute('data-skill-level');
            skillBar.style.width = skillLevel + '%';
        });
    };

    // Trigger the skill bar animation when scrolled into view
    const skillSection = document.querySelector('.skills');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(skillSection);

    // Timeline events animation
    const timelineEvents = document.querySelectorAll('.timeline-event');

    timelineEvents.forEach(event => {
        event.classList.add('timeline-animation'); // Add class for animation
    });

    // Smooth scroll for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust scroll position
                behavior: 'smooth'
            });
        });
    });

    // Tooltip for certifications on hover
    const certificationItems = document.querySelectorAll('.certifications li[data-tooltip]');

    certificationItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const tooltip = this.getAttribute('data-tooltip');
            const tooltipElement = document.createElement('div');
            tooltipElement.classList.add('tooltip');
            tooltipElement.textContent = tooltip;
            this.appendChild(tooltipElement);
        });

        item.addEventListener('mouseleave', function() {
            const tooltipElement = this.querySelector('.tooltip');
            if (tooltipElement) {
                tooltipElement.remove();
            }
        });
    });
});

// Function for scrolling to top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.classList.add('scroll-to-top');
scrollToTopButton.textContent = '↑';

document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show or hide scroll-to-top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});
