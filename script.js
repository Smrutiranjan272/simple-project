let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productElement = this.parentElement;
        const name = productElement.getAttribute('data-name');
        const price = parseFloat(productElement.getAttribute('data-price'));
        
        // Add product to cart
        cart.push({ name, price });
        updateCart();
        
        // Disable button
        this.disabled = true;
    });
});

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const totalCostElement = document.getElementById('total-cost');
    const cartItemsElement = document.getElementById('cart-items');

    cartCount.innerText = cart.length;

    // Calculate total cost
    const totalCost = cart.reduce((sum, item) => sum + item.price, 0);
    totalCostElement.innerText = totalCost.toFixed(2);

    // Update cart items display
    cartItemsElement.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerText = `${item.name} - $${item.price}`;
        cartItemsElement.appendChild(itemElement);
    });
}
