let cart = [];
let carDetails = {
    car1: {
        name: "Skoda Kodiaq",
        description: "It's a great vehicle with excellent performance.",
        price: "$30,000"
    },
    car2: {
        name: "Mahindra BE 6",
        description: "Mahindra BE 6 offers amazing fuel efficiency and a sleek design.",
        price: "$25,000"
    },
    car3: {
        name: "Mahindra XUV700",
        description: "Mahindra XUV700 is perfect for families with spacious interiors and advanced features.",
        price: "$35,000"
    },
    car4: {
        name: "Maruti Suzuki Fronx",
        description: "Maruti Suzuki Fronx is a luxury sedan with advanced technology and smooth performance.",
        price: "$50,000"
    },
    car5: {
        name: "Mahindra Thar Roxx",
        description: "Mahindra Thar Roxx is a sporty coupe with an aggressive design and powerful engine.",
        price: "$45,000"
    },
    car6: {
        name: "Tata Tiago",
        description: "Tata Tiago is a compact SUV with excellent safety features and fuel economy.",
        price: "$40,000"
    }
};

let cartButton = document.getElementById('cartButton');
let cartPopup = document.getElementById('cartPopup');
let cartItems = document.getElementById('cartItems');
let addToCartBtn = document.getElementById('addToCartBtn');

function showCarDetails(carId) {
    let carInfo = carDetails[carId];
    document.getElementById('car-name').innerText = `Name: ${carInfo.name}`;
    document.getElementById('car-description').innerText = `Description: ${carInfo.description}`;
    document.getElementById('car-price').innerText = `Price: ${carInfo.price}`;
    document.getElementById('car-details').style.display = 'block';
    addToCartBtn.dataset.carId = carId;  // Store carId in the button
    addToCartBtn.classList.remove('added');  // Enable the button if it's not in the cart
    addToCartBtn.innerText = "Add to Cart";
}

function addToCart(carId) {
    if (!cart.includes(carId)) {
        cart.push(carId);
        updateCart();
        updateAddToCartButtons();
        if (addToCartBtn.dataset.carId === carId) {
            addToCartBtn.innerText = "Added to Cart";
            addToCartBtn.classList.add('added');
        }
    }
}

function updateCart() {
    cartButton.innerText = `Cart (${cart.length})`; // Update cart button
    let cartContent = cart.map(carId => {
        return `<p>${carDetails[carId].name} - ${carDetails[carId].price}</p>`;
    }).join('');
    cartItems.innerHTML = cartContent;
}

function toggleCart() {
    cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
}

function clearCart() {
    cart = [];
    updateCart();
    updateAddToCartButtons();
    toggleCart();
}

function checkout() {
    if (cart.length > 0) {
        alert("Proceeding to checkout...");
    } else {
        alert("Your cart is empty.");
    }
}

function updateAddToCartButtons() {
    let buttons = document.querySelectorAll('.add-to-cart-btn');
    buttons.forEach(button => {
        let carId = button.dataset.carId;
        if (cart.includes(carId)) {
            button.innerText = "Added to Cart";
            button.disabled = true;
            button.classList.add('added');
        } else {
            button.innerText = "Add to Cart";
            button.disabled = false;
            button.classList.remove('added');
        }
    });
}

// Add event listeners to all add to cart buttons on page load
document.addEventListener('DOMContentLoaded', () => {
    let buttons = document.querySelectorAll('.add-to-cart-btn');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent triggering other click events
            let carId = button.dataset.carId;
            addToCart(carId);
        });
    });
    updateAddToCartButtons();
});
