// Initialize Lucide icons
lucide.createIcons();

// Sample articles data based on The Blonde Salad content
const articlesData = [
    {
        id: 1,
        title: "Accessori Autunno/Inverno 2025: i must-have da avere subito nel guardaroba",
        category: "Fashion",
        date: "25/09/2025",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        excerpt: "Le tendenze accessori per la stagione fredda che segneranno il guardaroba del 2025."
    },
    {
        id: 2,
        title: "Balenciaga: il ritorno nel mondo dei profumi con una collezione di dieci fragranze",
        category: "Beauty",
        date: "11/09/2025",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop",
        excerpt: "La maison di lusso svela una nuova linea di profumi che promette di rivoluzionare il mercato."
    },
    {
        id: 3,
        title: "Tutto su Il Diavolo Veste Prada 2: cast, trama e le prime immagini dal set a New York",
        category: "Lifestyle",
        date: "30/07/2025",
        image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=800&h=600&fit=crop",
        excerpt: "Il sequel del cult movie si avvicina: tutte le novità dal set newyorkese."
    },
    {
        id: 4,
        title: "Gilmore Girls, reunion emozionante agli Emmy 2025: Lauren Graham e Alexis Bledel di nuovo insieme",
        category: "Lifestyle",
        date: "15/09/2025",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        excerpt: "Il tanto atteso ricongiungimento delle star della serie cult agli Emmy Awards."
    },
    {
        id: 5,
        title: "La Maison Louis Vuitton Lancia la Sua Prima Linea di Make-up con Pat McGrath alla Direzione Creativa",
        category: "Beauty",
        date: "05/03/2025",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
        excerpt: "La collaborazione tra Louis Vuitton e la guru del makeup Pat McGrath svela i primi prodotti."
    },
    {
        id: 6,
        title: "Victoria Beckham: il ritratto intimo di una donna che ha scelto di reinventarsi",
        category: "Fashion",
        date: "11/09/2025",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&h=600&fit=crop",
        excerpt: "Il percorso della stilista da Spice Girl a icona della moda internazionale."
    },
    {
        id: 7,
        title: "Tutti i look iconici di Beyoncé nel Cowboy Carter Tour",
        category: "Fashion",
        date: "09/07/2025",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
        excerpt: "I costumi più spettacolari e trasformativi della superstar nel suo ultimo tour."
    },
    {
        id: 8,
        title: "Moda Estate 2025: il ritorno degli abiti lunghi boho-chic (secondo Bella Hadid)",
        category: "Fashion",
        date: "30/07/2025",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=600&fit=crop",
        excerpt: "Le tendenze estive viste attraverso lo stile della modella più influente del momento."
    },
    {
        id: 9,
        title: "Prime Video 2025: Tra Amore, Risate e Glamour – Tutti i Nuovi Film e Serie",
        category: "Lifestyle",
        date: "11/07/2025",
        image: "https://images.unsplash.com/photo-1489599433112-43b96ad13f4e?w=800&h=600&fit=crop",
        excerpt: "Le produzioni più attese della piattaforma streaming per l'anno 2025."
    },
    {
        id: 10,
        title: "Schiaparelli Haute Couture A/I 2025: l'audacia che incanta Parigi",
        category: "Fashion",
        date: "07/07/2025",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
        excerpt: "La sfilata più discussa e innovativa della Haute Couture parigina."
    },
    {
        id: 11,
        title: "Cher & Dionne diventano Barbie per i 30 anni di Clueless",
        category: "Lifestyle",
        date: "11/07/2025",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        excerpt: "Celebrando tre decenni del film cult con una speciale collaborazione Mattel."
    },
    {
        id: 12,
        title: "Record a Parigi: la Birkin di Jane Birkin venduta per oltre 8 milioni",
        category: "Fashion",
        date: "11/07/2025",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
        excerpt: "L'asta record per la borsa più iconica della storia della moda."
    }
];

