/*!
 * Kampanis Shoes and Bags Clinic - Main JavaScript
 * Consolidated JavaScript file containing all website functionality
 * Version: 2.0.0
 */

// =============================================================================
// 1. GOOGLE ANALYTICS & TRACKING SCRIPTS
// =============================================================================

// Google Tag Manager Configuration
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

gtag("set","linker",{"domains":["mrquickie.com"]});
gtag("js", new Date());
gtag("set", "developer_id.dZTNiMT", true);
gtag("config", "GT-5NPZM9M3");

// Site Kit Configuration
window._googlesitekit = window._googlesitekit || {}; 
window._googlesitekit.throttledEvents = []; 
window._googlesitekit.gtagEvent = (name, data) => { 
    var key = JSON.stringify({ name, data }); 
    if (!! window._googlesitekit.throttledEvents[ key ]) { 
        return; 
    } 
    window._googlesitekit.throttledEvents[ key ] = true; 
    setTimeout( () => { 
        delete window._googlesitekit.throttledEvents[ key ]; 
    }, 5 ); 
    gtag( "event", name, { ...data, event_source: "site-kit" } ); 
}

// reCAPTCHA Configuration
var wpcf7_recaptcha = {
    "sitekey": "6LcC5SkqAAAAAFx8TkW4Y65IJdWiSxnyrCWKy6ym",
    "actions": {
        "homepage": "homepage",
        "contactform": "contactform"
    }
};

// =============================================================================
// 2. WOOCOMMERCE CONFIGURATION
// =============================================================================

// WooCommerce parameters
var wc_add_to_cart_params = {
    "ajax_url": "/wp-admin/admin-ajax.php",
    "wc_ajax_url": "/?wc-ajax=%%endpoint%%",
    "i18n_view_cart": "View cart",
    "cart_url": "https://mrquickie.com/cart/",
    "is_cart": "",
    "cart_redirect_after_add": "no"
};

var wc_cart_fragments_params = {
    "ajax_url": "/wp-admin/admin-ajax.php",
    "wc_ajax_url": "/?wc-ajax=%%endpoint%%",
    "cart_hash_key": "wc_cart_hash_315676bb92f04a91bf3182b64e718ee1",
    "fragment_name": "wc_fragments_315676bb92f04a91bf3182b64e718ee1",
    "request_timeout": "5000"
};

var woocommerce_params = {
    "ajax_url": "/wp-admin/admin-ajax.php",
    "wc_ajax_url": "/?wc-ajax=%%endpoint%%"
};

// WooCommerce Order Attribution
var wc_order_attribution = {
    "params": {"lifetime": 1.0e-5, "session": 30, "base64": false, "ajaxurl": "https://mrquickie.com/wp-admin/admin-ajax.php", "prefix": "wc_order_attribution_", "allowTracking": true},
    "fields": {"source_type": "current.typ", "referrer": "current_add.rf", "utm_campaign": "current.cmp", "utm_source": "current.src", "utm_medium": "current.mdm", "utm_content": "current.cnt", "utm_id": "current.id", "utm_term": "current.trm", "utm_source_platform": "current.plt", "utm_creative_format": "current.fmt", "utm_marketing_tactic": "current.tct", "session_entry": "current_add.ep", "session_start_time": "current_add.fd", "session_pages": "session.pgs", "session_count": "udata.vst", "user_agent": "udata.uag"}
};

// =============================================================================
// 3. MUFFIN FRAMEWORK CONFIGURATION
// =============================================================================

var mfn = {
    "mobileInit": "1240",
    "parallax": "translate3d",
    "responsive": "1",
    "sidebarSticky": "",
    "lightbox": {"disable": false, "disableMobile": false, "title": false},
    "slider": {"blog": 3000, "clients": 3000, "offer": 3000, "portfolio": 3000, "shop": 3000, "slider": 3000, "testimonials": 3000},
    "livesearch": {"minChar": 3, "loadPosts": 10, "translation": {"pages": "Pages", "categories": "Categories", "portfolio": "Portfolio", "post": "Posts", "products": "Products"}},
    "accessibility": {"translation": {"headerContainer": "Header container", "toggleSubmenu": "Toggle submenu"}},
    "home_url": "",
    "home_url_lang": "https://mrquickie.com",
    "site_url": "https://mrquickie.com",
    "translation": {"success_message": "Link copied to the clipboard.", "error_message": "Something went wrong. Please try again later!"}
};

var mfnwoovars = {
    "ajaxurl": "https://mrquickie.com/wp-admin/admin-ajax.php",
    "wpnonce": "3634f05372",
    "rooturl": "",
    "productthumbsover": "mfn-thumbnails-outside",
    "productthumbs": "0px",
    "mainimgmargin": "mfn-mim-0",
    "myaccountpage": "https://mrquickie.com/my-account/",
    "groupedQuantityErrori18n": "Please choose the quantity of items you wish to add to your cart…"
};

// =============================================================================
// 4. WORDPRESS EMOJI SETTINGS & ADDITIONAL SCRIPTS
// =============================================================================

// WordPress Emoji Settings
window._wpemojiSettings = {
    "baseUrl": "https://s.w.org/images/core/emoji/16.0.1/72x72/",
    "ext": ".png",
    "svgUrl": "https://s.w.org/images/core/emoji/16.0.1/svg/",
    "svgExt": ".svg",
    "source": {"concatemoji": "https://mrquickie.com/wp-includes/js/wp-emoji-release.min.js?ver=6.8.2"}
};

// Popup message functionality
var popup_message = {
    "ajaxurl": "https://mrquickie.com/wp-admin/admin-ajax.php",
    "popup_text": "Thank you for your message. It has been sent."
};

// =============================================================================
// 5. VIDEO VISIBILITY FIX
// =============================================================================

