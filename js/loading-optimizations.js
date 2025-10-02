// Preload hero image
document.addEventListener('DOMContentLoaded', () => {
    // Create a loading placeholder for the hero section
    const heroSection = document.querySelector('.hero');
    const heroImageContainer = document.querySelector('.hero__image-container');
    
    // Add loading state
    heroSection.classList.add('loading');
    
    // Create and load the hero image
    const img = new Image();
    img.src = 'photos/shoes.jpg';
    
    img.onload = () => {
        // Remove loading state and show the image
        heroSection.classList.remove('loading');
        heroImageContainer.style.backgroundImage = `url(${img.src})`;
    };
    
    // Initialize lazy loading for other images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });
});

// Progressive image loading for slideshows
function initProgressiveLoading() {
    const slideshowSlides = document.querySelectorAll('.slideshow__slide img:not([loading="lazy"])');
    
    slideshowSlides.forEach(img => {
        // Create a low-quality placeholder
        const placeholder = document.createElement('div');
        placeholder.className = 'image-placeholder';
        img.parentNode.insertBefore(placeholder, img);
        
        // Load the actual image
        const actualImage = new Image();
        actualImage.src = img.src;
        actualImage.onload = () => {
            img.classList.add('loaded');
            placeholder.remove();
        };
    });
}

// Initialize progressive loading
initProgressiveLoading();