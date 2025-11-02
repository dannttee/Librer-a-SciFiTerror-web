window.addEventListener('DOMContentLoaded', function() {
  const compras = JSON.parse(localStorage.getItem("compras")) || [];
  
  if (compras.length === 0) {
    window.location.href = "Index.html";
    return;
  }
  
  const ultimaCompra = compras[compras.length - 1];
  mostrarDetalles(ultimaCompra);
});

function mostrarDetalles(compra) {
  document.getElementById('orderNumber').textContent = `Código orden: ORD#${compra.id}`;
  
  const [nombre, ...apellidos] = compra.cliente.split(' ');
  document.getElementById('clientName').textContent = nombre || 'N/A';
  document.getElementById('clientLastname').textContent = apellidos.join(' ') || 'N/A';
  document.getElementById('clientEmail').textContent = compra.email;
  
  document.getElementById('addressStreet').textContent = compra.direccion.calle || 'N/A';
  document.getElementById('addressApart').textContent = compra.direccion.departamento || 'N/A';
  document.getElementById('addressRegion').textContent = compra.direccion.region || 'N/A';
  document.getElementById('addressComuna').textContent = compra.direccion.comuna || 'N/A';
  document.getElementById('addressIndicaciones').textContent = compra.direccion.indicaciones || 'N/A';
  
  const productosHTML = compra.productos.map(p => `
    <tr>
      <td><img src="${p.imagen}" alt="${p.nombre}"></td>
      <td>${p.nombre}</td>
      <td>$ ${p.precio.toLocaleString()}</td>
      <td>${p.cantidad}</td>
      <td>$ ${(p.precio * p.cantidad).toLocaleString()}</td>
    </tr>
  `).join('');
  
  document.getElementById('productsTable').innerHTML = productosHTML;
  document.getElementById('totalAmount').textContent = `$ ${compra.total.toLocaleString()}`;
}

function irAlCarrito() {
  window.location.href = "Carrito.html";
}

function irAlInicio() {
  window.location.href = "Index.html";
}
