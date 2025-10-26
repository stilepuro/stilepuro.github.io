// Enhanced JavaScript for The Blonde Salad Website

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Main initialization function
function initializeApp() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Initialize all components
    initializeLoadingScreen();
    initializeHeaderEffects();
    initializeNavigation();
    initializeFilters();
    initializeNewsletter();
    initializeBackToTop();
    initializeScrollEffects();
    initializeLazyLoading();
    initializeArticleLoading();
    
    console.log('The Blonde Salad website initialized successfully! 👑');
}

// Loading Screen Management
function initializeLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    if (loadingScreen) {
        // Hide loading screen after page is fully loaded
        window.addEventListener('load', () => {
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    loadingScreen.remove();
                }, 500);
            }, 1000); // Show loading for at least 1 second
        });
    }
}

// Header Scroll Effects
function initializeHeaderEffects() {
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll (optional enhancement)
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Enhanced Navigation
function initializeNavigation() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navigation = document.getElementById('navigation');
    
    // Mobile menu toggle
    if (mobileMenuToggle && navigation) {
        mobileMenuToggle.addEventListener('click', () => {
            navigation.classList.toggle('mobile-open');
            mobileMenuToggle.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navigation.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navigation.classList.remove('mobile-open');
                mobileMenuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
        
        // Close menu when clicking nav links
        const navLinks = navigation.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navigation.classList.remove('mobile-open');
                mobileMenuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#' || href === '#undefined') return;
            
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Filter System
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter articles
            const filter = button.getAttribute('data-filter');
            filterArticles(filter);
        });
    });
}

// Article Filtering
function filterArticles(filter) {
    const articles = document.querySelectorAll('.article-card');
    
    articles.forEach((article, index) => {
        const articleCategory = article.getAttribute('data-category');
        let shouldShow = false;
        
        if (filter === 'all' || !filter) {
            shouldShow = true;
        } else {
            shouldShow = articleCategory === filter;
        }
        
        if (shouldShow) {
            article.style.display = 'block';
            setTimeout(() => {
                article.style.opacity = '1';
                article.style.transform = 'translateY(0)';
            }, index * 50);
        } else {
            article.style.opacity = '0';
            article.style.transform = 'translateY(30px)';
            setTimeout(() => {
                article.style.display = 'none';
            }, 300);
        }
    });
}

// Newsletter Form
function initializeNewsletter() {
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = newsletterForm.querySelector('.newsletter-input').value;
            
            if (email) {
                // Simulate newsletter subscription
                showNotification('Grazie per l\'iscrizione! Ti terremo aggiornata.', 'success');
                newsletterForm.reset();
                
                // Here you would typically send the email to your backend
                console.log('Newsletter subscription:', email);
            }
        });
    }
}

// Back to Top Button
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Scroll Effects
function initializeScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.article-card, .featured-content, .newsletter-content');
    animatedElements.forEach(el => observer.observe(el));
}

// Lazy Loading for Images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Article Loading with "Load More" functionality
function initializeArticleLoading() {
    const loadMoreBtn = document.getElementById('load-more');
    let currentPage = 1;
    const articlesPerPage = 6;
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            loadMoreBtn.textContent = 'Caricamento...';
            loadMoreBtn.disabled = true;
            
            setTimeout(() => {
                loadMoreArticles(currentPage, articlesPerPage);
                currentPage++;
                loadMoreBtn.textContent = 'Carica altri articoli';
                loadMoreBtn.disabled = false;
            }, 1000);
        });
    }
}

// Load More Articles Function
function loadMoreArticles(page, limit) {
    // This would typically fetch from an API
    // For demo purposes, we'll just show a message
    showNotification('Nuovi articoli caricati!', 'info');
    
    // Example: Add more articles to the grid
    const postsGrid = document.getElementById('posts-grid');
    if (postsGrid && page <= 3) { // Limit to 3 pages for demo
        const moreArticles = generateMoreArticles(page, limit);
        moreArticles.forEach((article, index) => {
            setTimeout(() => {
                const articleElement = createArticleElement(article);
                articleElement.style.opacity = '0';
                articleElement.style.transform = 'translateY(30px)';
                postsGrid.appendChild(articleElement);
                
                setTimeout(() => {
                    articleElement.style.transition = 'opacity 600ms ease, transform 600ms ease';
                    articleElement.style.opacity = '1';
                    articleElement.style.transform = 'translateY(0)';
                }, 100);
            }, index * 100);
        });
    } else {
        loadMoreBtn.textContent = 'Nessun altro articolo disponibile';
        loadMoreBtn.disabled = true;
    }
}

// Generate More Articles (for demo purposes)
function generateMoreArticles(page, limit) {
    const baseArticles = [
        {
            title: "Trend Make-up Autunno 2025: i colori che conquisteranno",
            category: "Beauty",
            date: "20/10/2025",
            image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
            excerpt: "Le tonalità più cool per la stagione autunnale."
        },
        {
            title: "Milano Fashion Week: i look più iconici delle star",
            category: "Fashion",
            date: "18/10/2025",
            image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
            excerpt: "Le celebrities più trendy durante la fashion week milanese."
        }
    ];
    
    return baseArticles.map((article, index) => ({
        ...article,
        id: `article-${page}-${index}`,
        title: `${article.title} (Parte ${page})`
    }));
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 16px 24px;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Enhanced Article Creation with Better Interactions
function createArticleElement(article) {
    const articleDiv = document.createElement('article');
    articleDiv.className = 'article-card';
    articleDiv.setAttribute('data-category', article.category.toLowerCase());
    
    articleDiv.innerHTML = `
        <div class="article-image-container">
            <img src="${article.image}" alt="${article.title}" class="article-image" loading="lazy">
            <div class="article-overlay">
                <button class="read-article-btn" aria-label="Leggi l'articolo">
                    <i data-lucide="arrow-right"></i>
                </button>
            </div>
        </div>
        <div class="article-content">
            <div class="article-meta">${article.category}</div>
            <h3 class="article-title">${article.title}</h3>
            <div class="article-excerpt">${article.excerpt || 'Scopri di più su questo articolo...'}</div>
            <div class="article-date">${article.date}</div>
        </div>
    `;
    
    // Add click event
    articleDiv.addEventListener('click', (e) => {
        if (!e.target.closest('.read-article-btn')) {
            console.log('Article clicked:', article.title);
            showNotification(`Apertura dell'articolo: ${article.title}`, 'info');
        }
    });
    
    // Add read button event
    const readBtn = articleDiv.querySelector('.read-article-btn');
    if (readBtn) {
        readBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Read button clicked:', article.title);
            showNotification(`Apertura dell'articolo: ${article.title}`, 'info');
        });
    }
    
    // Initialize icons for this article
    setTimeout(() => {
        lucide.createIcons({
            attrs: {
                class: 'lucide-icon'
            }
        });
    }, 0);
    
    return articleDiv;
}

// Performance Monitoring
function initializePerformanceMonitoring() {
    // Monitor page load time
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
        
        // Report to analytics (in a real app)
        if (loadTime > 3000) {
            console.warn('Page load time is slower than expected');
        }
    });
    
    // Monitor scroll performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                scrollTimeout = null;
                // Scroll performance logic here
            }, 100);
        }
    }, { passive: true });
}

// Error Handling
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    // In a real app, you might want to send this to an error tracking service
});

// Initialize performance monitoring
initializePerformanceMonitoring();

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeApp,
        filterArticles,
        createArticleElement,
        showNotification
    };
}