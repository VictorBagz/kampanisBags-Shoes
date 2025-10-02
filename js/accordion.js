document.addEventListener('DOMContentLoaded', () => {
    // Get all accordion buttons
    const accordionBtns = document.querySelectorAll('.footer__accordion-btn');

    // Add click event listener to each button
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Get current expanded state
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            
            // Toggle aria-expanded attribute
            btn.setAttribute('aria-expanded', !isExpanded);
        });
    });
});