// IMMEDIATE VIDEO VISIBILITY FIX
const forceVideoVisibility = () => {
    const videoElements = document.querySelectorAll('.modern-videos-section, .video-card, .video-wrapper, .video-wrapper iframe');
    videoElements.forEach(el => {
        el.style.setProperty('opacity', '1', 'important');
        el.style.setProperty('visibility', 'visible', 'important');
        el.style.setProperty('display', 'block', 'important');
        el.style.setProperty('transform', 'none', 'important');
    });
};

// Run immediately
forceVideoVisibility();
// Run after DOM loads
document.addEventListener('DOMContentLoaded', forceVideoVisibility);

// IMMEDIATE FOOTER VISIBILITY FIX
const forceFooterVisibility = () => {
    const footerElements = document.querySelectorAll('.new-footer-design, .footer-content, .footer-container, .footer-column, .footer-copyright');
    footerElements.forEach(el => {
        if (el) {
            el.style.setProperty('opacity', '1', 'important');
            el.style.setProperty('visibility', 'visible', 'important');
            el.style.setProperty('display', 'block', 'important');
            el.style.setProperty('transform', 'none', 'important');
            el.style.setProperty('position', 'relative', 'important');
            el.style.setProperty('z-index', '10', 'important');
        }
    });
    console.log('Footer visibility forced');
};

// Run immediately for footer
forceFooterVisibility();
// Run after DOM loads for footer
document.addEventListener('DOMContentLoaded', forceFooterVisibility);

// =============================================================================
// 6. SCROLL ANIMATION SYSTEM
// =============================================================================

class ScrollAnimations {
    constructor() {
        this.observer = null;
        this.animatedElements = new Set();
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        // Add js-enabled class to body to enable animations
        document.body.classList.add('js-enabled');
        
        this.createObserver();
        this.observeElements();
        this.addSmoothScrolling();
    }

    createObserver() {
        const options = {
            root: null,
            rootMargin: '0px 0px -100px 0px',
            threshold: [0.1, 0.25, 0.5]
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => this.handleIntersection(entry));
        }, options);
    }

    handleIntersection(entry) {
        const element = entry.target;
        const elementId = element.dataset.animateId || Math.random().toString(36);
        
        if (entry.isIntersecting && !this.animatedElements.has(elementId)) {
            this.animateElement(element);
            this.animatedElements.add(elementId);
        }
    }

    animateElement(element) {
        // Add visible class for CSS transitions
        element.classList.add('animate-visible');

        // Apply specific animation based on data attributes or element type
        const animationType = element.dataset.animation || this.getDefaultAnimation(element);
        const delay = element.dataset.delay || 0;

        setTimeout(() => {
            element.classList.add(animationType);
        }, delay);
    }

    getDefaultAnimation(element) {
        // Determine animation based on element type and position
        if (element.classList.contains('service-item')) {
            return 'scale-in';
        } else if (element.classList.contains('video-card')) {
            return 'scale-in';
        } else if (element.classList.contains('modern-videos-section')) {
            return 'slide-up';
        } else if (element.classList.contains('slide')) {
            return 'fade-in';
        } else if (element.classList.contains('product-card')) {
            return 'slide-up';
        } else if (element.classList.contains('footer-column')) {
            return 'slide-up';
        } else if (element.tagName === 'SECTION') {
            return 'slide-up';
        } else {
            return 'fade-in';
        }
    }

    observeElements() {
        // Select elements to animate
        const selectors = [
            '.mobile-services-section',
            '.service-item',
            '.our-works-section',
            '.top-picks-section',
            '.modern-videos-section',
            '.video-card',
            '.product-card',
            'section[class*="mcb-section"]',
            '.footer-column',
            '.slide',
            'h1, h2, h3, h4',
            '.button'
        ];

        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((element, index) => {
                // Add base animation class
                element.classList.add('animate-on-scroll');
                
                // Add stagger delay for grouped elements
                if (this.shouldStagger(element, selector)) {
                    const staggerClass = `stagger-${Math.min(index + 1, 6)}`;
                    element.classList.add(staggerClass);
                }

                // Set unique ID for tracking
                element.dataset.animateId = `${selector}-${index}`;
                
                // Start observing
                this.observer.observe(element);
            });
        });
    }

    shouldStagger(element, selector) {
        const staggerSelectors = [
            '.service-item',
            '.video-card',
            '.product-card',
            '.footer-column'
        ];
        return staggerSelectors.some(s => selector.includes(s));
    }

    addSmoothScrolling() {
        // Add smooth scrolling to anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const targetId = anchor.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);
                
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Public method to manually trigger animation
    triggerAnimation(element) {
        if (element && !this.animatedElements.has(element.dataset.animateId)) {
            this.animateElement(element);
        }
    }

    // Method to reset animations (useful for development)
    resetAnimations() {
        this.animatedElements.clear();
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            element.classList.remove('animate-visible', 'slide-up', 'fade-in', 'scale-in', 'slide-in-left', 'slide-in-right');
        });
    }
}

// =============================================================================
// 7. PARALLAX EFFECTS
// =============================================================================

class ParallaxEffects {
    constructor() {
        this.elements = [];
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        // Select elements for parallax effect
        this.elements = document.querySelectorAll('.parallax-section, .our-works-section');
        
        if (this.elements.length > 0) {
            this.bindEvents();
        }
    }

    bindEvents() {
        let ticking = false;

        const updateParallax = () => {
            this.elements.forEach(element => this.updateElement(element));
            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };

        // Throttled scroll listener
        window.addEventListener('scroll', requestTick, { passive: true });
    }

