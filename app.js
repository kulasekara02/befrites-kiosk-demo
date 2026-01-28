// Menu Data - Befrites Restaurant
const menuData = {
    specials: {
        name: "Akcija (Special)",
        icon: "🔥",
        items: [
            { id: "sp1", name: "Vistas lielais kebabs + Fri + Mercite", nameEn: "Large Chicken Kebab Combo", price: 5.90, description: "Large chicken kebab + fries + sauce" }
        ]
    },
    kebabs: {
        name: "Kebabi",
        icon: "🌯",
        items: [
            { id: "k1", name: "Kebabs lavasa (Wrap)", nameEn: "Kebab Wrap", price: 4.80, comboPrice: 6.30, options: ["Vistas", "Liellopa", "Mix", "Falafela"] },
            { id: "k2", name: "Kebabs pitas maize", nameEn: "Kebab in Pita", price: 3.90, comboPrice: 5.40, options: ["Vistas", "Liellopa", "Mix", "Falafela"] },
            { id: "k3", name: "Kebabs arabu maize (L)", nameEn: "Arabic Bread Kebab Large", price: 4.90, comboPrice: 6.40, options: ["Vistas", "Liellopa", "Mix", "Falafela"] },
            { id: "k4", name: "Kebabs arabu maize (XL)", nameEn: "Arabic Bread Kebab XL Double", price: 6.20, comboPrice: 7.70, options: ["Vistas", "Liellopa", "Mix", "Falafela"] }
        ]
    },
    meat: {
        name: "Galas edieni",
        icon: "🍗",
        items: [
            { id: "m1", name: "BBQ sparnini", nameEn: "BBQ Wings", prices: { small: { price: 2.00, qty: "5 pcs" }, large: { price: 3.70, qty: "10 pcs" } } },
            { id: "m2", name: "Cili sparnini", nameEn: "Chili Wings", prices: { small: { price: 2.00, qty: "5 pcs" }, large: { price: 3.70, qty: "10 pcs" } } },
            { id: "m3", name: "Medus sparnini ar sezamu", nameEn: "Honey Sesame Wings", prices: { small: { price: 2.00, qty: "5 pcs" }, large: { price: 3.70, qty: "10 pcs" } } },
            { id: "m4", name: "Nageti", nameEn: "Nuggets", prices: { small: { price: 2.00, qty: "6 pcs" }, large: { price: 3.70, qty: "12 pcs" } } },
            { id: "m5", name: "Giross vistas", nameEn: "Chicken Gyros", prices: { small: { price: 2.00, qty: "130g" }, large: { price: 3.70, qty: "260g" } } },
            { id: "m6", name: "Giross liellopa", nameEn: "Beef Gyros", prices: { small: { price: 2.00, qty: "100g" }, large: { price: 3.70, qty: "200g" } } }
        ]
    },
    plates: {
        name: "Plates",
        icon: "🍽️",
        items: [
            { id: "p1", name: "BBQ Sparninu plate", nameEn: "BBQ Wings Plate", sizes: { S: 5.90, M: 8.00, L: 11.00, XL: 15.00 } },
            { id: "p2", name: "Nagetu plate", nameEn: "Nuggets Plate", sizes: { S: 5.90, M: 8.00, L: 11.00, XL: 15.00 } },
            { id: "p3", name: "Girosa plate", nameEn: "Gyros Plate", sizes: { S: 5.90, M: 8.00, L: 11.00, XL: 15.00 } },
            { id: "p4", name: "Falafela plate", nameEn: "Falafel Plate", sizes: { S: 5.90, M: 8.00, L: 11.00, XL: 15.00 } }
        ]
    },
    sides: {
        name: "Piedevas",
        icon: "🍟",
        items: [
            { id: "s1", name: "Fri mazie", nameEn: "Small Fries", price: 1.00 },
            { id: "s2", name: "Fri lielie", nameEn: "Large Fries", price: 1.60 },
            { id: "s3", name: "Falafel (4 pcs)", nameEn: "Falafel (4 pcs)", price: 1.70 },
            { id: "s4", name: "Sipolu gredzeni (5 pcs)", nameEn: "Onion Rings (5 pcs)", price: 2.00 },
            { id: "s5", name: "Mocarella pirkstini (5 pcs)", nameEn: "Mozzarella Sticks (5 pcs)", price: 2.50 },
            { id: "s6", name: "Philadelphia siera bumbinas (7 pcs)", nameEn: "Philly Cheese Balls (7 pcs)", price: 2.50 },
            { id: "s7", name: "Cili cedara nageti (5 pcs)", nameEn: "Chili Cheddar Nuggets (5 pcs)", price: 2.70 },
            { id: "s8", name: "Kalmaru gredzeni (8 pcs)", nameEn: "Calamari Rings (8 pcs)", price: 2.70 },
            { id: "s9", name: "Pitas maize", nameEn: "Pita Bread", price: 0.75 },
            { id: "s10", name: "Mercite maza", nameEn: "Small Sauce", price: 0.50 },
            { id: "s11", name: "Mercite liela", nameEn: "Large Sauce", price: 0.80 }
        ]
    },
    drinks: {
        name: "Dzerieni",
        icon: "🥤",
        items: [
            { id: "d1", name: "Teja (melna/auglu)", nameEn: "Tea (black/fruit)", price: 0.50 },
            { id: "d2", name: "Kafija", nameEn: "Coffee", price: 1.00 },
            { id: "d3", name: "Udens 0.5L", nameEn: "Water 0.5L", price: 0.75 },
            { id: "d4", name: "Cola/Fanta/Sprite 0.33L", nameEn: "Cola/Fanta/Sprite Can", price: 1.00 },
            { id: "d5", name: "Cola/Fanta/Sprite 0.5L", nameEn: "Cola/Fanta/Sprite Bottle", price: 1.40 },
            { id: "d6", name: "Fuze Tea", nameEn: "Fuze Tea", price: 1.40 },
            { id: "d7", name: "Monster Energy", nameEn: "Monster Energy", price: 2.00 },
            { id: "d8", name: "Corona Extra", nameEn: "Corona Extra Beer", price: 2.20 }
        ]
    }
};

