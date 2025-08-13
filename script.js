// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initFunFacts();
    initSocialLinks();
    initProgressAnimation();
    initAccessibility();
    
    console.log('🚀 iamshihab.dev - Coming Soon page loaded!');
});



// Fun facts interaction
function initFunFacts() {
    const funFacts = document.querySelectorAll('.fun-fact');
    
    funFacts.forEach((fact, index) => {
        // Add staggered animation delay
        fact.style.animationDelay = `${0.8 + (index * 0.1)}s`;
        
        // Add click interaction
        fact.addEventListener('click', function() {
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
        
        // Add hover sound effect (visual only)
        fact.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.3s ease-in-out';
        });
        
        fact.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
}

// Social links enhancement
function initSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add click feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Track outbound links (if analytics is added later)
            trackOutboundLink(this.href);
        });
        
        // Add keyboard navigation
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Progress animation enhancement
function initProgressAnimation() {
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    if (progressFill && progressText) {
        const messages = [
            'Loading awesome content...',
            'Compiling dad jokes...',
            'Brewing coffee...',
            'Debugging life...',
            'Almost there...',
            'Just a few more bugs to fix...',
            'Convincing my code to work...',
            'Bribing the internet gods...',
            'Teaching Python to behave...',
            'Negotiating with Java...',
            'Drawing architecture diagrams...',
            'Explaining microservices to stakeholders...',
            'Blaming the previous developer (me)...',
            'Googling "why is my code not working"...'
        ];
        
        let messageIndex = 0;
        
        // Change progress message every 3 seconds
        setInterval(() => {
            progressText.textContent = messages[messageIndex];
            messageIndex = (messageIndex + 1) % messages.length;
        }, 3000);
    }
}

// Accessibility enhancements
function initAccessibility() {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #6366f1;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content ID
    const main = document.querySelector('main');
    if (main) {
        main.id = 'main';
    }
    
    // Add ARIA labels
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        const text = link.querySelector('.social-text').textContent;
        link.setAttribute('aria-label', `Visit ${text} profile`);
    });
}

// Utility function for tracking outbound links
function trackOutboundLink(url) {
    // This can be enhanced with actual analytics later
    console.log('🔗 Outbound link clicked:', url);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
    
    .skip-link:focus {
        top: 6px !important;
    }
`;
document.head.appendChild(style);

// Performance monitoring
window.addEventListener('load', function() {
    // Log performance metrics
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('⚡ Page load time:', Math.round(perfData.loadEventEnd - perfData.loadEventStart), 'ms');
    }
    
    // Add loading complete class
    document.body.classList.add('loaded');
});

// Service Worker registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('🔧 Service Worker registered:', registration.scope);
            })
            .catch(function(error) {
                console.log('🔧 Service Worker registration failed:', error);
            });
    });
}

// Add some fun console messages
console.log(`
🎨 Welcome to iamshihab.dev!
🚀 This is a coming soon page for Shihab Rahman.
🎯 The page is fully responsive and accessible.
📱 Works great on all devices!
😄 If you're reading this, you're probably a developer too!
🤖 Remember: The best code is the code that works
`);