// DOM Elements
const postsGrid = document.getElementById('posts-grid');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navigation = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadArticles();
    setupMobileMenu();
    setupNavigation();
    setupSmoothScrolling();
});

// Load and display articles
function loadArticles() {
    if (!postsGrid) return;
    
    // Show loading state
    postsGrid.innerHTML = '<div class="loading"></div>';
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        postsGrid.innerHTML = '';
        
        articlesData.forEach(article => {
            const articleElement = createArticleElement(article);
            postsGrid.appendChild(articleElement);
        });
        
        // Animate articles in
        animateArticles();
    }, 800);
}

// Create article HTML element
function createArticleElement(article) {
    const articleDiv = document.createElement('article');
    articleDiv.className = 'article-card';
    articleDiv.setAttribute('data-category', article.category.toLowerCase());
    
    articleDiv.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="article-image" loading="lazy">
        <div class="article-content">
            <div class="article-meta">${article.category}</div>
            <h3 class="article-title">${article.title}</h3>
            <div class="article-date">${article.date}</div>
        </div>
    `;
    
    // Add click event to make cards interactive
    articleDiv.addEventListener('click', () => {
        console.log('Article clicked:', article.title);
        // Here you would typically navigate to the article detail page
    });
    
    return articleDiv;
}

// Animate articles when they appear
function animateArticles() {
    const articles = document.querySelectorAll('.article-card');
    
    articles.forEach((article, index) => {
        article.style.opacity = '0';
        article.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            article.style.transition = 'opacity 600ms ease, transform 600ms ease';
            article.style.opacity = '1';
            article.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Setup mobile menu functionality
function setupMobileMenu() {
    if (!mobileMenuToggle) return;
    
    mobileMenuToggle.addEventListener('click', () => {
        navigation.classList.toggle('mobile-open');
        mobileMenuToggle.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });
    
    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navigation.classList.remove('mobile-open');
            mobileMenuToggle.classList.remove('active');
        });
    });
}

// Setup navigation functionality
function setupNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Filter articles by category
            const category = link.textContent.toLowerCase();
            filterArticles(category);
        });
    });
}

// Filter articles by category
function filterArticles(category) {
    const articles = document.querySelectorAll('.article-card');
    
    articles.forEach(article => {
        const articleCategory = article.getAttribute('data-category');
        
        if (category === 'fashion' && articleCategory === 'fashion') {
            article.style.display = 'block';
        } else if (category === 'beauty' && articleCategory === 'beauty') {
            article.style.display = 'block';
        } else if (category === 'lifestyle' && articleCategory === 'lifestyle') {
            article.style.display = 'block';
        } else if (category === 'people' && articleCategory === 'people') {
            article.style.display = 'block';
        } else if (category === 'fashion') {
            // Show all if "fashion" is selected (it's the default)
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
    
    // Re-animate visible articles
    setTimeout(() => {
        const visibleArticles = document.querySelectorAll('.article-card[style*="block"]');
        visibleArticles.forEach((article, index) => {
            article.style.opacity = '0';
            article.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                article.style.transition = 'opacity 600ms ease, transform 600ms ease';
                article.style.opacity = '1';
                article.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
}

// Setup smooth scrolling for anchor links
function setupSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Handle window resize
window.addEventListener('resize', () => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        navigation.classList.remove('mobile-open');
        mobileMenuToggle.classList.remove('active');
    }
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Add CSS for mobile menu
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .navigation {
            position: fixed;
            top: 96px;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--surface-bg);
            transform: translateX(-100%);
            transition: transform 400ms ease-in-out;
            z-index: 99;
        }
        
        .navigation.mobile-open {
            transform: translateX(0);
        }
        
        .nav-list {
            flex-direction: column;
            padding: var(--space-lg);
            height: 100%;
            justify-content: flex-start;
            gap: var(--space-lg);
        }
        
        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
        
        .header.scrolled {
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
    }
`;
document.head.appendChild(style);