    updateElement(element) {
        const rect = element.getBoundingClientRect();
        const speed = element.dataset.parallaxSpeed || 0.5;
        const yPos = -(rect.top * speed);
        
        // Only apply transform if element is in viewport
        if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
    }
}

// =============================================================================
// 8. GALLERY CONTROLS
// =============================================================================

class Gallery {
    constructor(options) {
        this.trackSelector = options.trackSelector;
        this.dotsSelector = options.dotsSelector;
        this.leftButtonSelector = options.leftButtonSelector;
        this.rightButtonSelector = options.rightButtonSelector;
        this.autoScrollInterval = options.autoScrollInterval || 3000;
        this.track = document.querySelector(this.trackSelector);
        this.dots = document.querySelectorAll(`${this.dotsSelector} .gallery-dot`);
        this.items = document.querySelectorAll(`${this.trackSelector} .gallery-item`);
        this.leftButton = document.querySelector(this.leftButtonSelector);
        this.rightButton = document.querySelector(this.rightButtonSelector);
        
        if (!this.track || !this.items.length) {
            console.warn(`Gallery not found: ${this.trackSelector}`);
            return;
        }
        
        this.currentIndex = 0;
        this.itemCount = this.items.length;
        this.isTransitioning = false;
        this.autoScrollTimer = null;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.startAutoScroll();
        this.updateGallery();
        
        // Initialize AOS if available
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }
    
    setupEventListeners() {
        // Dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (!this.isTransitioning) {
                    this.goToSlide(index);
                }
            });
        });
        
        // Scroll button navigation
        if (this.leftButton) {
            this.leftButton.addEventListener('click', () => {
                if (!this.isTransitioning) {
                    this.prevSlide();
                }
            });
        }
        
        if (this.rightButton) {
            this.rightButton.addEventListener('click', () => {
                if (!this.isTransitioning) {
                    this.nextSlide();
                }
            });
        }
        
        // Pause auto-scroll on hover
        this.track.addEventListener('mouseenter', () => {
            this.pauseAutoScroll();
        });
        
        this.track.addEventListener('mouseleave', () => {
            this.startAutoScroll();
        });
        
        // Touch/swipe support
        this.setupTouchSupport();
        
        // Keyboard navigation
        this.setupKeyboardSupport();
    }
    
    setupTouchSupport() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;
        
        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });
        
        this.track.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            
            const diffX = startX - endX;
            const diffY = startY - endY;
            
            // Check if it's a horizontal swipe (more horizontal than vertical)
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    // Swipe left - next slide
                    this.nextSlide();
                } else {
                    // Swipe right - previous slide
                    this.prevSlide();
                }
            }
        }, { passive: true });
    }
    
    setupKeyboardSupport() {
        document.addEventListener('keydown', (e) => {
            if (document.activeElement === this.track || this.track.contains(document.activeElement)) {
                switch (e.key) {
                    case 'ArrowLeft':
                        e.preventDefault();
                        this.prevSlide();
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        this.nextSlide();
                        break;
                    case 'Home':
                        e.preventDefault();
                        this.goToSlide(0);
                        break;
                    case 'End':
                        e.preventDefault();
                        this.goToSlide(this.itemCount - 1);
                        break;
                }
            }
        });
    }
    
    updateGallery() {
        if (!this.track || !this.items.length) return;
        
        const itemWidth = this.getItemWidth();
        const translateX = -this.currentIndex * itemWidth;
        
        this.track.style.transform = `translateX(${translateX}px)`;
        
        // Update dots
        this.updateDots();
        
        // Update button states
        this.updateButtonStates();
        
        // Add transitioning class for smooth animation
        this.track.classList.add('transitioning');
        this.isTransitioning = true;
        
        // Remove transitioning class after animation
        setTimeout(() => {
            this.track.classList.remove('transitioning');
            this.isTransitioning = false;
        }, 500);
    }
    
    getItemWidth() {
        if (!this.items[0]) return 0;
        
        // Get the computed width of the first item including margins and padding
        const itemStyle = window.getComputedStyle(this.items[0]);
        const itemWidth = this.items[0].offsetWidth;
        const marginLeft = parseFloat(itemStyle.marginLeft) || 0;
        const marginRight = parseFloat(itemStyle.marginRight) || 0;
        
        return itemWidth + marginLeft + marginRight;
    }
    
    updateDots() {
        this.dots.forEach((dot, index) => {
            if (index === this.currentIndex) {
                dot.classList.add('active');
                dot.setAttribute('aria-selected', 'true');
            } else {
                dot.classList.remove('active');
                dot.setAttribute('aria-selected', 'false');
            }
        });
    }
    
    updateButtonStates() {
        // Update button states based on current position
        if (this.leftButton) {
            if (this.currentIndex === 0) {
                this.leftButton.setAttribute('aria-disabled', 'true');
                this.leftButton.style.opacity = '0.5';
            } else {
                this.leftButton.setAttribute('aria-disabled', 'false');
                this.leftButton.style.opacity = '';
            }
        }
        
        if (this.rightButton) {
            if (this.currentIndex === this.itemCount - 1) {
                this.rightButton.setAttribute('aria-disabled', 'true');
                this.rightButton.style.opacity = '0.5';
            } else {
                this.rightButton.setAttribute('aria-disabled', 'false');
                this.rightButton.style.opacity = '';
            }
        }
    }
    
    goToSlide(index) {
        if (index < 0 || index >= this.itemCount || index === this.currentIndex) {
            return;
        }
        
        this.currentIndex = index;
        this.updateGallery();
        this.restartAutoScroll();
    }
    
    nextSlide() {
        const nextIndex = (this.currentIndex + 1) % this.itemCount;
        this.goToSlide(nextIndex);
    }
    
    prevSlide() {
        const prevIndex = (this.currentIndex - 1 + this.itemCount) % this.itemCount;
        this.goToSlide(prevIndex);
    }
    
    startAutoScroll() {
        this.pauseAutoScroll();
        this.autoScrollTimer = setInterval(() => {
            this.nextSlide();
        }, this.autoScrollInterval);
    }
    
    pauseAutoScroll() {
        if (this.autoScrollTimer) {
            clearInterval(this.autoScrollTimer);
            this.autoScrollTimer = null;
        }
    }
    
    restartAutoScroll() {
        this.pauseAutoScroll();
        this.startAutoScroll();
    }
    
    destroy() {
        this.pauseAutoScroll();
        // Remove event listeners if needed
    }
}

