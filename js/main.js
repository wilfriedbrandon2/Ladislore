 // Sample product data
        const products = [
            {
                id: 1,
                name: "Sérum Éclat Radieux",
                description: "Sérum à la vitamine C pour illuminer et uniformiser le teint. Réduit l'apparence des taches sombres et donne un éclat radieux.",
                category: "skincare",
                price: 15000,
                oldPrice: 20000,
                discount: 25,
                images: [
                    "img/11.avif",
                    "img/l9.webp",
                    "img/l7.jpg"
                ],
                variations: [
                    { name: "30ml", price: 15000 },
                    { name: "50ml", price: 22000 },
                    { name: "100ml", price: 35000 }
                ]
            },
            {
                id: 2,
                name: "Collection cheveux doux",
                description: "cheveux doux longue tenue avec une pigmentation riche. Confortable à porter sans assécher vos lèvres.",
                category: "makeup",
                price: 8000,
                oldPrice: 10000,
                discount: 20,
                images: [
                    "img/l4.webp",
                    "img/l2.jpg"
                ],
                variations: [
                    { name: "Velours Rouge", price: 8000 },
                    { name: "Rose Poudré", price: 8000 },
                    { name: "Brun Nu", price: 8000 },
                    { name: "Vin Baie", price: 8500 }
                ]
            },
            {
                id: 3,
                name: "Longue Pousser",
                description: "Cheveuxhydratante 24h avec acide hyaluronique pour une peau rebondie et hydratée. Convient à tous les types de peau.",
                category: "skincare",
                price: 12000,
                oldPrice: 15000,
                discount: 20,
                images: [
                    "img/l1.webp",
                    "img/l7.jpg"
                ],
                variations: [
                    { name: "Peau Normale", price: 12000 },
                    { name: "Peau Sèche", price: 13000 },
                    { name: "Peau Sensible", price: 12500 }
                ]
            },
            {
                id: 4,
                name: "Cheveux Volume",
                description: "Mascara allongeant et volumisant pour des cils dramatiques. Formule résistante à l'eau qui dure toute la journée.",
                category: "makeup",
                price: 7000,
                oldPrice: 9000,
                discount: 22,
                images: [
                    "img/l9.webp",
                    "img/l6.jpg"
                ],
                variations: [
                    { name: "Noir", price: 7000 },
                    { name: "Brun", price: 7000 },
                    { name: "Résistant à l'eau", price: 8000 }
                ]
            },
            {
                id: 5,
                name: "Huile cheveux Douce",
                description: "Démaquillant à base d'huile qui élimine le maquillage et les impuretés sans décaper les huiles naturelles de la peau.",
                category: "skincare",
                price: 10000,
                oldPrice: 13000,
                discount: 23,
                images: [
                    "img/IMG_9821.jpeg",
                    "img/l3.webp"
                ],
                variations: [
                    { name: "150ml", price: 10000 },
                    { name: "300ml", price: 18000 }
                ]
            },
            {
                id: 6,
                name: "produit Finition Naturelle",
                description: "Fond de teint léger avec couvrance modulable pour une finition naturelle, semblable à la peau. Contient SPF 20.",
                category: "makeup",
                price: 14000,
                oldPrice: 18000,
                discount: 22,
                images: [
                    "img/l6.jpg",
                    "img/l4.webp"
                ],
                variations: [
                    { name: "Clair", price: 14000 },
                    { name: "Moyen", price: 14000 },
                    { name: "Foncé", price: 14000 },
                    { name: "Très Foncé", price: 14000 }
                ]
            },
            {
                id: 7,
                name: "Masque Revitalisant Cheveux",
                description: "Traitement conditionneur profond pour cheveux secs et abîmés. Restaure brillance et douceur avec des huiles naturelles.",
                category: "haircare",
                price: 11000,
                oldPrice: 14000,
                discount: 21,
                images: [
                    "img/l7.jpg",
                    "img/l1.webp"
                ],
                variations: [
                    { name: "Pour Cheveux Secs", price: 11000 },
                    { name: "Pour Cheveux Abîmés", price: 12000 },
                    { name: "Pour Cheveux Colorés", price: 11500 }
                ]
            },
            {
                id: 8,
                name: "Brume Corporelle Rafraîchissante",
                description: "Brume parfumée légère et rafraîchissante avec des notes d'agrumes et florales. Parfaite pour un usage quotidien.",
                category: "fragrance",
                price: 9000,
                oldPrice: 12000,
                discount: 25,
                images: [
                    "img/l3.webp",
                    "img/l2.jpg"
                ],
                variations: [
                    { name: "Floraison d'Agrumes", price: 9000 },
                    { name: "Rêve de Vanille", price: 9000 },
                    { name: "Brise Océanique", price: 9000 }
                ]
            }
        ];

        // Add this to your cart open/close functionality

       // When opening cart
       function openCart() {
           document.body.classList.add('cart-open');
           // ...existing cart open code...
       }
       
       // When closing cart
       function closeCart() {
           document.body.classList.remove('cart-open');
           // ...existing cart close code...
       }
       
       // Also apply this to modals
       function openModal(modalElement) {
           document.body.classList.add('cart-open');
           modalElement.classList.add('active');
       }
       
       function closeModal(modalElement) {
           document.body.classList.remove('cart-open');
           modalElement.classList.remove('active');
       }

        // Cart state
        let cart = [];
        let currentProductView = null;
        let currentImageIndex = 0;
        let touchStartX = 0;
        let touchEndX = 0;

        // DOM Elements
        const cartIcon = document.querySelector('.cart-icon');
        const cartCount = document.querySelector('.cart-count');
        const cartSidebar = document.querySelector('.cart-sidebar');
        const closeCartBtn = document.querySelector('.close-cart');
        const cartItemsContainer = document.querySelector('.cart-items');
        const totalPriceElement = document.querySelector('.total-price');
        const productsGrid = document.getElementById('productsGrid');
        const notification = document.getElementById('notification');
        const notificationText = document.getElementById('notificationText');
        const mobileSearchBtn = document.querySelector('.mobile-search-btn');
        const mobileSearchBar = document.querySelector('.mobile-search-bar');
        const searchInput = document.querySelector('.search-input');
        const aboutIcon = document.querySelector('.about-icon');
        const homePage = document.getElementById('homePage');
        const aboutPage = document.getElementById('aboutPage');
        const productDetailsPage = document.getElementById('productDetailsPage');
        const productDetailsContainer = document.getElementById('productDetailsContainer');
        const orderForm = document.getElementById('orderForm');
        const confirmationModal = document.getElementById('confirmationModal');
        const cancelOrderBtn = document.getElementById('cancelOrder');
        const confirmOrderBtn = document.getElementById('confirmOrder');
        const installBtns = document.querySelectorAll('.install-app-btn');
        const homeLogo = document.getElementById('homeLogo');
        const floatingBackBtn = document.getElementById('floatingBackBtn');
        const relatedProductsContainer = document.getElementById('relatedProductsContainer');
        const relatedSlider = document.getElementById('relatedSlider');
        const comparisonContainer = document.getElementById('comparisonContainer');
        const comparisonSlider = document.getElementById('comparisonSlider');
        const installModal = document.getElementById('installModal');
        const closeInstallBtn = document.getElementById('closeInstall');
        const videoModal = document.getElementById('videoModal');
        const closeVideoBtn = document.getElementById('closeVideo');
        const videoModalTitle = document.getElementById('videoModalTitle');
        const videoContainer = document.getElementById('videoContainer');
        const videoCards = document.querySelectorAll('.video-card');
        const homeLinks = document.querySelectorAll('.home-link');
        const aboutLinks = document.querySelectorAll('.about-link');
        const newsletterForm = document.getElementById('newsletterForm');

        // Initialize the website
        document.addEventListener('DOMContentLoaded', function() {
    // Initialize hero slider
    if (document.querySelector('.hero-slider')) {
        $('.hero-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false
        });
    }


            // Initialize category slider with more items visible
           // Initialize category slider with responsive arrows and dots
    if (document.querySelector('.category-slider')) {
        $('.category-slider').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 8,
            slidesToScroll: 3,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 3,
                        arrows: true
                    }
                },
                     {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 4,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

            // Initialize testimonials slider
            $('.testimonials-slider').slick({
                dots: true,
                infinite: true,
                speed: 500,
                fade: false,
                autoplay: true,
                autoplaySpeed: 4000,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
            });

            // Load products
            renderProducts();

            // Event Listeners
            cartIcon.addEventListener('click', toggleCart);
            closeCartBtn.addEventListener('click', toggleCart);
            mobileSearchBtn.addEventListener('click', toggleMobileSearch);
            aboutIcon.addEventListener('click', showAboutPage);
            orderForm.addEventListener('submit', submitOrder);
            cancelOrderBtn.addEventListener('click', closeModal);
            confirmOrderBtn.addEventListener('click', sendWhatsAppOrder);
            homeLogo.addEventListener('click', showHomePage);
            floatingBackBtn.addEventListener('click', showHomePage);
            closeInstallBtn.addEventListener('click', () => installModal.classList.remove('active'));
            closeVideoBtn.addEventListener('click', () => videoModal.classList.remove('active'));
            
            // Home and About links
            homeLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    showHomePage();
                });
            });
            
            aboutLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    showAboutPage();
                });
            });

            installBtns.forEach(btn => {
                btn.addEventListener('click', () => installModal.classList.add('active'));
            });

            // Video cards
            videoCards.forEach(card => {
                card.addEventListener('click', function() {
                    const videoUrl = this.getAttribute('data-video');
                    const videoTitle = this.getAttribute('data-title');
                    
                    videoModalTitle.textContent = videoTitle;
                    videoContainer.innerHTML = `<iframe src="${videoUrl}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                    
                    videoModal.classList.add('active');
                });
            });

            // Search functionality
            searchInput.addEventListener('input', filterProducts);

            // Category filtering
            document.querySelectorAll('.category-item').forEach(item => {
                item.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');
                    filterByCategory(category);
                });
            });

            // Newsletter form
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('.newsletter-input').value;
                showNotification('Merci de vous être abonné à notre newsletter!');
                this.reset();
            });

            // Update cart count on load
            updateCartCount();

            // Initialize comparison slider
            initComparisonSlider();

            // Scroll to top when showing product details
            window.addEventListener('scroll', function() {
                // Show/hide floating back button
                if (productDetailsPage.style.display === 'block' || aboutPage.style.display === 'block') {
                    if (window.scrollY > 100) {
                        floatingBackBtn.classList.add('show');
                    } else {
                        floatingBackBtn.classList.remove('show');
                    }
                } else {
                    floatingBackBtn.classList.remove('show');
                }
            });
        });

        // Initialize comparison slider
        function initComparisonSlider() {
            if (!comparisonSlider) return;
            
            let isDragging = false;
            const container = comparisonContainer;
            const after = container.querySelector('.comparison-after');
            
            comparisonSlider.addEventListener('mousedown', startDragging);
            comparisonSlider.addEventListener('touchstart', startDragging);
            
            function startDragging(e) {
                isDragging = true;
                document.addEventListener('mousemove', onDrag);
                document.addEventListener('touchmove', onDrag);
                document.addEventListener('mouseup', stopDragging);
                document.addEventListener('touchend', stopDragging);
                e.preventDefault();
            }
            
            function onDrag(e) {
                if (!isDragging) return;
                
                let clientX;
                if (e.type.includes('touch')) {
                    clientX = e.touches[0].clientX;
                } else {
                    clientX = e.clientX;
                }
                
                const containerRect = container.getBoundingClientRect();
                const x = clientX - containerRect.left;
                const width = containerRect.width;
                
                let percentage = (x / width) * 100;
                percentage = Math.max(0, Math.min(100, percentage));
                
                after.style.width = `${percentage}%`;
                comparisonSlider.style.left = `${percentage}%`;
            }
            
            function stopDragging() {
                isDragging = false;
                document.removeEventListener('mousemove', onDrag);
                document.removeEventListener('touchmove', onDrag);
                document.removeEventListener('mouseup', stopDragging);
                document.removeEventListener('touchend', stopDragging);
            }
        }

        // Render products to the grid
        function renderProducts(filteredProducts = products) {
            productsGrid.innerHTML = '';
            
            if (filteredProducts.length === 0) {
                productsGrid.innerHTML = `
                    <div class="no-products">
                        <i class="fas fa-search"></i>
                        <h3>Aucun produit trouvé</h3>
                        <p>Essayez avec d'autres termes de recherche</p>
                    </div>
                `;
                return;
            }
            
            filteredProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    ${product.discount ? `<div class="product-badge">-${product.discount}%</div>` : ''}
                    <div class="product-img-container">
                        <img src="${product.images[0]}" alt="${product.name}" class="product-img">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price-container">
                            <span class="current-price">${product.price.toLocaleString()} XAF</span>
                            ${product.oldPrice ? `<span class="old-price">${product.oldPrice.toLocaleString()} XAF</span>` : ''}
                        </div>
                        <button class="add-to-cart-btn" data-id="${product.id}">
                            <i class="fas fa-cart-plus"></i> Ajouter au Panier
                        </button>
                    </div>
                `;
                
                // Add event listener to the product card
                productCard.addEventListener('click', function(e) {
                    // Don't trigger if clicking the add to cart button
                    if (!e.target.closest('.add-to-cart-btn')) {
                        showProductDetails(product.id);
                    }
                });
                
                // Add event listener to the add to cart button
                const addToCartBtn = productCard.querySelector('.add-to-cart-btn');
                addToCartBtn.addEventListener('click', function(e) {
                    e.stopPropagation(); // Prevent triggering the card click event
                    addToCart(product.id);
                });
                
                productsGrid.appendChild(productCard);
            });
        }

        // Show product details page
        function showProductDetails(productId) {
            // Scroll to top
            window.scrollTo(0, 0);
            
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            currentProductView = product;
            currentImageIndex = 0;
            
            // Hide other pages
            homePage.style.display = 'none';
            aboutPage.style.display = 'none';
            
            // Show product details page
            productDetailsPage.style.display = 'block';
            
            // Render product details
            productDetailsContainer.innerHTML = `
                <div class="product-gallery">
                    <div class="main-product-image" id="mainProductImageContainer">
                        <img src="${product.images[0]}" alt="${product.name}" id="mainProductImage">
                        ${product.images.length > 1 ? `
                            <div class="gallery-nav prev" id="prevImage">
                                <i class="fas fa-chevron-left"></i>
                            </div>
                            <div class="gallery-nav next" id="nextImage">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        ` : ''}
                    </div>
                    ${product.images.length > 1 ? `
                    <div class="product-thumbnails">
                        ${product.images.map((img, index) => `
                            <div class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
                                <img src="${img}" alt="${product.name} miniature ${index + 1}">
                            </div>
                        `).join('')}
                    </div>
                    ` : ''}
                </div>
                <div class="product-details">
                    <h1>${product.name}</h1>
                    <div class="product-rating">
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <span>(24 avis)</span>
                    </div>
                    <div class="product-price-large">
                        <span class="current-price-large">${product.price.toLocaleString()} XAF</span>
                        ${product.oldPrice ? `<span class="old-price-large">${product.oldPrice.toLocaleString()} XAF</span>` : ''}
                        ${product.discount ? `<span class="discount-badge-large">-${product.discount}%</span>` : ''}
                    </div>
                    <p class="product-description-full">${product.description} Ce produit premium est formulé avec des ingrédients naturels et convient à tous les types de peau. Résultats visibles sous 2-4 semaines d'utilisation régulière.</p>
                    
                    ${product.variations ? `
                    <div class="product-variations">
                        <span class="variation-title">Sélectionnez la variation:</span>
                        <div class="variation-options">
                            ${product.variations.map((variation, index) => `
                                <div class="variation-option ${index === 0 ? 'selected' : ''}" data-price="${variation.price}" data-name="${variation.name}">
                                    ${variation.name}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                    
                    <div class="quantity-selector">
                        <span class="quantity-title">Quantité:</span>
                        <div class="quantity-controls-large">
                            <button class="quantity-btn-large" id="decreaseQty">-</button>
                            <span class="quantity-large" id="productQuantity">1</span>
                            <button class="quantity-btn-large" id="increaseQty">+</button>
                        </div>
                    </div>
                    
                    <div class="special-instructions">
                        <label for="instructions" class="instructions-title">Instructions Spéciales (Optionnel):</label>
                        <textarea class="instructions-box" id="instructions" placeholder="Ex: Je suis allergique au beurre de karité, pouvez-vous recommander des alternatives?"></textarea>
                    </div>
                    
                    <div class="action-buttons">
                        <button class="btn-add-to-cart-large" id="addToCartFromDetails">
                            <i class="fas fa-cart-plus"></i> Ajouter au Panier
                        </button>
                    </div>
                </div>
            `;
            
            // Add event listeners for product details page
            // Thumbnail click
            document.querySelectorAll('.thumbnail').forEach(thumb => {
                thumb.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    currentImageIndex = index;
                    updateProductImage();
                    
                    // Update active thumbnail
                    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            // Navigation arrows
            const prevBtn = document.getElementById('prevImage');
            const nextBtn = document.getElementById('nextImage');
            
            if (prevBtn) {
                prevBtn.addEventListener('click', function() {
                    currentImageIndex = (currentImageIndex - 1 + product.images.length) % product.images.length;
                    updateProductImage();
                    updateActiveThumbnail();
                });
            }
            
            if (nextBtn) {
                nextBtn.addEventListener('click', function() {
                    currentImageIndex = (currentImageIndex + 1) % product.images.length;
                    updateProductImage();
                    updateActiveThumbnail();
                });
            }
            
            // Touch swipe for mobile
            const mainImageContainer = document.getElementById('mainProductImageContainer');
            if (mainImageContainer && product.images.length > 1) {
                mainImageContainer.addEventListener('touchstart', function(e) {
                    touchStartX = e.changedTouches[0].screenX;
                });
                
                mainImageContainer.addEventListener('touchend', function(e) {
                    touchEndX = e.changedTouches[0].screenX;
                    handleSwipe();
                });
            }
            
            // Variation selection
            document.querySelectorAll('.variation-option').forEach(option => {
                option.addEventListener('click', function() {
                    document.querySelectorAll('.variation-option').forEach(o => o.classList.remove('selected'));
                    this.classList.add('selected');
                    
                    // Update price
                    const newPrice = parseInt(this.getAttribute('data-price'));
                    document.querySelector('.current-price-large').textContent = newPrice.toLocaleString() + ' XAF';
                });
            });
            
            // Quantity controls
            const decreaseQty = document.getElementById('decreaseQty');
            const increaseQty = document.getElementById('increaseQty');
            const productQuantity = document.getElementById('productQuantity');
            
            decreaseQty.addEventListener('click', function() {
                let qty = parseInt(productQuantity.textContent);
                if (qty > 1) {
                    productQuantity.textContent = qty - 1;
                }
            });
            
            increaseQty.addEventListener('click', function() {
                let qty = parseInt(productQuantity.textContent);
                productQuantity.textContent = qty + 1;
            });
            
            // Add to cart from details page
            document.getElementById('addToCartFromDetails').addEventListener('click', function() {
                const selectedVariation = document.querySelector('.variation-option.selected');
                const variationName = selectedVariation ? selectedVariation.getAttribute('data-name') : 'Défaut';
                const variationPrice = selectedVariation ? parseInt(selectedVariation.getAttribute('data-price')) : product.price;
                const quantity = parseInt(document.getElementById('productQuantity').textContent);
                const instructions = document.getElementById('instructions').value;
                
                addToCart(product.id, quantity, variationName, variationPrice, instructions);
            });
            
            // Show related products
            showRelatedProducts(product);
        }

        // Handle swipe for mobile
        function handleSwipe() {
            if (!currentProductView || currentProductView.images.length <= 1) return;
            
            const swipeThreshold = 50;
            
            if (touchStartX - touchEndX > swipeThreshold) {
                // Swipe left - next image
                currentImageIndex = (currentImageIndex + 1) % currentProductView.images.length;
            } else if (touchEndX - touchStartX > swipeThreshold) {
                // Swipe right - previous image
                currentImageIndex = (currentImageIndex - 1 + currentProductView.images.length) % currentProductView.images.length;
            }
            
            updateProductImage();
            updateActiveThumbnail();
        }

        // Update product image
        function updateProductImage() {
            const mainImage = document.getElementById('mainProductImage');
            if (mainImage && currentProductView) {
                mainImage.src = currentProductView.images[currentImageIndex];
            }
        }

        // Update active thumbnail
        function updateActiveThumbnail() {
            document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
                if (index === currentImageIndex) {
                    thumb.classList.add('active');
                } else {
                    thumb.classList.remove('active');
                }
            });
        }

        // Show related products
        function showRelatedProducts(product) {
            const relatedProducts = products.filter(p => 
                p.category === product.category && p.id !== product.id
            );
            
            if (relatedProducts.length > 0) {
                relatedProductsContainer.style.display = 'block';
                relatedSlider.innerHTML = '';
                
                relatedProducts.forEach(relatedProduct => {
                    const slide = document.createElement('div');
                    slide.className = 'related-slide';
                    slide.innerHTML = `
                        <div class="related-product-card" data-id="${relatedProduct.id}">
                            ${relatedProduct.discount ? `<div class="product-badge">-${relatedProduct.discount}%</div>` : ''}
                            <div class="related-product-img-container">
                                <img src="${relatedProduct.images[0]}" alt="${relatedProduct.name}" class="related-product-img">
                            </div>
                            <div class="related-product-info">
                                <h3 class="related-product-title">${relatedProduct.name}</h3>
                                <div class="related-product-price">${relatedProduct.price.toLocaleString()} XAF</div>
                            </div>
                        </div>
                    `;
                    
                    slide.addEventListener('click', function() {
                        showProductDetails(relatedProduct.id);
                    });
                    
                    relatedSlider.appendChild(slide);
                });
                
                // Initialize related products slider
                if ($('.related-slider').hasClass('slick-initialized')) {
                    $('.related-slider').slick('unslick');
                }
                
                $('.related-slider').slick({
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
                    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                dots: true
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1,
                                dots: true
                            }
                        }
                    ]
                });
            } else {
                relatedProductsContainer.style.display = 'none';
            }
        }

        // Add product to cart
        function addToCart(productId, quantity = 1, variation = 'Défaut', price = null, instructions = '') {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            // Use provided price or product price
            const itemPrice = price || product.price;
            
            // Check if item already in cart with same variation
            const existingItemIndex = cart.findIndex(item => 
                item.id === productId && item.variation === variation
            );
            
            if (existingItemIndex > -1) {
                // Update quantity of existing item
                cart[existingItemIndex].quantity += quantity;
                cart[existingItemIndex].instructions = instructions || cart[existingItemIndex].instructions;
            } else {
                // Add new item to cart
                cart.push({
                    id: productId,
                    name: product.name,
                    price: itemPrice,
                    image: product.images[0],
                    variation: variation,
                    quantity: quantity,
                    instructions: instructions
                });
            }
            
            // Update cart UI
            updateCartCount();
            renderCartItems();
            
            // Show notification
            showNotification(`${product.name} ajouté au panier`);
        }

        // Update cart count
        function updateCartCount() {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
        }

        // Toggle cart sidebar
        function toggleCart() {
            cartSidebar.classList.toggle('active');
        }

        // Render cart items
        function renderCartItems() {
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `
                    <div class="cart-empty">
                        <i class="fas fa-shopping-cart"></i>
                        <p>Votre panier est vide</p>
                    </div>
                `;
                totalPriceElement.textContent = '0 XAF';
                return;
            }
            
            let cartHTML = '';
            let total = 0;
            
            cart.forEach((item, index) => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                
                cartHTML += `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                        <div class="cart-item-details">
                            <h4 class="cart-item-title">${item.name}</h4>
                            <p class="cart-item-variant">${item.variation}</p>
                            <p class="cart-item-price">${item.price.toLocaleString()} XAF × ${item.quantity}</p>
                            ${item.instructions ? `<p class="cart-item-instructions"><small><i>Note: ${item.instructions}</i></small></p>` : ''}
                            <div class="cart-item-actions">
                                <div class="quantity-controls">
                                    <button class="quantity-btn decrease-quantity" data-index="${index}">-</button>
                                    <span class="cart-item-quantity">${item.quantity}</span>
                                    <button class="quantity-btn increase-quantity" data-index="${index}">+</button>
                                </div>
                                <button class="remove-item" data-index="${index}">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });
            
            cartItemsContainer.innerHTML = cartHTML;
            totalPriceElement.textContent = total.toLocaleString() + ' XAF';
            
            // Add event listeners to cart item controls
            document.querySelectorAll('.decrease-quantity').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const index = parseInt(this.getAttribute('data-index'));
                    updateCartItemQuantity(index, -1);
                });
            });
            
            document.querySelectorAll('.increase-quantity').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const index = parseInt(this.getAttribute('data-index'));
                    updateCartItemQuantity(index, 1);
                });
            });
            
            document.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const index = parseInt(this.getAttribute('data-index'));
                    removeCartItem(index);
                });
            });
        }

        // Update cart item quantity
        function updateCartItemQuantity(index, change) {
            if (index < 0 || index >= cart.length) return;
            
            cart[index].quantity += change;
            
            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
            
            updateCartCount();
            renderCartItems();
        }

        // Remove cart item
        function removeCartItem(index) {
            if (index < 0 || index >= cart.length) return;
            
            const itemName = cart[index].name;
            cart.splice(index, 1);
            
            updateCartCount();
            renderCartItems();
            showNotification(`${itemName} retiré du panier`);
        }

        // Show notification
        function showNotification(message) {
            notificationText.textContent = message;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Toggle mobile search
        function toggleMobileSearch() {
            mobileSearchBar.classList.toggle('active');
        }

        // Show about page
        function showAboutPage() {
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Hide other pages
            homePage.style.display = 'none';
            productDetailsPage.style.display = 'none';
            
            // Show about page
            aboutPage.style.display = 'block';
            
            // Close mobile search if open
            mobileSearchBar.classList.remove('active');
        }

        // Show home page
        function showHomePage() {
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Hide other pages
            aboutPage.style.display = 'none';
            productDetailsPage.style.display = 'none';
            
            // Show home page
            homePage.style.display = 'block';
            
            // Reset search
            searchInput.value = '';
            renderProducts();
            
            // Close mobile search if open
            mobileSearchBar.classList.remove('active');
        }

        // Filter products by search
        function filterProducts() {
            const searchTerm = searchInput.value.toLowerCase();
            
            if (searchTerm.length === 0) {
                renderProducts();
                return;
            }
            
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) || 
                product.description.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );
            
            renderProducts(filteredProducts);
        }

        // Filter products by category
        function filterByCategory(category) {
            const filteredProducts = products.filter(product => 
                product.category === category
            );
            
            renderProducts(filteredProducts);
            
            // Scroll to products section
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        }

        // Submit order via WhatsApp
        function submitOrder(e) {
            e.preventDefault();
            
            if (cart.length === 0) {
                showNotification('Votre panier est vide. Ajoutez des produits avant de soumettre la commande.');
                return;
            }
            
            const customerName = document.getElementById('customerName').value;
            const customerRegion = document.getElementById('customerRegion').value;
            
            if (!customerName || !customerRegion) {
                showNotification('Veuillez remplir tous les champs obligatoires.');
                return;
            }
            
            // Show confirmation modal
            confirmationModal.classList.add('active');
        }

        // Close modal
        function closeModal() {
            confirmationModal.classList.remove('active');
        }

        // Send WhatsApp order
        function sendWhatsAppOrder() {
            const customerName = document.getElementById('customerName').value;
            const customerRegion = document.getElementById('customerRegion').value;
            
            // Format order message
            let message = `*NOUVELLE COMMANDE - LADISLORE COSMÉTIQUES*%0A%0A`;
            message += `👤 *Client:* ${customerName}%0A`;
            message += `📍 *Région:* ${customerRegion}%0A%0A`;
            message += `🛍️ *Détails de la Commande:*%0A`;
            
            let total = 0;
            cart.forEach((item, index) => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                message += `${index + 1}. ${item.name} (${item.variation})%0A`;
                message += `   Quantité: ${item.quantity} × ${item.price.toLocaleString()} XAF = ${itemTotal.toLocaleString()} XAF%0A`;
                if (item.instructions) {
                    message += `   Note: ${item.instructions}%0A`;
                }
                message += `%0A`;
            });
            
            message += `%0A💰 *Montant Total:* ${total.toLocaleString()} XAF%0A%0A`;
            message += `_Commande soumise via le Site Web Ladislore_`;
            
            // Create WhatsApp URL
            const phoneNumber = '+237653154864';
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
            
            // Open WhatsApp
            window.open(whatsappURL, '_blank');
            
            // Close modal
            closeModal();
            
            // Clear cart
            cart = [];
            updateCartCount();
            renderCartItems();
            
            // Reset form
            orderForm.reset();
            
            // Show success notification
            showNotification('Commande soumise via WhatsApp!');
        }
                document.addEventListener('DOMContentLoaded', function() {
            // Initialize hero slider
            $('.hero-slider').slick({
                arrows: false
            });

            // Initialize category slider with responsive arrows and dots
            $('.category-slider').slick({
                arrows: true,
                dots: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            dots: true
                        }
                    }
                ]
            });

            // ...existing code...
        });

        // ...existing code...

document.addEventListener('DOMContentLoaded', function() {
    // ...existing init code...

    // Ensure about/home toggle works in-place (SPA)
    if (aboutIcon) {
        // initial mode = about (click will open about page)
        aboutIcon.dataset.mode = 'about';

        function showAboutView() {
            if (homePage) homePage.style.display = 'none';
            if (aboutPage) aboutPage.style.display = 'block';
            aboutIcon.dataset.mode = 'home';
            aboutIcon.innerHTML = '<i class="fas fa-home"></i>';
            aboutIcon.title = 'Accueil';
        }

        function showHomeView() {
            if (aboutPage) aboutPage.style.display = 'none';
            if (homePage) homePage.style.display = 'block';
            aboutIcon.dataset.mode = 'about';
            aboutIcon.innerHTML = '<i class="fas fa-question-circle"></i>';
            aboutIcon.title = 'À propos';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        aboutIcon.addEventListener('click', function(e) {
            e.preventDefault();
            if (aboutIcon.dataset.mode === 'home') {
                showHomeView();
            } else {
                showAboutView();
            }
        });

        // If other controls should return to home (floating back, logo), restore icon
        if (homeLogo) {
            homeLogo.addEventListener('click', function() {
                showHomeView();
            });
        }
        if (floatingBackBtn) {
            floatingBackBtn.addEventListener('click', function() {
                showHomeView();
            });
        }
    }

    // ...rest of init code...
});

// ...existing code...
// ...No scroll on cart...

function toggleCart() {
    const cartSidebar = document.querySelector('.cart-sidebar');
    const body = document.body;

    if (cartSidebar.classList.contains('active')) {
        cartSidebar.classList.remove('active');
        body.classList.remove('no-scroll'); // Allow scrolling
    } else {
        cartSidebar.classList.add('active');
        body.classList.add('no-scroll'); // Prevent scrolling
    }
}

// ...existing code...

// Search functionality
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    if (searchTerm.length === 0) {
        renderProducts(); // Show all products if search is empty
        clearSearchButton.style.display = 'none'; // Hide clear button
        return;
    }

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );

    renderProducts(filteredProducts);

    // Show or hide the clear button
    clearSearchButton.style.display = filteredProducts.length > 0 ? 'block' : 'none';

    // If no products found, show not found message
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search"></i>
                <h3>Aucun produit trouvé</h3>
                <p>Essayez avec d'autres termes de recherche</p>
            </div>
        `;
    }
});

