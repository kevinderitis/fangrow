// Inicialización y funciones principales
document.addEventListener('DOMContentLoaded', () => {
    // Iniciar el router
    router.handleRoute();
    
    // Inicializar los event listeners
    initializeEventListeners();
});

function initializeEventListeners() {
    // Smooth scroll para links de navegación
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

    // Efectos hover para las tarjetas de plataforma
    document.querySelectorAll('.platform-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Animación para estadísticas
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('stat-number')) {
                    animateValue(entry.target);
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.platform-card, .benefit-card, .stat-number').forEach((el) => {
        observer.observe(el);
    });
}

function animateValue(obj) {
    const final = parseInt(obj.textContent);
    const start = 0;
    const duration = 2000;
    let startTimestamp = null;

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (final - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    
    window.requestAnimationFrame(step);
}