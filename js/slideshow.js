/*!
 * Kampanis Shoes and Bags Clinic - Slideshow JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    function initializeSlideshow(containerClass, prevButtonId, nextButtonId, interval = 5000) {
        const slideshow = document.querySelector(containerClass);
        const slides = slideshow.querySelector('.slideshow__slides');
        const slideElements = slideshow.querySelectorAll('.slideshow__slide');
        const dotsContainer = slideshow.querySelector('.slideshow__dots');
        const prevButton = document.getElementById(prevButtonId);
        const nextButton = document.getElementById(nextButtonId);
        
        let currentSlide = 0;
        const totalSlides = slideElements.length;

        // Create dot indicators
        slideElements.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('slideshow__dot');
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll('.slideshow__dot');
        updateDots();

        // Navigation functions
        function updateDots() {
            dots.forEach((dot, index) => {
                dot.classList.toggle('slideshow__dot--active', index === currentSlide);
            });
        }

        function goToSlide(index) {
            currentSlide = index;
            slides.style.transform = `translateX(-${currentSlide * 100}%)`;
            updateDots();
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            goToSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            goToSlide(currentSlide);
        }

        // Event listeners
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);

        // Auto-advance slides
        let slideInterval = setInterval(nextSlide, interval);

        // Pause auto-advance on hover
        slideshow.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        slideshow.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, interval);
        });

        // Return navigation functions for keyboard controls
        return { nextSlide, prevSlide };
    }

    // Initialize both slideshows
    const topPicksNav = initializeSlideshow('.top-picks .slideshow', 'prevSlide', 'nextSlide');
    const worksNav = initializeSlideshow('.works-slideshow', 'prevWorkSlide', 'nextWorkSlide', 6000);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Only control the slideshow that's currently in view
        const topPicksEl = document.querySelector('.top-picks');
        const worksEl = document.querySelector('.works');

        // Get element positions relative to viewport
        const topPicksRect = topPicksEl.getBoundingClientRect();
        const worksRect = worksEl.getBoundingClientRect();

        // Determine which slideshow is more in view
        if (Math.abs(topPicksRect.top) < Math.abs(worksRect.top)) {
            if (e.key === 'ArrowLeft') topPicksNav.prevSlide();
            if (e.key === 'ArrowRight') topPicksNav.nextSlide();
        } else {
            if (e.key === 'ArrowLeft') worksNav.prevSlide();
            if (e.key === 'ArrowRight') worksNav.nextSlide();
        }
    });
});