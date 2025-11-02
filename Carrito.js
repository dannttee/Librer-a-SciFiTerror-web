const MAX_CANTIDAD = 99; // Máximo unidades por producto
let descuentoAplicado = 0; // Porcentaje descuento actual, 0 si no hay

const cupones = {
  "SCI10": 0.10,   // 10% de descuento
  "TERROR20": 0.20, // 20% de descuento
  "OFERTA5": 0.05  // 5% de descuento
};

const imagenPathPrefix = "img/";

function obtenerCarrito() {
  const carritoJSON = localStorage.getItem("carrito");
  return carritoJSON ? JSON.parse(carritoJSON) : [];
}

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function actualizarContador() {
  const carrito = obtenerCarrito();
  const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const cartCountElements = document.querySelectorAll("#cart-count");
  cartCountElements.forEach(span => {
    span.textContent = totalUnidades;
  });
}

function calcularTotal() {
  const carrito = obtenerCarrito();
  return carrito.reduce((acc, item) => acc + item.cantidad * item.precio, 0);
}

function mostrarCarrito() {
  const lista = document.getElementById("carrito-lista");
  const carrito = obtenerCarrito();
  lista.innerHTML = "";

  if (carrito.length === 0) {
  lista.innerHTML = `
    <p style="
      text-align:center; 
      color:#777; 
      font-size:1.1rem; 
      margin: 0;
      padding: 40px 0;
    ">El carrito está vacío.</p>
  `;
  document.getElementById('carrito-total').textContent = '$0';
  listaContainer.style.borderRight = 'none';
  listaContainer.style.overflowY = 'visible';
  listaContainer.style.height = 'auto';             
  listaContainer.style.minHeight = 'auto';        
}


  carrito.forEach((item) => {
    const div = document.createElement("div");
    div.className = "d-flex justify-content-between align-items-center mb-3";

    div.innerHTML = `
      <div class="img-container">
        <img class="carrito-img" src="../Entrega_pagina_web/${item.imagen || item.img_delantera}" alt="Portada de ${item.nombre}" />
      </div>
      <div class="flex-grow-1 ms-3">
        <h5>${item.nombre}</h5>
        <p class="mb-1">Cantidad: ${item.cantidad}</p>
        <p class="mb-0">Precio unitario: $${item.precio.toLocaleString()}</p>
      </div>
      <div class="carrito-btns-group">
        <button class="carrito-btn" aria-label="Disminuir cantidad" data-id="${item.id}" data-action="disminuir">-</button>
        <button class="carrito-btn" aria-label="Aumentar cantidad" data-id="${item.id}" data-action="aumentar">+</button>
        <button class="btn btn-danger btn-sm ms-3" aria-label="Eliminar producto" data-id="${item.id}" data-action="eliminar">Eliminar</button>
      </div>
    `;

    lista.appendChild(div);
  });

  // Mostrar total con o sin descuento aplicado
  actualizarTotalConDescuento(descuentoAplicado);
  actualizarContador();
  asignarEventosBotones();
}

function asignarEventosBotones() {
  document.querySelectorAll(".carrito-btn").forEach((boton) => {
    boton.addEventListener("click", () => {
      const id = boton.getAttribute("data-id");
      const action = boton.getAttribute("data-action");
      manejarAccionBoton(id, action);
    });
  });

  document.querySelectorAll(".btn-danger").forEach((boton) => {
    boton.addEventListener("click", () => {
      const id = boton.getAttribute("data-id");
      manejarAccionBoton(id, "eliminar");
    });
  });
}

function manejarAccionBoton(id, action) {
  let carrito = obtenerCarrito();
  const index = carrito.findIndex((item) => item.id === id);
  if (index === -1) return;

  if (action === "aumentar") {
    if (carrito[index].cantidad < MAX_CANTIDAD) {
      carrito[index].cantidad++;
    } else {
      alert(`No se pueden añadir más de ${MAX_CANTIDAD} unidades por producto.`);
    }
  } else if (action === "disminuir") {
    if (carrito[index].cantidad > 1) {
      carrito[index].cantidad--;
    }
  } else if (action === "eliminar") {
    carrito.splice(index, 1);
  }

  guardarCarrito(carrito);
  mostrarCarrito();
}

function aplicarCupon(codigo) {
  codigo = codigo.toUpperCase().trim();

  if (carrito.length === 0) {
    document.getElementById('cart-items-container').classList.add('vacio');
  } else {
    document.getElementById('cart-items-container').classList.remove('vacio');
  }

  if (cupones.hasOwnProperty(codigo)) {
    alert(`Cupón aplicado! Tienes un ${cupones[codigo] * 100}% de descuento.`);
    return cupones[codigo];
  } else {
    alert("Código de descuento inválido o no reconocido.");
    return 0;
  }
}

function actualizarTotalConDescuento(porcentajeDescuento) {
  const totalOriginal = calcularTotal();
  const totalConDescuento = totalOriginal * (1 - porcentajeDescuento);
  const totalElem = document.getElementById("carrito-total");
  if (totalElem) {
    totalElem.textContent = `$${totalConDescuento.toLocaleString(undefined, { minimumFractionDigits: 0 })}`;
  }
  descuentoAplicado = porcentajeDescuento;
}

// Control del botón aplicar cupón
const botonAplicarCupon = document.getElementById("apply-coupon");
if (botonAplicarCupon) {
  botonAplicarCupon.addEventListener("click", () => {
    const codigo = document.getElementById("coupon-code").value;
    const descuento = aplicarCupon(codigo);
    actualizarTotalConDescuento(descuento);
  });
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  mostrarCarrito();
  actualizarContador(); // Para que el contador siempre esté actualizado al cargar la página
});

const carritoContainer = document.getElementById('cart-items-container');

