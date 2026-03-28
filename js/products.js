async function loadProducts() {
  const response = await fetch('data/products.json');
  const products = await response.json();
  return products;
}

function renderProducts(products) {
  const container = document.getElementById('product-list');
  container.innerHTML = '';

  products.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product');

    div.innerHTML = `
      <img src="${product.image}" width="150">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Agregar</button>
    `;

    container.appendChild(div);
  });
}