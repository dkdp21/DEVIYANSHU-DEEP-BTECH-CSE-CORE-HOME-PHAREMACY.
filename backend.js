// Products
const products = [
    {
        id: 1,
        name: "Tylenol Extra Strength",
        price: 9.99,
        image: "C:\\Users\\Aryan\\OneDrive\\Desktop\\Pharmico\\500-mg-24-count-tylenol.webp",
        rating: 4.5,
        category: "Pain Relief",
        description: "Fast, effective relief of headaches, muscle aches, backaches, minor arthritis pain, and fever reduction.",
        activeIngredient: "Acetaminophen 500mg",
        useCases: [
            "Temporary relief of minor aches and pains due to headache, muscular aches, backache, arthritis, the common cold, toothache, and menstrual cramps",
            "Temporary reduction of fever"
        ],
        warnings: [
            "Do not take more than directed (overdose can cause liver damage)",
            "Do not use with other medicines containing acetaminophen",
            "Consult a doctor if you have liver disease",
            "Consult a doctor if symptoms persist for more than 10 days"
        ],
        dosage: "Adults and children 12 years and older: Take 2 tablets every 6 hours while symptoms last. Do not take more than 6 tablets in 24 hours."
    },
    {
        id: 2,
        name: "Advil Liquid Gels",
        price: 11.49,
        image: "C:\\Users\\Aryan\\OneDrive\\Desktop\\Pharmico\\advil-liqui-gels-ibuprofen-200-mg-pain.jpg",
        rating: 4.3,
        category: "Pain Relief",
        description: "Fast-acting liquid gels for powerful pain relief from headaches, muscle aches, minor arthritis, and back pain.",
        activeIngredient: "Ibuprofen 200mg",
        useCases: [
            "Temporary relief of minor aches and pains due to headache, toothache, backache, menstrual cramps, the common cold, muscular aches, and arthritis",
            "Temporary reduction of fever"
        ],
        warnings: [
            "Allergy alert: Ibuprofen may cause a severe allergic reaction, especially in people allergic to aspirin",
            "Stomach bleeding warning: This product contains an NSAID, which may cause stomach bleeding",
            "Do not use if you have ever had an allergic reaction to any pain reliever/fever reducer",
            "Consult a doctor before use if you have problems or serious side effects from taking pain relievers or fever reducers"
        ],
        dosage: "Adults and children 12 years and older: Take 1 liquid gel every 4 to 6 hours while symptoms persist. Do not exceed 6 liquid gels in 24 hours."
    },
    {
        id: 3,
        name: "Aleve Pain Reliever",
        price: 8.99,
        image: "C:\\Users\\Aryan\\OneDrive\\Desktop\\Pharmico\\Aleve.jpg",
        rating: 4.7,
        category: "Pain Relief",
        description: "Provides up to 12 hours of pain relief with just one pill, ideal for back pain, muscle pain, and arthritis pain.",
        activeIngredient: "Naproxen Sodium 220mg",
        useCases: [
            "Temporary relief of minor aches and pains due to minor pain of arthritis, muscular aches, backache, menstrual cramps, headache, toothache, and the common cold",
            "Temporary reduction of fever"
        ],
        warnings: [
            "Allergy alert: Naproxen sodium may cause a severe allergic reaction, especially in people allergic to aspirin",
            "Stomach bleeding warning: This product contains an NSAID, which may cause severe stomach bleeding",
            "Do not use if you have ever had an allergic reaction to any other pain reliever/fever reducer",
            "Consult a doctor if under a doctor's care for any serious condition"
        ],
        dosage: "Adults and children 12 years and older: Take 1 tablet every 8 to 12 hours while symptoms last. For the first dose, you may take 2 tablets within the first hour. Do not exceed 3 tablets in 24 hours."
    },
    {
        id: 4,
        name: "Excedrin Migraine",
        price: 12.99,
        image: "C:\\Users\\Aryan\\OneDrive\\Desktop\\Pharmico\\excredrin-migraine-packshot.avif",
        rating: 4.8,
        category: "Pain Relief",
        description: "Clinically proven to relieve migraine pain and associated symptoms like sensitivity to light and sound.",
        activeIngredient: "Acetaminophen 250mg, Aspirin 250mg, Caffeine 65mg",
        useCases: [
            "For the relief of migraine headache pain and associated symptoms such as sensitivity to light and sound",
            "Provides relief at any stage of a migraine attack"
        ],
        warnings: [
            "Reye's syndrome warning: Children and teenagers who have or are recovering from chicken pox or flu-like symptoms should not use this product",
            "Allergy alert: Aspirin may cause a severe allergic reaction which may include hives, facial swelling, asthma, and shock",
            "Liver warning: This product contains acetaminophen. Severe liver damage may occur if you take more than the recommended dose",
            "Do not use if you have ever had an allergic reaction to acetaminophen, aspirin, or any other pain reliever/fever reducer"
        ],
        dosage: "Adults 18 years and older: Take 2 tablets with a full glass of water. If symptoms persist or worsen, ask a doctor. Do not take more than 2 tablets in 24 hours."
    },
    {
        id: 5,
        name: "Motrin IB",
        price: 7.49,
        image: "C:\\Users\\Aryan\\OneDrive\\Desktop\\Pharmico\\motrin-ib-ibuprofen-200mg.jpg",
        rating: 4.2,
        category: "Pain Relief",
        description: "Temporarily relieves minor aches and pains due to headaches, muscular aches, minor pain of arthritis, and more.",
        activeIngredient: "Ibuprofen 200mg",
        useCases: [
            "Temporary relief of minor aches and pains due to headaches, muscular aches, backache, minor pain of arthritis, toothache, and menstrual cramps",
            "Temporary reduction of fever"
        ],
        warnings: [
            "Allergy alert: Ibuprofen may cause a severe allergic reaction, especially in people allergic to aspirin",
            "Stomach bleeding warning: This product contains an NSAID, which may cause severe stomach bleeding",
            "Do not use if you have ever had an allergic reaction to any pain reliever/fever reducer",
            "Consult a doctor before use if you have high blood pressure, heart disease, or are taking a diuretic"
        ],
        dosage: "Adults and children 12 years and older: Take 1 tablet every 4 to 6 hours while symptoms persist. If pain or fever does not respond to 1 tablet, 2 tablets may be used. Do not exceed 6 tablets in 24 hours."
    },
    {
        id: 6,
        name: "Bayer Aspirin",
        price: 6.99,
        image: "C:\\Users\\Aryan\\OneDrive\\Desktop\\Pharmico\\Bayer_Low_Dose_Aspirin_300_Tabs_1200x1200.webp",
        rating: 4.0,
        category: "Pain Relief",
        description: "Provides temporary relief of pain and helps reduce the risk of recurrent heart attack and ischemic stroke.",
        activeIngredient: "Aspirin 325mg",
        useCases: [
            "Temporary relief of minor aches and pains due to headache, toothache, menstrual pain, minor pain of arthritis, muscle pain, and colds",
            "Temporary reduction of fever",
            "Helps reduce the risk of recurrent heart attack and ischemic stroke"
        ],
        warnings: [
            "Reye's syndrome warning: Children and teenagers who have or are recovering from chicken pox or flu-like symptoms should not use this product",
            "Allergy alert: Aspirin may cause a severe allergic reaction which may include hives, facial swelling, shock, and asthma",
            "Stomach bleeding warning: This product contains an NSAID, which may cause severe stomach bleeding",
            "Do not use if you have ever had an allergic reaction to aspirin or any other pain reliever/fever reducer"
        ],
        dosage: "Adults: Take 1 to 2 tablets every 4 hours, as needed, up to 12 tablets in 24 hours, or as directed by a doctor."
    }
];