// =============================================================================
// 9. PREMIUM NAVIGATION CLASS
// =============================================================================

class PremiumNavigation {
    constructor() {
        this.nav = document.querySelector('.premium-navigation');
        this.mobileToggle = document.querySelector('.mobile-toggle');
        this.mobileOverlay = document.querySelector('.mobile-nav-overlay');
        this.mobileClose = document.querySelector('.mobile-close');
        this.mobileLinks = document.querySelectorAll('.mobile-nav-link');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.searchBtn = document.querySelector('.search-btn');
        
        this.isMenuOpen = false;
        this.lastScrollY = 0;
        this.scrollThreshold = 50;

        this.init();
    }

    init() {
        if (!this.nav) return;

        this.setupScrollEffects();
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupSearchFunctionality();
        this.setupKeyboardNavigation();
        this.setupActiveLink();
        
        console.log('Premium Navigation initialized');
    }

    setupScrollEffects() {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    
                    // Add scrolled class for glass morphism effect
                    if (currentScrollY > this.scrollThreshold) {
                        this.nav.classList.add('scrolled');
                    } else {
                        this.nav.classList.remove('scrolled');
                    }

                    // Hide/show navigation on scroll direction
                    if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
                        // Scrolling down
                        this.nav.style.transform = 'translateY(-100%)';
                    } else {
                        // Scrolling up
                        this.nav.style.transform = 'translateY(0)';
                    }