const meatOptions = {
    "Vistas": "Chicken",
    "Liellopa": "Beef",
    "Mix": "Mix",
    "Falafela": "Falafel"
};

// App State
let cart = [];
let activeCategory = 'specials';
let currentModalItem = null;
let modalSelectedOptions = {
    meatOption: null,
    size: null,
    isCombo: false
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderMenuItems();
    updateClock();
    setInterval(updateClock, 1000);
});

// Clock
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('lv-LV', { hour: '2-digit', minute: '2-digit' });
    const date = now.toLocaleDateString('lv-LV', { day: '2-digit', month: '2-digit', year: 'numeric' });

    document.getElementById('current-time').textContent = time;
    document.getElementById('current-date').textContent = date;
}

// Render Categories
function renderCategories() {
    const container = document.getElementById('category-tabs');
    container.innerHTML = '';

    Object.entries(menuData).forEach(([key, category]) => {
        const btn = document.createElement('button');
        btn.className = `category-tab ${key === activeCategory ? 'active' : ''}`;
        btn.innerHTML = `<span>${category.icon}</span> ${category.name}`;
        btn.onclick = () => selectCategory(key);
        container.appendChild(btn);
    });
}

function selectCategory(key) {
    activeCategory = key;
    renderCategories();
    renderMenuItems();
}

// Render Menu Items
function renderMenuItems() {
    const container = document.getElementById('menu-grid');
    container.innerHTML = '';

    const items = menuData[activeCategory].items;

    items.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.style.animationDelay = `${index * 0.05}s`;

        let priceHtml = '';
        if (item.price && !item.sizes && !item.prices) {
            priceHtml = `<span class="price">${item.price.toFixed(2)} EUR</span>`;
            if (item.comboPrice) {
                priceHtml += `<span class="combo-price">Combo: ${item.comboPrice.toFixed(2)} EUR</span>`;
            }
        } else if (item.sizes) {
            const minPrice = Math.min(...Object.values(item.sizes));
            priceHtml = `<span class="price-range">from ${minPrice.toFixed(2)} EUR</span>`;
        } else if (item.prices) {
            priceHtml = `<span class="price-range">${item.prices.small.price.toFixed(2)} - ${item.prices.large.price.toFixed(2)} EUR</span>`;
        }

        div.innerHTML = `
            <h3>${item.name}</h3>
            <p class="name-en">${item.nameEn}</p>
            ${item.description ? `<p class="description">${item.description}</p>` : ''}
            <div class="menu-item-footer">
                <div>
                    ${priceHtml}
                </div>
                <button class="add-item-btn" onclick="handleAddItem('${item.id}')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
            </div>
        `;

        container.appendChild(div);
    });
}

// Handle Add Item
function handleAddItem(itemId) {
    const item = findItem(itemId);
    if (!item) return;

    if (item.options || item.sizes || item.prices || item.comboPrice) {
        openModal(item);
    } else {
        addToCart(item, { finalPrice: item.price });
    }
}

function findItem(itemId) {
    for (const category of Object.values(menuData)) {
        const item = category.items.find(i => i.id === itemId);
        if (item) return item;
    }
    return null;
}

