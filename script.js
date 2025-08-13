// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initProfilePhotoMeme();
    initFunFacts();
    initSocialLinks();
    initProgressAnimation();
    initAccessibility();
    
    console.log('🚀 iamshihab.dev - Coming Soon page loaded!');
    console.log('💡 Try clicking on the profile photo for a surprise...');
});



// Profile photo Jurassic Park meme
function initProfilePhotoMeme() {
    const profilePhoto = document.getElementById('profile-photo');
    
    if (profilePhoto) {
        profilePhoto.addEventListener('click', function() {
            showJurassicParkMeme();
        });
    }
}

function showJurassicParkMeme() {
    // Create meme overlay
    const memeOverlay = document.createElement('div');
    memeOverlay.className = 'meme-overlay';
    memeOverlay.innerHTML = `
        <div class="meme-content">
            <div class="meme-text">
                <h2>CLEVER GIRL</h2>
                <p>"You found the Easter egg" - Shihab Rahman</p>
            </div>
            <div class="meme-close">×</div>
        </div>
    `;
    
    // Add styles
    memeOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(45deg, #000, #1a1a1a);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: memeAppear 0.5s ease-out;
    `;
    
    const memeContent = memeOverlay.querySelector('.meme-content');
    memeContent.style.cssText = `
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        padding: 2rem;
        border-radius: 1rem;
        text-align: center;
        position: relative;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        animation: memeContentAppear 0.5s ease-out 0.2s both;
    `;
    
    const memeText = memeOverlay.querySelector('.meme-text');
    memeText.style.cssText = `
        color: white;
        font-family: 'Courier New', monospace;
    `;
    
    memeText.querySelector('h2').style.cssText = `
        font-size: 2.5rem;
        margin: 0 0 1rem 0;
        text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        animation: jurassicText 2s infinite;
    `;
    
    memeText.querySelector('p').style.cssText = `
        font-size: 1.5rem;
        margin: 0;
        opacity: 0.9;
    `;
    
    const closeBtn = memeOverlay.querySelector('.meme-close');
    closeBtn.style.cssText = `
        position: absolute;
        top: -10px;
        right: -10px;
        width: 30px;
        height: 30px;
        background: #ef4444;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    `;
    
    // Add animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes memeAppear {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes memeContentAppear {
            from { 
                opacity: 0; 
                transform: scale(0.5) rotate(-10deg);
            }
            to { 
                opacity: 1; 
                transform: scale(1) rotate(0deg);
            }
        }
        
        @keyframes jurassicText {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
    `;
    document.head.appendChild(style);
    
    // Add event listeners
    closeBtn.addEventListener('click', function() {
        document.body.removeChild(memeOverlay);
    });
    
    memeOverlay.addEventListener('click', function(e) {
        if (e.target === memeOverlay) {
            document.body.removeChild(memeOverlay);
        }
    });
    
    // Add to page
    document.body.appendChild(memeOverlay);
    
    // Console message
    console.log('%c🦖 CLEVER GIRL! 🦖', 'color: #6366f1; font-size: 24px; font-weight: bold;');
    console.log('%c🎯 You found the Easter egg...', 'color: #8b5cf6; font-size: 16px;');
}

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
            'Googling "why is my code not working"...',
            'Convincing stakeholders that "it works on my machine"...',
            'Explaining why the bug is actually a feature...',
            'Trying to remember what I was supposed to do...',
            'Pretending to understand the requirements...',
            'Adding more comments to hide the complexity...',
            'Optimizing the optimization function...'
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
