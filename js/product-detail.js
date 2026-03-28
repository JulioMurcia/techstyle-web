async function loadProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id'));

  const response = await fetch('data/products.json');
  const products = await response.json();

  const product = products.find(p => p.id === productId);

  const container = document.getElementById('product-detail');

  if (!product) {
    container.innerHTML = "<h2>Producto no encontrado</h2>";
    return;
  }

  container.innerHTML = `
    <div style="display:flex; gap:30px;">
      <img src="${product.image}" width="300">
      
      <div>
        <h2>${product.name}</h2>
        <p><strong>Precio:</strong> $${product.price}</p>
        <p>Lorem ipsum dolor sit amet, producto de alta calidad TechStyle.</p>
        
        <button onclick="addToCart(${product.id})">
          Agregar al carrito
        </button>
      </div>
    </div>
  `;
}

loadProductDetail();