// Modal Functions
function openModal(item) {
    currentModalItem = item;
    modalSelectedOptions = {
        meatOption: item.options ? item.options[0] : null,
        size: item.sizes ? 'M' : (item.prices ? 'small' : null),
        isCombo: false
    };

    document.getElementById('modal-title').textContent = item.name;
    document.getElementById('modal-subtitle').textContent = item.nameEn;

    renderModalOptions();
    updateModalPrice();

    document.getElementById('item-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('item-modal').classList.remove('active');
    currentModalItem = null;
}

function renderModalOptions() {
    const container = document.getElementById('modal-options');
    container.innerHTML = '';

    const item = currentModalItem;

    // Meat options
    if (item.options) {
        const div = document.createElement('div');
        div.className = 'option-group';
        div.innerHTML = `
            <p class="option-group-label">Choose meat / Izvelieties galu:</p>
            <div class="option-grid">
                ${item.options.map(opt => `
                    <button class="option-btn ${modalSelectedOptions.meatOption === opt ? 'selected' : ''}"
                            onclick="selectMeatOption('${opt}')">
                        <span class="option-name">${opt}</span>
                        <span class="option-detail">${meatOptions[opt]}</span>
                    </button>
                `).join('')}
            </div>
        `;
        container.appendChild(div);
    }

    // Size options (plates)
    if (item.sizes) {
        const div = document.createElement('div');
        div.className = 'option-group';
        div.innerHTML = `
            <p class="option-group-label">Size / Izmers:</p>
            <div class="option-grid sizes">
                ${Object.entries(item.sizes).map(([size, price]) => `
                    <button class="option-btn ${modalSelectedOptions.size === size ? 'selected' : ''}"
                            onclick="selectSize('${size}')">
                        <span class="option-name">${size}</span>
                        <span class="option-price">${price.toFixed(2)} EUR</span>
                    </button>
                `).join('')}
            </div>
        `;
        container.appendChild(div);
    }

    // Portion options (meat dishes)
    if (item.prices) {
        const div = document.createElement('div');
        div.className = 'option-group';
        div.innerHTML = `
            <p class="option-group-label">Portion / Porcija:</p>
            <div class="option-grid">
                ${Object.entries(item.prices).map(([size, data]) => `
                    <button class="option-btn ${modalSelectedOptions.size === size ? 'selected' : ''}"
                            onclick="selectSize('${size}')">
                        <span class="option-name">${size === 'small' ? 'Small / Maza' : 'Large / Liela'}</span>
                        <span class="option-detail">${data.qty}</span>
                        <span class="option-price">${data.price.toFixed(2)} EUR</span>
                    </button>
                `).join('')}
            </div>
        `;
        container.appendChild(div);
    }

    // Combo option
    if (item.comboPrice) {
        const div = document.createElement('div');
        div.className = 'option-group';
        div.innerHTML = `
            <button class="combo-option ${modalSelectedOptions.isCombo ? 'selected' : ''}"
                    onclick="toggleCombo()">
                <div class="combo-info">
                    <span class="combo-name">Combo / Komplekts</span>
                    <span class="combo-detail">+ Fries + Sauce (Fri + Mercite)</span>
                </div>
                <span class="combo-price">${item.comboPrice.toFixed(2)} EUR</span>
            </button>
        `;
        container.appendChild(div);
    }
}

function selectMeatOption(opt) {
    modalSelectedOptions.meatOption = opt;
    renderModalOptions();
    updateModalPrice();
}

function selectSize(size) {
    modalSelectedOptions.size = size;
    renderModalOptions();
    updateModalPrice();
}

function toggleCombo() {
    modalSelectedOptions.isCombo = !modalSelectedOptions.isCombo;
    renderModalOptions();
    updateModalPrice();
}

function updateModalPrice() {
    const item = currentModalItem;
    let price = 0;

    if (item.sizes) {
        price = item.sizes[modalSelectedOptions.size];
    } else if (item.prices) {
        price = item.prices[modalSelectedOptions.size].price;
    } else if (item.comboPrice && modalSelectedOptions.isCombo) {
        price = item.comboPrice;
    } else {
        price = item.price;
    }

    document.getElementById('modal-price').textContent = `${price.toFixed(2)} EUR`;
}

function addFromModal() {
    const item = currentModalItem;
    let finalPrice = 0;

    if (item.sizes) {
        finalPrice = item.sizes[modalSelectedOptions.size];
    } else if (item.prices) {
        finalPrice = item.prices[modalSelectedOptions.size].price;
    } else if (item.comboPrice && modalSelectedOptions.isCombo) {
        finalPrice = item.comboPrice;
    } else {
        finalPrice = item.price;
    }

    addToCart(item, {
        meatOption: modalSelectedOptions.meatOption,
        size: modalSelectedOptions.size,
        isCombo: modalSelectedOptions.isCombo,
        finalPrice: finalPrice
    });

    closeModal();
}

// Cart Functions
function addToCart(item, options = {}) {
    const cartItem = {
        ...item,
        cartId: Date.now() + Math.random(),
        quantity: 1,
        selectedOption: options.meatOption || null,
        selectedSize: options.size || null,
        isCombo: options.isCombo || false,
        finalPrice: options.finalPrice || item.price
    };

    cart.push(cartItem);
    updateCartUI();

    // Show feedback
    showAddedFeedback();
}

function showAddedFeedback() {
    const fab = document.getElementById('cart-fab');
    fab.style.transform = 'scale(1.1)';
    setTimeout(() => {
        fab.style.transform = 'scale(1)';
    }, 200);
}

function updateQuantity(cartId, delta) {
    cart = cart.map(item => {
        if (item.cartId === cartId) {
            const newQty = Math.max(0, item.quantity + delta);
            return newQty === 0 ? null : { ...item, quantity: newQty };
        }
        return item;
    }).filter(Boolean);

    updateCartUI();
    renderCartItems();
}

function removeItem(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    updateCartUI();
    renderCartItems();
}

function getTotal() {
    return cart.reduce((sum, item) => sum + (item.finalPrice * item.quantity), 0);
}

function getItemCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartUI() {
    const count = getItemCount();
    const total = getTotal();

    document.getElementById('cart-count').textContent = count;
    document.getElementById('cart-total').textContent = `${total.toFixed(2)} EUR`;
    document.getElementById('cart-badge').textContent = count;
    document.getElementById('total-amount').textContent = `${total.toFixed(2)} EUR`;

    // Show/hide cart footer
    const footer = document.getElementById('cart-footer');
    footer.style.display = cart.length > 0 ? 'block' : 'none';
}

// Screen Navigation
function showCart() {
    document.getElementById('menu-screen').classList.remove('active');
    document.getElementById('cart-screen').classList.add('active');
    renderCartItems();
}

function hideCart() {
    document.getElementById('cart-screen').classList.remove('active');
    document.getElementById('menu-screen').classList.add('active');
}

function renderCartItems() {
    const container = document.getElementById('cart-items');

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <p>Your cart is empty</p>
                <p style="font-size: 0.875rem; margin-top: 0.5rem;">Jusu grozs ir tukss</p>
            </div>
        `;
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-header">
                <div>
                    <h4>${item.name}</h4>
                    <p class="name-en">${item.nameEn}</p>
                    <div class="cart-item-tags">
                        ${item.selectedOption ? `<span class="tag meat">${item.selectedOption}</span>` : ''}
                        ${item.selectedSize ? `<span class="tag size">${item.selectedSize}</span>` : ''}
                        ${item.isCombo ? `<span class="tag combo">Combo</span>` : ''}
                    </div>
                </div>
                <button class="remove-btn" onclick="removeItem(${item.cartId})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </div>
            <div class="cart-item-footer">
                <div class="quantity-control">
                    <button class="qty-btn" onclick="updateQuantity(${item.cartId}, -1)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.cartId}, 1)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                </div>
                <span class="cart-item-price">${(item.finalPrice * item.quantity).toFixed(2)} EUR</span>
            </div>
        </div>
    `).join('');
}