                    this.lastScrollY = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Initial check
        handleScroll();
    }

    setupMobileMenu() {
        if (!this.mobileToggle || !this.mobileOverlay) return;

        // Toggle mobile menu
        this.mobileToggle.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleMobileMenu();
        });

        // Close mobile menu
        this.mobileClose?.addEventListener('click', (e) => {
            e.preventDefault();
            this.closeMobileMenu();
        });

        // Close on overlay click
        this.mobileOverlay.addEventListener('click', (e) => {
            if (e.target === this.mobileOverlay) {
                this.closeMobileMenu();
            }
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen) {
                this.closeMobileMenu();
            }
        });

        // Close on mobile link click
        this.mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });
    }

    toggleMobileMenu() {
        if (this.isMenuOpen) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }

    openMobileMenu() {
        this.isMenuOpen = true;
        this.mobileToggle.classList.add('active');
        this.mobileOverlay.classList.add('active');
        
        // Add class to prevent body scroll
        document.body.classList.add('mobile-menu-open');
        
        // Focus management
        this.mobileClose?.focus();
        
        console.log('Mobile menu opened');
    }

    closeMobileMenu() {
        this.isMenuOpen = false;
        this.mobileToggle.classList.remove('active');
        this.mobileOverlay.classList.remove('active');
        
        // Add small delay before restoring body scroll to allow animation to complete
        setTimeout(() => {
            document.body.classList.remove('mobile-menu-open');
        }, 100);
        
        // Return focus to toggle button
        this.mobileToggle?.focus();
        
        console.log('Mobile menu closed');
    }

    setupSmoothScrolling() {
        // Smooth scroll for navigation links
        [...this.navLinks, ...this.mobileLinks].forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const target = document.getElementById(targetId) || 
                                 document.querySelector(`[data-section="${targetId}"]`) ||
                                 document.querySelector(`.${targetId}-section`);
                    
                    if (target) {
                        const offsetTop = target.offsetTop - (this.nav.offsetHeight + 20);
                        
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });

                        // Update active link
                        this.updateActiveLink(link);
                    }
                }
            });
        });
    }

    setupSearchFunctionality() {
        if (!this.searchBtn) return;

        this.searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.handleSearch();
        });
    }

    handleSearch() {
        // Enhanced search functionality
        const searchTerm = prompt('What would you like to search for?');
        
        if (searchTerm && searchTerm.trim()) {
            console.log('Searching for:', searchTerm);
            
            // Example: scroll to relevant section based on search term
            const searchLower = searchTerm.toLowerCase();
            let targetSection = null;
            
            if (searchLower.includes('service') || searchLower.includes('repair')) {
                targetSection = document.querySelector('.mobile-services-section') || 
                              document.querySelector('[data-section="services"]');
            } else if (searchLower.includes('work') || searchLower.includes('gallery')) {
                targetSection = document.querySelector('.our-works-section') || 
                              document.querySelector('[data-section="works"]');
            } else if (searchLower.includes('video')) {
                targetSection = document.querySelector('.modern-videos-section') || 
                              document.querySelector('[data-section="videos"]');
            } else if (searchLower.includes('contact')) {
                targetSection = document.querySelector('footer') || 
                              document.querySelector('[data-section="contact"]');
            }
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - (this.nav.offsetHeight + 20);
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    }

    setupKeyboardNavigation() {
        // Enhanced keyboard navigation
        [...this.navLinks, ...this.mobileLinks].forEach((link, index, links) => {
            link.addEventListener('keydown', (e) => {
                switch (e.key) {
                    case 'ArrowRight':
                    case 'ArrowDown':
                        e.preventDefault();
                        const nextIndex = (index + 1) % links.length;
                        links[nextIndex].focus();
                        break;
                        
                    case 'ArrowLeft':
                    case 'ArrowUp':
                        e.preventDefault();
                        const prevIndex = (index - 1 + links.length) % links.length;
                        links[prevIndex].focus();
                        break;
                        
                    case 'Home':
                        e.preventDefault();
                        links[0].focus();
                        break;
                        
                    case 'End':
                        e.preventDefault();
                        links[links.length - 1].focus();
                        break;
                }
            });
        });
    }

    setupActiveLink() {
        // Intersection Observer for active link highlighting
        const sections = document.querySelectorAll('section[class*="section"], main section');
        
        if (sections.length === 0) return;

        const observerOptions = {
            root: null,
            rootMargin: `-${this.nav.offsetHeight + 50}px 0px -50% 0px`,
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = this.getSectionId(entry.target);
                    if (sectionId) {
                        this.updateActiveLink(null, sectionId);
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }

    getSectionId(section) {
        // Get section identifier from various sources
        if (section.id) return section.id;
        
        const classList = Array.from(section.classList);
        
        // Check for common section class patterns
        for (const className of classList) {
            if (className.includes('hero')) return 'home';
            if (className.includes('service')) return 'services';
            if (className.includes('work')) return 'works';
            if (className.includes('video')) return 'videos';
            if (className.includes('contact') || className.includes('footer')) return 'contact';
        }
        
        return null;
    }

    updateActiveLink(clickedLink, sectionId) {
        // Remove active class from all links
        [...this.navLinks, ...this.mobileLinks].forEach(link => {
            link.classList.remove('active');
        });

        if (clickedLink) {
            // Add active class to clicked link
            clickedLink.classList.add('active');
        } else if (sectionId) {
            // Add active class to links matching section
            [...this.navLinks, ...this.mobileLinks].forEach(link => {
                const href = link.getAttribute('href');
                if (href === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    }

    // Public methods for external control
    hideNavigation() {
        this.nav.style.transform = 'translateY(-100%)';
    }

    showNavigation() {
        this.nav.style.transform = 'translateY(0)';
    }

    lockNavigation() {
        this.nav.style.position = 'absolute';
    }

    unlockNavigation() {
        this.nav.style.position = 'fixed';
    }
}

// =============================================================================
// 10. REVOLUTION SLIDER FUNCTIONS
// =============================================================================

function setREVStartSize(e) {
    window.RSIW = window.RSIW === undefined ? window.innerWidth : window.RSIW;
    window.RSIH = window.RSIH === undefined ? window.innerHeight : window.RSIH;
    try {
        var pw = document.getElementById(e.c).parentNode.offsetWidth,
            newh;
        pw = pw === 0 || isNaN(pw) || (e.l == "fullwidth" || e.layout == "fullwidth") ? window.RSIW : pw;
        e.tabw = e.tabw === undefined ? 0 : parseInt(e.tabw);
        e.thumbw = e.thumbw === undefined ? 0 : parseInt(e.thumbw);
        e.tabh = e.tabh === undefined ? 0 : parseInt(e.tabh);
        e.thumbh = e.thumbh === undefined ? 0 : parseInt(e.thumbh);
        e.tabhide = e.tabhide === undefined ? 0 : parseInt(e.tabhide);
        e.thumbhide = e.thumbhide === undefined ? 0 : parseInt(e.thumbhide);
        e.mh = e.mh === undefined || e.mh == "" || e.mh === "auto" ? 0 : parseInt(e.mh, 0);
        if (e.layout === "fullscreen" || e.l === "fullscreen")
            newh = Math.max(e.mh, window.RSIH);
        else {
            e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
            for (var i in e.rl) if (e.gw[i] === undefined || e.gw[i] === 0) e.gw[i] = e.gw[i - 1];
            e.gh = e.el === undefined || e.el === "" || (Array.isArray(e.el) && e.el.length == 0) ? e.gh : e.el;
            e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
            for (var i in e.rl) if (e.gh[i] === undefined || e.gh[i] === 0) e.gh[i] = e.gh[i - 1];

            var nl = new Array(e.rl.length),
                ix = 0,
                sl;
            e.tabw = e.tabhide >= pw ? 0 : e.tabw;
            e.thumbw = e.thumbhide >= pw ? 0 : e.thumbw;
            e.tabh = e.tabhide >= pw ? 0 : e.tabh;
            e.thumbh = e.thumbhide >= pw ? 0 : e.thumbh;
            for (var i in e.rl) nl[i] = e.rl[i] < window.RSIW ? 0 : e.rl[i];
            sl = nl[0];
            for (var i in nl) if (sl > nl[i] && nl[i] > 0) { sl = nl[i]; ix = i; }
            var m = pw > (e.gw[ix] + e.tabw + e.thumbw) ? 1 : (pw - (e.tabw + e.thumbw)) / (e.gw[ix]);
            newh = (e.gh[ix] * m) + (e.tabh + e.thumbh);
        }
        var el = document.getElementById(e.c);
        if (el !== null && el) el.style.height = newh + "px";
        el = document.getElementById(e.c + "_wrapper");
        if (el !== null && el) {
            el.style.height = newh + "px";
            el.style.display = "block";
        }
    } catch (e) {
        console.log("Failure at Presize of Slider:" + e)
    }
}

// Revolution Slider Error Handler
if (typeof revslider_showDoubleJqueryError === "undefined") {
    function revslider_showDoubleJqueryError(sliderID) {
        console.log("You have some jquery.js library include that comes after the Slider Revolution files js inclusion.");
        console.log("To fix this, you can:");
        console.log("1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on");
        console.log("2. Find the double jQuery.js inclusion and remove it");
        return "Double Included jQuery Library";
    }
}

// =============================================================================
// 11. UTILITY FUNCTIONS
// =============================================================================

// Performance optimization: Reduce animations on slower devices
const optimizeForPerformance = () => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;

    if (isSlowConnection || isLowEndDevice) {
        document.documentElement.style.setProperty('--animation-duration', '0.3s');
        document.documentElement.style.setProperty('--stagger-delay', '0.05s');
    }
};

// Accordion functionality
function initAccordions() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}

// Speculation Rules for prefetching
if (document.createElement) {
    var speculationScript = document.createElement('script');
    speculationScript.type = 'speculationrules';
    speculationScript.textContent = JSON.stringify({
        "prefetch": [{
            "source": "document",
            "where": {
                "and": [
                    {"href_matches": "/*"},
                    {"not": {"href_matches": ["/wp-*.php", "/wp-admin/*", "/wp-content/uploads/*", "/wp-content/*", "/wp-content/plugins/*", "/wp-content/themes/betheme-child/*", "/wp-content/themes/betheme/*", "/*\\?(.+)"]}},
                    {"not": {"selector_matches": "a[rel~=\"nofollow\"]"}},
                    {"not": {"selector_matches": ".no-prefetch, .no-prefetch a"}}
                ]
            },
            "eagerness": "conservative"
        }]
    });
    document.head.appendChild(speculationScript);
}

// Image optimization for sizes="auto"
if (CSS && CSS.supports && CSS.supports('contain-intrinsic-size', '1px')) {
    var autoImages = document.querySelectorAll('img[sizes*="auto"]');
    autoImages.forEach(function(img) {
        img.style.containIntrinsicSize = '3000px 1500px';
    });
}

// =============================================================================
// 12. MAIN INITIALIZATION - DOCUMENT READY
// =============================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Kampanis Main JavaScript loading...');
    
    try {
        // Add js-enabled class immediately
        document.body.classList.add('js-enabled');
        
        // Initialize Accordion functionality
        initAccordions();
        
        // Initialize AOS if available
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                offset: 100
            });
        }
        
        // Check for user preference for reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (!prefersReducedMotion) {
            optimizeForPerformance();
            
            // Initialize scroll animations
            window.scrollAnimations = new ScrollAnimations();
            
            // Initialize parallax effects (only on larger screens)
            if (window.innerWidth > 768) {
                window.parallaxEffects = new ParallaxEffects();
            }
            
            console.log('Scroll animations initialized');
        } else {
            console.log('Reduced motion preference detected, animations disabled');
        }
        
        // Initialize galleries
        const worksGallery = new Gallery({
            trackSelector: '#worksGalleryTrack',
            dotsSelector: '#worksGalleryNav',
            leftButtonSelector: '#worksScrollLeft',
            rightButtonSelector: '#worksScrollRight',
            autoScrollInterval: 3000
        });
        
        const productsGallery = new Gallery({
            trackSelector: '#productsGalleryTrack',
            dotsSelector: '#productsGalleryNav',
            leftButtonSelector: '#productsScrollLeft',
            rightButtonSelector: '#productsScrollRight',
            autoScrollInterval: 3000
        });
        
        // Add body padding for fixed navigation
        const nav = document.querySelector('.premium-navigation');
        if (nav) {
            document.body.style.paddingTop = nav.offsetHeight + 'px';
        }

        // Initialize navigation
        window.premiumNavigation = new PremiumNavigation();
        
        // Manual Scroll Controls for legacy sections
        const ourWorksContainer = document.querySelector('.slideshow-container');
        const ourWorksTrack = document.querySelector('.slideshow-track');
        const ourWorksLeftBtn = ourWorksContainer?.querySelector('.scroll-btn-left');
        const ourWorksRightBtn = ourWorksContainer?.querySelector('.scroll-btn-right');
        
        const topPicksContainer = document.querySelector('.lazy-scroll-container');
        const topPicksTrack = document.querySelector('.lazy-scroll-track');
        const topPicksLeftBtn = topPicksContainer?.querySelector('.products-scroll-left');
        const topPicksRightBtn = topPicksContainer?.querySelector('.products-scroll-right');
        
        let ourWorksCurrentPosition = 0;
        let topPicksCurrentPosition = 0;
        
        const ourWorksScrollAmount = 400;
        const topPicksScrollAmount = 360;
        
        // Our Works Scroll Functions
        if (ourWorksLeftBtn && ourWorksRightBtn && ourWorksTrack) {
            ourWorksLeftBtn.addEventListener('click', function() {
                ourWorksCurrentPosition += ourWorksScrollAmount;
                if (ourWorksCurrentPosition > 0) {
                    ourWorksCurrentPosition = 0;
                }
                ourWorksTrack.style.transform = `translateX(${ourWorksCurrentPosition}px)`;
                ourWorksTrack.style.animation = 'none';
            });
            
            ourWorksRightBtn.addEventListener('click', function() {
                const maxScroll = -(ourWorksScrollAmount * 4);
                ourWorksCurrentPosition -= ourWorksScrollAmount;
                if (ourWorksCurrentPosition < maxScroll) {
                    ourWorksCurrentPosition = maxScroll;
                }
                ourWorksTrack.style.transform = `translateX(${ourWorksCurrentPosition}px)`;
                ourWorksTrack.style.animation = 'none';
            });
            
            ourWorksTrack.style.transition = 'transform 0.5s ease-in-out';
        }
        
        // Top Picks Scroll Functions
        if (topPicksLeftBtn && topPicksRightBtn && topPicksTrack) {
            topPicksLeftBtn.addEventListener('click', function() {
                topPicksCurrentPosition += topPicksScrollAmount;
                if (topPicksCurrentPosition > 0) {
                    topPicksCurrentPosition = 0;
                }
                topPicksTrack.style.transform = `translateX(${topPicksCurrentPosition}px)`;
                topPicksTrack.style.animation = 'none';
            });
            
            topPicksRightBtn.addEventListener('click', function() {
                const maxScroll = -(topPicksScrollAmount * 5);
                topPicksCurrentPosition -= topPicksScrollAmount;
                if (topPicksCurrentPosition < maxScroll) {
                    topPicksCurrentPosition = topPicksScrollAmount;
                }
                topPicksTrack.style.transform = `translateX(${topPicksCurrentPosition}px)`;
                topPicksTrack.style.animation = 'none';
            });
            
            topPicksTrack.style.transition = 'transform 0.5s ease-in-out';
        }
        
        // Add resize listener to adjust body padding
        window.addEventListener('resize', () => {
            if (nav) {
                document.body.style.paddingTop = nav.offsetHeight + 'px';
            }
        });
        
        // Force footer and videos visibility as fallback
        setTimeout(() => {
            const footer = document.querySelector('.new-footer-design');
            if (footer) {
                footer.style.setProperty('opacity', '1', 'important');
                footer.style.setProperty('transform', 'none', 'important');
                footer.style.setProperty('display', 'block', 'important');
                footer.style.setProperty('visibility', 'visible', 'important');
                footer.style.setProperty('position', 'relative', 'important');
                footer.classList.remove('animate-on-scroll'); // Remove animation class that might hide it
                console.log('Footer visibility forced in timeout');
            }
            
            // Force all footer elements visible
            const allFooterElements = document.querySelectorAll('.footer-content, .footer-container, .footer-column, .footer-copyright');
            allFooterElements.forEach((el, index) => {
                if (el) {
                    el.style.setProperty('opacity', '1', 'important');
                    el.style.setProperty('transform', 'none', 'important');
                    el.style.setProperty('display', 'block', 'important');
                    el.style.setProperty('visibility', 'visible', 'important');
                    el.classList.remove('animate-on-scroll'); // Remove animation class that might hide it
                    console.log(`Footer element ${index + 1} visibility forced`);
                }
            });
            
            // Force videos section visibility
            const videosSection = document.querySelector('.modern-videos-section');
            if (videosSection) {
                videosSection.style.opacity = '1';
                videosSection.style.transform = 'none';
                videosSection.style.display = 'block';
                videosSection.style.visibility = 'visible';
                console.log('Videos section visibility forced');
            }
            
            // Force all video cards visibility
            const videoCards = document.querySelectorAll('.video-card');
            videoCards.forEach((card, index) => {
                card.style.opacity = '1';
                card.style.transform = 'none';
                card.style.display = 'block';
                card.style.visibility = 'visible';
                console.log(`Video card ${index + 1} visibility forced`);
            });
        }, 100);
        
        console.log('Kampanis Main JavaScript initialized successfully');
        
    } catch (error) {
        console.error('Error initializing main scripts:', error);
        
        // Fallback: make sure all animated elements are visible
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }
});

