let cart = [];

function addToCart(id, name, price, quantity) {
    let product = {
        id: id,
        name: name,
        price: price,
        quantity: quantity
    };
    cart.push(product);
}

function removeFromCart(productId) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === productId) {
            cart.splice(i, 1); 
            console.log("Removed product with ID:", productId);
            return;
        }
    }
    console.log("Product not found with ID:", productId);
}


function displayProducts() {
    for (let i = 0; i < cart.length; i++) {
        console.log(`Product Id: ${cart[i].id}, Name: ${cart[i].name}, Price: ${cart[i].price}, Qty: ${cart[i].quantity}`);
    }
    
    let total = calculateTotal();
    console.log(`Total charge: ${total}`);
    
    let n = parseInt(prompt("Enter product ID you want to remove:"));
    
    if (!isNaN(n)) {
        removeFromCart(n);
    }
}



function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}


// Example
addToCart(1, "Laptop", 50000, 1);
addToCart(2, "Phone", 20000, 2);
addToCart(3, "Headphones", 2000, 3);

displayProducts();