// DOM Elements (Caching for performance)
const productContainer = document.getElementById('product-container');
const cartModal = document.getElementById('cart-modal');
const productModal = document.getElementById('product-modal');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.getElementById('cart-count');
const productDetailContent = document.getElementById('product-detail-content');
const closeButtons = document.querySelectorAll('.close');
const cartIcon = document.querySelector('.cart-icon');
const checkoutButton = document.querySelector('.checkout-btn');
const categoryLinks = document.querySelectorAll('.category-nav ul li a');
const productHeading = document.querySelector('.products h2');
const searchForm = document.querySelector('.search-bar');

// Shopping cart list
let cart = [];

// --- Helper Functions ---

// Function to close modals
const closeModal = (modal) => {
    modal.style.display = 'none';
};

// Function to show modals
const showModal = (modal) => {
    modal.style.display = 'block';
};

// Generate star ratings not fully made yet
function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    let starsHTML = '';

    // Full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }

    // Half star
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }

    return starsHTML;
}

// Function to create and show confirmation message
function showAddToCartConfirmation() {
    const confirmation = document.createElement('div');
    confirmation.className = 'add-confirmation';
    confirmation.innerHTML = `<div class="confirmation-inner">Added to cart!</div>`;
    document.body.appendChild(confirmation);

    setTimeout(() => {
        confirmation.classList.add('show');
    }, 10);

    setTimeout(() => {
        confirmation.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(confirmation);
        }, 300);
    }, 2000);
}

//Cart Manipulation Functions

// Add to cart handler
function addToCartHandler(event) {
    const productId = parseInt(event.target.getAttribute('data-id'), 10); // Always specify radix
    const product = products.find(p => p.id === productId);

    if (!product) {
        console.error(`Product with ID ${productId} not found!`);  // Basic error handling
        return;
    }

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    updateCartCount();
    showAddToCartConfirmation();
}

// Update cart count display
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalItems;
}