// =============================================================================
// 13. JQUERY INITIALIZATION (for legacy compatibility)
// =============================================================================

// Initialize when jQuery is ready (for legacy functionality)
if (typeof jQuery !== 'undefined') {
    jQuery(document).ready(function($) {
        console.log('jQuery legacy functionality initializing...');
        
        // Remove no-js class and add js class for WooCommerce
        (function () {
            var c = document.body.className;
            c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
            document.body.className = c;
        })();
        
        // WooCommerce functionality
        $('.add_to_cart_button').on('click', function(e) {
            console.log('Add to cart clicked');
        });
        
        $('.qty').on('change', function() {
            console.log('Quantity changed');
        });
        
        // Contact form submission handler
        $('.wpcf7-form').on('submit', function(e) {
            if (typeof swal === 'function') {
                swal({
                    title: "Success!",
                    text: popup_message.popup_text,
                    icon: "success",
                    button: "OK"
                });
            } else {
                alert(popup_message.popup_text);
            }
        });
        
        // Modern mobile menu toggle
        $('.mobile-toggle').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $('.mobile-nav-overlay').toggleClass('active');
            $('body').toggleClass('menu-open');
        });
        
        // Close mobile menu
        $('.mobile-close, .mobile-nav-link').on('click', function(e) {
            if ($(this).hasClass('mobile-close')) {
                e.preventDefault();
            }
            $('.mobile-toggle').removeClass('active');
            $('.mobile-nav-overlay').removeClass('active');
            $('body').removeClass('menu-open');
        });
        
        // Legacy mobile menu toggle
        $('.mfn-header-menu-toggle').on('click', function(e) {
            e.preventDefault();
            $('.mfn-header-tmpl-menu-sidebar').toggleClass('active');
        });
        
        // Legacy close mobile menu
        $('.mfn-close-icon').on('click', function(e) {
            e.preventDefault();
            $('.mfn-header-tmpl-menu-sidebar').removeClass('active');
        });
        
        // Search toggle
        $('.search-btn, .mfn-search-button').on('click', function(e) {
            e.preventDefault();
            var searchTerm = prompt('What would you like to search for?');
            if (searchTerm) {
                console.log('Searching for: ' + searchTerm);
                var searchLower = searchTerm.toLowerCase();
                var targetSection = null;
                
                if (searchLower.includes('service') || searchLower.includes('repair')) {
                    targetSection = $('.mobile-services-section');
                } else if (searchLower.includes('work') || searchLower.includes('gallery')) {
                    targetSection = $('.our-works-section');
                } else if (searchLower.includes('video')) {
                    targetSection = $('.modern-videos-section');
                } else if (searchLower.includes('contact')) {
                    targetSection = $('footer');
                }
                
                if (targetSection && targetSection.length) {
                    $('html, body').animate({
                        scrollTop: targetSection.offset().top - 100
                    }, 800);
                }
            }
        });
        
        // Close search
        $('.icon_close').on('click', function(e) {
            e.preventDefault();
            $('.search_wrapper').removeClass('active');
        });
        
        // Cart toggle
        $('.toggle-mfn-cart').on('click', function(e) {
            e.preventDefault();
            $('.mfn-cart-holder').toggleClass('active');
            $('.mfn-cart-overlay').toggleClass('active');
        });
        
        // Login modal toggle
        $('.toggle-login-modal').on('click', function(e) {
            e.preventDefault();
            $('.mfn-header-login').toggleClass('active');
        });
        
        // Smooth scrolling for navigation links
        $('.nav-link, .mobile-nav-link').on('click', function(e) {
            var href = $(this).attr('href');
            
            if (href && href.indexOf('#') === 0) {
                e.preventDefault();
                var target = $(href);
                if (!target.length) {
                    target = $('[data-section="' + href.substring(1) + '"]');
                }
                if (!target.length) {
                    target = $('.' + href.substring(1) + '-section');
                }
                
                if (target.length) {
                    var offset = $('.premium-navigation').height() || 80;
                    $('html, body').animate({
                        scrollTop: target.offset().top - offset
                    }, 800);
                    
                    // Close mobile menu if open
                    $('.mobile-toggle').removeClass('active');
                    $('.mobile-nav-overlay').removeClass('active');
                    $('body').removeClass('menu-open');
                }
            }
        });
        
        // Initialize sliders
        if ($('.content_slider').length) {
            $('.content_slider').each(function() {
                console.log('Content slider initialized');
            });
        }
        
        if ($('.shop_slider').length) {
            $('.shop_slider').each(function() {
                console.log('Shop slider initialized');
            });
        }
        
        // Scroll effects for navigation
        var lastScrollTop = 0;
        var nav = $('.premium-navigation');
        
        if (nav.length) {
            $(window).scroll(function() {
                var scrollTop = $(this).scrollTop();
                
                // Add scrolled class
                if (scrollTop > 50) {
                    nav.addClass('scrolled');
                } else {
                    nav.removeClass('scrolled');
                }
                
                lastScrollTop = scrollTop;
            });
            
            // Apply body padding only on desktop to avoid mobile gap
            var setBodyPadding = function() {
                var width = $(window).width();
                if (width >= 1025) {
                    $('body').css('padding-top', nav.outerHeight());
                } else {
                    $('body').css('padding-top', 0);
                }
            };
            setBodyPadding();
            
            // Adjust on resize
            $(window).resize(setBodyPadding);
        }
        
        // Force visibility of critical sections
        setTimeout(function() {
            $('.new-footer-design, .modern-videos-section, .video-card').css({
                'opacity': '1',
                'transform': 'none',
                'display': 'block',
                'visibility': 'visible'
            });
        }, 100);
        
        console.log('jQuery legacy functionality loaded');
    });
}

