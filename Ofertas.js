// ===== SOLO LOS 3 PRODUCTOS EN OFERTA =====
const productosEnOferta = [
  {
    id: 'dune',
    nombre: 'Dune',
    autor: 'Frank Herbert',
    categoria: 'Ciencia ficción',
    precioOriginal: 12990,
    precioOferta: 9092,
    descuento: 30,
    imagen: 'DUNE.jpg',
    stock: true,
    etiqueta: 'OFERTA'  // ← AGREGADO
  },
  {
    id: '1984',
    nombre: '1984',
    autor: 'George Orwell',
    categoria: 'Novelas',
    precioOriginal: 10990,
    precioOferta: 7692,
    descuento: 30,
    imagen: '1984.jpg',
    stock: true,
    etiqueta: 'OFERTA'  // ← AGREGADO
  },
  {
    id: 'it',
    nombre: 'It',
    autor: 'Stephen King',
    categoria: 'Terror',
    precioOriginal: 11990,
    precioOferta: 7793,
    descuento: 35,
    imagen: 'IT.jpg',
    stock: true,
    etiqueta: 'OFERTA'  // ← AGREGADO
  }
];

// ===== ACTUALIZAR CONTADOR DEL CARRITO =====
function actualizarContador() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const cantidadTotal = carrito.reduce((total, p) => total + p.cantidad, 0);
  const contadorElement = document.getElementById('cart-count');
  if (contadorElement) {
    contadorElement.textContent = cantidadTotal;
  }
}

// ===== RENDERIZAR LOS 3 PRODUCTOS EN OFERTA =====
function renderizarOfertas() {
  const grid = document.getElementById('ofertas-grid');
  
  if (!grid) return;
  
  const productosHTML = productosEnOferta.map(producto => `
    <div class="producto-card">
      <div class="producto-imagen">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        ${producto.etiqueta ? `<span class="oferta-badge">${producto.etiqueta}</span>` : ''}
      </div>
      <div class="producto-info">
        <h3>${producto.nombre}</h3>
        <p class="autor">Por: ${producto.autor}</p>
        <p class="categoria">${producto.categoria}</p>
        <div class="precios">
          <span class="precio-oferta">$${producto.precioOferta.toLocaleString()}</span>
          <span class="precio-original">$${producto.precioOriginal.toLocaleString()}</span>
        </div>
        <div class="descuento-tag">
          <span class="descuento-porcentaje">-${producto.descuento}%</span>
        </div>
        <p class="stock disponible">✅ Stock Disponible</p>
        <button 
          class="btn-agregar" 
          onclick="agregarAlCarrito('${producto.id}')"
        >
          🛒 Añadir al Carrito
        </button>
      </div>
    </div>
  `).join('');

  grid.innerHTML = productosHTML;
}

// ===== AGREGAR PRODUCTO AL CARRITO =====
function agregarAlCarrito(productoId) {
  const producto = productosEnOferta.find(p => p.id === productoId);
  
  if (!producto) {
    alert('Producto no encontrado');
    return;
  }

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
  const productoExistente = carrito.find(item => item.id === productoId);
  
  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      autor: producto.autor,
      precio: producto.precioOferta,
      precioOriginal: producto.precioOriginal,
      cantidad: 1,
      imagen: producto.imagen,
      descuento: producto.descuento
    });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContador();
  
  alert(`✅ ${producto.nombre} añadido al carrito!`);
}

// ===== CARGAR AL DOM =====
document.addEventListener('DOMContentLoaded', () => {
  renderizarOfertas();
  actualizarContador();
});
