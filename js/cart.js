async function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const response = await fetch('data/products.json');
  const products = await response.json();

  const container = document.getElementById('cart-items');

  cart.forEach(id => {
    const product = products.find(p => p.id === id);

    const div = document.createElement('div');
    div.innerHTML = `${product.name} - $${product.price}`;
    container.appendChild(div);
  });
}

loadCart();