// Clear search input and results
clearSearchButton.addEventListener('click', function() {
    searchInput.value = '';
    clearSearchButton.style.display = 'none'; // Hide clear button
    renderProducts(); // Show all products
});

// Hide about section from search
aboutPage.style.display = 'none'; // Ensure about section is not visible

// ...existing code...


// Search functionality
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    if (searchTerm.length === 0) {
        renderProducts(); // Show all products if search is empty
        clearSearchButton.style.display = 'none'; // Hide clear button
        if (aboutPage.style.display === 'block') {
            mobileSearchBtn.style.display = 'none'; // Hide search icon on about page
        } else {
            mobileSearchBtn.style.display = 'block'; // Show search icon on other pages
        }
        return;
    }

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );

    renderProducts(filteredProducts);

    // Show or hide the clear button
    clearSearchButton.style.display = filteredProducts.length > 0 ? 'block' : 'none';

    // If no products found, show not found message
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search"></i>
                <h3>Aucun produit trouvé</h3>
                <p>Essayez avec d'autres termes de recherche</p>
            </div>
        `;
    }
});

// Clear search input and results
clearSearchButton.addEventListener('click', function() {
    searchInput.value = '';
    clearSearchButton.style.display = 'none'; // Hide clear button
    renderProducts(); // Show all products
    mobileSearchBtn.style.display = aboutPage.style.display === 'block' ? 'none' : 'block'; // Adjust search icon visibility
});


