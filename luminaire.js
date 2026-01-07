// Luxury Particle Background
particlesJS('gold-particles', {
    particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#D4AF37" },
        shape: { type: "circle" },
        opacity: { value: 0.4, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#D4AF37",
            opacity: 0.1,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            resize: true
        }
    },
    retina_detect: true
});

// Luxury Cursor
function initLuxuryCursor() {
    if (window.matchMedia('(max-width: 768px)').matches) return;
    
    const cursor = document.querySelector('.luxury-cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .portfolio-item, .service-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '50px';
            cursor.style.height = '50px';
            cursor.style.background = 'rgba(212, 175, 55, 0.1)';
            cursor.style.borderColor = 'var(--luxury-gold)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.background = 'transparent';
            cursor.style.borderColor = 'var(--luxury-gold)';
        });
    });
}

// Animated Counter
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                setTimeout(updateCounter, 16);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Nav Scroll Effect
function initNavScroll() {
    const nav = document.querySelector('.luxury-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

// Portfolio Hover Effect
function initPortfolio() {
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.zIndex = '10';
        });
        
        item.addEventListener('mouseleave', () => {
            setTimeout(() => {
                item.style.zIndex = '1';
            }, 300);
        });
    });
}

// Form Submission
function initForm() {
    const form = document.getElementById('consultationForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Create success effect
        const btn = form.querySelector('.submit-btn');
        btn.innerHTML = '<i class="fas fa-check"></i> Request Sent';
        btn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
        
        // Show success message
        setTimeout(() => {
            alert('Thank you! Our design director will contact you within 24 hours.');
            form.reset();
            btn.innerHTML = '<i class="fas fa-paper-plane"></i> Request Consultation';
            btn.style.background = 'var(--gold-gradient)';
        }, 1000);
    });
}

// Create Floating Elements
function createFloatingElements() {
    const sections = document.querySelectorAll('.luxury-hero, .portfolio-section, .contact-section');
    sections.forEach(section => {
        for (let i = 0; i < 5; i++) {
            const element = document.createElement('div');
            element.className = 'floating-element';
            
            const size = Math.random() * 40 + 20;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            element.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${x}%;
                top: ${y}%;
                opacity: ${Math.random() * 0.1 + 0.05};
                animation-delay: ${Math.random() * 10}s;
            `;
            
            section.appendChild(element);
        }
    });
}

// Parallax Effect
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.luxury-hero');
        const bg = document.querySelector('.hero-bg');
        
        if (bg) {
            bg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        // Parallax for floating elements
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach(el => {
            const speed = parseFloat(el.style.width) * 0.01;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Book Consultation Button
function initConsultationButton() {
    const bookBtn = document.querySelector('.nav-actions .luxury-btn');
    if (bookBtn) {
        bookBtn.addEventListener('click', () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Virtual Tour Button
function initVirtualTourButton() {
    const tourBtn = document.querySelector('.room-info .luxury-btn');
    if (tourBtn) {
        tourBtn.addEventListener('click', () => {
            const tourEffect = document.createElement('div');
            tourEffect.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: radial-gradient(circle at center, rgba(212, 175, 55, 0.3) 0%, transparent 70%);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--luxury-cream);
                font-family: 'Playfair Display', serif;
                font-size: 3rem;
                font-weight: 700;
                text-align: center;
                opacity: 0;
                animation: tourEnter 2s ease-out;
            `;
            
            tourEffect.innerHTML = `
                <div style="text-align: center; padding: 50px;">
                    <div style="margin-bottom: 30px; font-size: 5rem;">🏰</div>
                    <div>INITIATING VIRTUAL TOUR</div>
                    <div style="font-size: 1.5rem; margin-top: 20px;">Loading 360° experience...</div>
                </div>
            `;
            
            // Add animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes tourEnter {
                    0% { opacity: 0; transform: scale(0.8); filter: blur(20px); }
                    20% { opacity: 1; transform: scale(1); filter: blur(0px); }
                    80% { opacity: 1; transform: scale(1); filter: blur(0px); }
                    100% { opacity: 0; transform: scale(1.2); filter: blur(20px); }
                }
            `;
            
            document.head.appendChild(style);
            document.body.appendChild(tourEffect);
            
            setTimeout(() => {
                tourEffect.remove();
                style.remove();
                alert('Virtual tour loaded! Explore the Azure Penthouse in 360° view.');
            }, 2000);
        });
    }
}

// Service Cards Interaction
function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card .luxury-btn');
    serviceCards.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.service-card');
            const title = card.querySelector('.service-title').textContent;
            
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                width: 100px;
                height: 100px;
                background: rgba(212, 175, 55, 0.2);
                border-radius: 50%;
                pointer-events: none;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0);
                animation: rippleExpand 0.6s ease-out;
            `;
            
            card.appendChild(ripple);
            
            // Add animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes rippleExpand {
                    0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
                    100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
            
            setTimeout(() => {
                ripple.remove();
                style.remove();
                alert(`Exploring ${title} services...\n\nRedirecting to detailed service page.`);
            }, 600);
        });
    });
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    initLuxuryCursor();
    initNavScroll();
    initPortfolio();
    initForm();
    createFloatingElements();
    initParallax();
    initConsultationButton();
    initVirtualTourButton();
    initServiceCards();
    
    // Animate counters when hero section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(document.querySelector('.luxury-hero'));
    
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    console.log('LUMINAIRE Luxury Interior Design initialized successfully!');
});

// Window Resize Handler
window.addEventListener('resize', () => {
    // Recreate floating elements on resize
    const existingElements = document.querySelectorAll('.floating-element');
    existingElements.forEach(el => el.remove());
    createFloatingElements();
});