// Order Functions
function placeOrder() {
    const orderNum = generateOrderNumber();
    document.getElementById('order-number').textContent = `#${orderNum}`;

    const now = new Date();
    const time = now.toLocaleTimeString('lv-LV', { hour: '2-digit', minute: '2-digit' });
    const date = now.toLocaleDateString('lv-LV', { day: '2-digit', month: '2-digit', year: 'numeric' });
    document.getElementById('order-time').textContent = `${time} | ${date}`;

    // Render receipt items
    document.getElementById('receipt-items').innerHTML = cart.map(item => `
        <div class="receipt-item">
            <span>
                ${item.quantity}x ${item.name}
                ${item.selectedOption ? `(${item.selectedOption})` : ''}
                ${item.selectedSize ? `[${item.selectedSize}]` : ''}
                ${item.isCombo ? '+Combo' : ''}
            </span>
            <span>${(item.finalPrice * item.quantity).toFixed(2)} EUR</span>
        </div>
    `).join('');

    document.getElementById('receipt-total-amount').textContent = `${getTotal().toFixed(2)} EUR`;

    // Show receipt screen
    document.getElementById('cart-screen').classList.remove('active');
    document.getElementById('receipt-screen').classList.add('active');
}

function generateOrderNumber() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const mins = now.getMinutes().toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 900 + 100);
    return `${hours}${mins}-${random}`;
}

function startNewOrder() {
    cart = [];
    activeCategory = 'specials';

    document.getElementById('receipt-screen').classList.remove('active');
    document.getElementById('menu-screen').classList.add('active');

    renderCategories();
    renderMenuItems();
    updateCartUI();
}

// Close modal on outside click
document.getElementById('item-modal').addEventListener('click', (e) => {
    if (e.target.id === 'item-modal') {
        closeModal();
    }
});