// Update cart display
function updateCartDisplay() {
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">Your cart is empty</p>';
        cartTotalElement.textContent = '0.00';
        return;
    }

    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-top">
                    <h3>${item.name}</h3>
                    <span class="cart-item-price">₹ ${itemTotal.toFixed(2)}</span>
                </div>
                <!-- Rest of HTML remains the same -->
            </div>
        `;

        cartItemsContainer.appendChild(cartItemElement);
    });

    cartTotalElement.textContent = total.toFixed(2);
    
    // Keep the rest of this function the same

    // Event listeners for cart item controls (Delegation can be more efficient for dynamic content)
    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('quantity-btn')) {
            if (event.target.classList.contains('decrease')) {
                decreaseQuantity(event);
            } else if (event.target.classList.contains('increase')) {
                increaseQuantity(event);
            }
        } else if (event.target.classList.contains('remove-btn')) {
            removeFromCart(event);
        }
    });
}

// Increase item quantity
function increaseQuantity(event) {
    const productId = parseInt(event.target.getAttribute('data-id'), 10);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
        updateCartDisplay();
        updateCartCount();
    }
}

// Decrease item quantity
function decreaseQuantity(event) {
    const productId = parseInt(event.target.getAttribute('data-id'), 10);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity -= 1;

        if (cartItem.quantity <= 0) {
            removeFromCart(event);
            return;
        }

        updateCartDisplay();
        updateCartCount();
    }
}

// Remove item from cart
function removeFromCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'), 10);
    cart = cart.filter(item => item.id !== productId);

    updateCartDisplay();
    updateCartCount();
}

// --- Product Display Functions ---

// Render products
function renderProducts(productsToRender = products) {
    productContainer.innerHTML = '';

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-price">₹${product.price.toFixed(2)}</div>
                <div class="product-rating">
                    ${getStarRating(product.rating)}
                </div>
                <div class="product-buttons">
                    <button class="view-details" data-id="${product.id}">Details</button>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;

        productContainer.appendChild(productCard);
    });


    //  add to cart and view details
    productContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            addToCartHandler(event);
        } else if (event.target.classList.contains('view-details')) {
            viewProductDetails(event);
        }
    });
}

// product details
function viewProductDetails(event) {
    const productId = parseInt(event.target.getAttribute('data-id'), 10);
    const product = products.find(p => p.id === productId);

    if (!product) {
        console.error(`Product with ID ${productId} not found!`);
        return;
    }

    productDetailContent.innerHTML = `
        <div class="product-detail-container">
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-detail-info">
                <h2 class="product-detail-title">${product.name}</h2>
                <div class="product-detail-price">₹${product.price.toFixed(2)}</div>
                <div class="product-detail-rating">${getStarRating(product.rating)}</div>
                
                <div class="product-detail-description">
                    <p>${product.description}</p>
                </div>
                
                <div class="product-detail-section">
                    <h4>Active Ingredient</h4>
                    <p>${product.activeIngredient}</p>
                </div>
                
                <div class="product-detail-section">
                    <h4>Uses</h4>
                    <ul>
                        ${product.useCases.map(use => `<li>${use}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="product-detail-section">
                    <h4>Warnings</h4>
                    <ul>
                        ${product.warnings.map(warning => `<li>${warning}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="product-detail-section">
                    <h4>Dosage</h4>
                    <p>${product.dosage}</p>
                </div>
                
                <div class="product-detail-add">
                    <button class="add-to-detail-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        </div>
    `;

    showModal(productModal);

    // Add event listener to add to cart button in details
    const addToDetailCartButton = productDetailContent.querySelector('.add-to-detail-cart');
    if (addToDetailCartButton) {
        addToDetailCartButton.addEventListener('click', (e) => {
            addToCartHandler(e);
            closeModal(productModal);
        });
    }
}

//Initialization and Event Listeners
const style = document.createElement('style');
style.textContent = `
    .add-confirmation {
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background-color: var(--accent-color);
        color: white;
        padding: 12px 25px;
        border-radius: 30px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        opacity: 0;
        transition: transform 0.3s, opacity 0.3s;
    }
    
    .add-confirmation.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
    }
    
    .empty-cart-message {
        text-align: center;
        padding: 20px;
        color: #666;
    }
`;
document.head.appendChild(style);

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();

    // Close buttons 
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            closeModal(cartModal);
            closeModal(productModal);
        });
    });

    // Cart icon 
    cartIcon.addEventListener('click', () => {
        updateCartDisplay();
        showModal(cartModal);
    });

    // Close modals when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            closeModal(cartModal);
        }
        if (event.target === productModal) {
            closeModal(productModal);
        }
    });

    // Payment handling
    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Thank you for your order! This is a demo, so no actual payment will be processed.');
            cart = [];
            updateCartDisplay();
            updateCartCount();
            closeModal(cartModal);
        }
    });

    //Category ongoing work
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
    
            // Remove active class from all links
            categoryLinks.forEach(l => {
                l.classList.remove('active');
            });
    
            // Add active class to clicked link
            e.target.classList.add('active');
    
            // Get the selected category
            const selectedCategory = e.target.textContent;
            
            // Update heading
            productHeading.textContent = selectedCategory + " Medications";
    
            // Filter products by category (if "All" is selected, show all products)
            if (selectedCategory === "All") {
                renderProducts(products);
            } else {
                const filteredProducts = products.filter(product => product.category === selectedCategory);
                renderProducts(filteredProducts);
            }
        });
    });
    // Search bar functionality in progress
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = searchForm.querySelector('input').value.trim().toLowerCase();

        if (searchTerm) {
            alert(`In a real implementation, this would search for "${searchTerm}"`);
        }
    });
});