document.addEventListener('DOMContentLoaded', async () => {
  const products = await loadProducts();
  renderProducts(products);
});

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(id);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Producto agregado al carrito');
}