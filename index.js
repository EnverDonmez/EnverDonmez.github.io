document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.content');
    
    // Scroll efekti
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        content.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    });

    // Elementlere hover efekti
    const elements = document.querySelectorAll('li');
    elements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });

        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Navigasyon için yumuşak kaydırma
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll efekti için aktif bölümü belirleme
    const sections = document.querySelectorAll('.section-card');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // Intersection Observer oluşturma
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Parşömen görünür olduğunda
            if (entry.isIntersecting) {
                requestAnimationFrame(() => {
                    entry.target.classList.add('visible');
                    entry.target.classList.remove('scroll-up', 'scroll-down');
                });
            } else {
                // Parşömen görünmez olduğunda
                const scrollDirection = entry.boundingClientRect.y < 0 ? 'scroll-up' : 'scroll-down';
                requestAnimationFrame(() => {
                    entry.target.classList.remove('visible');
                    entry.target.classList.add(scrollDirection);
                });
            }
        });
    }, {
        threshold: 0.5,  // Parşömenin yarısı görünür olduğunda tetikle
        rootMargin: '-50px'
    });

    // Tüm parşömenleri gözlemle
    document.querySelectorAll('.parchment').forEach(parchment => {
        observer.observe(parchment);
    });
});