// =============================================================================
// 14. REVOLUTION SLIDER MODULES INITIALIZATION
// =============================================================================

// Revolution Slider Modules
window.RS_MODULES = window.RS_MODULES || {};
window.RS_MODULES.modules = window.RS_MODULES.modules || {};
window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
window.RS_MODULES.defered = true;
window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
window.RS_MODULES.type = 'compiled';

var tpj = jQuery;
var revapi8;

if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};

RS_MODULES.modules["revslider81"] = {
    once: RS_MODULES.modules["revslider81"] !== undefined ? RS_MODULES.modules["revslider81"].once : undefined,
    init: function() {
        window.revapi8 = window.revapi8 === undefined || window.revapi8 === null || window.revapi8.length === 0 ? document.getElementById("rev_slider_8_1") : window.revapi8;
        if (window.revapi8 === null || window.revapi8 === undefined || window.revapi8.length == 0) {
            window.revapi8initTry = window.revapi8initTry === undefined ? 0 : window.revapi8initTry + 1;
            if (window.revapi8initTry < 20) requestAnimationFrame(function() { RS_MODULES.modules["revslider81"].init() });
            return;
        }
        window.revapi8 = jQuery(window.revapi8);
        if (window.revapi8.revolution == undefined) {
            revslider_showDoubleJqueryError("rev_slider_8_1");
            return;
        }
        
        // Initialize Revolution Slider
        if (typeof revapi8.revolutionInit === 'function') {
            revapi8.revolutionInit({
                revapi: "revapi8",
                DPR: "dpr",
                duration: "4000ms",
                visibilityLevels: "1240,1024,778,480",
                gridwidth: 1920,
                gridheight: 600,
                lazyType: "smart",
                perspective: 600,
                perspectiveType: "global",
                editorheight: "600,768,311,720",
                responsiveLevels: "1240,1024,778,480",
                progressBar: {disableProgressBar: true},
                navigation: {
                    onHoverStop: false
                },
                viewPort: {
                    global: true,
                    globalDist: "-200px",
                    enable: false
                },
                fallbacks: {
                    allowHTML5AutoPlayOnAndroid: true
                }
            });
        }
    }
};

if (window.RS_MODULES.checkMinimal !== undefined) {
    window.RS_MODULES.checkMinimal();
}

// =============================================================================
// 15. EXPORT FOR MODULE SYSTEMS
// =============================================================================

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        ScrollAnimations, 
        ParallaxEffects, 
        Gallery, 
        PremiumNavigation 
    };
} else if (typeof window !== 'undefined') {
    window.Gallery = Gallery;
    window.ScrollAnimations = ScrollAnimations;
    window.ParallaxEffects = ParallaxEffects;
    window.PremiumNavigation = PremiumNavigation;
}

console.log('Kampanis Main JavaScript fully loaded and initialized');
