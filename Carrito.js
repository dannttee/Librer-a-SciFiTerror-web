<<<<<<< HEAD
// ===== CONSTANTES =====
const MAX_CANTIDAD = 99;
let descuentoAplicado = 0;

// ===== RUTA DE IMÁGENES =====
const IMG_PATH = './';

// ===== CUPONES VÁLIDOS =====
const cupones = {
  "SCI10": 0.10,
  "TERROR20": 0.20,
  "OFERTA5": 0.05
};

// ===== PRODUCTOS (8 LIBROS) =====
const productos = [
  {
    id: 'dune',
    nombre: 'Dune',
    autor: 'Frank Herbert',
    precio: 9092,
    categoria: "Ciencia ficción",
    img_delantera: 'DUNE.jpg',
  },
  {
    id: 'frankenstein',
    nombre: 'Frankenstein',
    autor: 'Mary Shelley',
    precio: 10500,
    categoria: "Terror",
    img_delantera: 'FRANKENSTEIN.jpg',
  },
  {
    id: 'it',
    nombre: 'It',
    autor: 'Stephen King',
    precio: 7793,
    categoria: "Terror",
    img_delantera: 'IT.jpg',
  },
  {
    id: 'neuromante',
    nombre: 'Neuromante nº 01',
    autor: 'William Gibson',
    precio: 13990,
    categoria: "Ciencia ficción",
    img_delantera: 'NEUROMANTE.jpg',
  },
  {
    id: 'problema-tres-cuerpos',
    nombre: 'El problema de los tres cuerpos',
    autor: 'Cixin Liu',
    precio: 14990,
    categoria: "Ciencia ficción",
    img_delantera: 'El problema de los tres cuerpos.jpg',
  },
  {
    id: 'llamada-cthulhu',
    nombre: 'La llamada de Cthulhu',
    autor: 'H.P. Lovecraft',
    precio: 9990,
    categoria: "Terror",
    img_delantera: 'La llamada de Cthulhu.jpg',
  },
  {
    id: '1984',
    nombre: '1984',
    autor: 'George Orwell',
    precio: 7692,
    categoria: "Novelas",
    img_delantera: '1984.jpg',
  },
  {
    id: 'fahrenheit-451',
    nombre: 'Fahrenheit 451',
    autor: 'Ray Bradbury',
    precio: 10990,
    categoria: "Ciencia ficción",
    img_delantera: 'Fahrenheit451.jpg',
  },
];

// ===== FUNCIONES LOCALSTORAGE =====
function obtenerCarrito() {
  const carritoJSON = localStorage.getItem("carrito");
  return carritoJSON ? JSON.parse(carritoJSON) : [];
}

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// ===== ACTUALIZAR CONTADOR =====
function actualizarContador() {
  const carrito = obtenerCarrito();
  const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const cartCountElements = document.querySelectorAll("#cart-count");
  cartCountElements.forEach(span => {
    span.textContent = totalUnidades;
  });
}

// ===== CALCULAR TOTAL =====
function calcularTotal() {
  const carrito = obtenerCarrito();
  return carrito.reduce((acc, item) => acc + item.cantidad * item.precio, 0);
}

// ===== VALIDACIÓN: CARRITO VACÍO ANTES DE PAGO =====
function validarCarritoVacio() {
  const carrito = obtenerCarrito();
  console.log("Carrito en validación:", carrito); // DEBUG
  
  if (!carrito || carrito.length === 0) {
    alert("❌ El carrito está vacío. Añade productos antes de ir a pago.");
    console.log("Carrito vacío detectado"); // DEBUG
    return false;
  }
  
  console.log("Carrito tiene productos:", carrito.length); // DEBUG
  return true;
}

// ===== VERSIÓN ACTUALIZADA: FUNCIÓN irACompra =====
function irACompra() {
  console.log("Función irACompra() llamada"); // DEBUG
  if (validarCarritoVacio()) {
    alert("✅ Procediendo al comprar...");
    window.location.href = "Comprar.html";
  } else {
    console.log("Validación falló - carrito vacío"); // DEBUG
  }
}



// ===== MOSTRAR CARRITO EN TABLA =====
function mostrarCarrito() {
  const lista = document.getElementById("carrito-lista");
  const carrito = obtenerCarrito();
  
  if (!lista) return;
  
  lista.innerHTML = "";

  if (carrito.length === 0) {
    lista.innerHTML = `
      <tr>
        <td colspan="6" style="text-align:center; color:#777; font-size:1.1rem; padding: 40px 0;">
          El carrito está vacío.
        </td>
      </tr>
    `;
    document.getElementById('totalCarrito').textContent = '$0';
    return;
  }

  carrito.forEach((item) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td><img src="${IMG_PATH}${item.imagen || item.img_delantera}" alt="Portada de ${item.nombre}" class="tabla-img" /></td>
      <td>${item.nombre}</td>
      <td>$${item.precio.toLocaleString()}</td>
      <td>
        <input type="number" value="${item.cantidad}" min="1" max="${MAX_CANTIDAD}" class="cantidad-input" data-id="${item.id}" />
      </td>
      <td>$${(item.cantidad * item.precio).toLocaleString()}</td>
      <td>
        <button class="btn-eliminar-tabla" data-id="${item.id}" data-action="eliminar">Eliminar</button>
      </td>
    `;
    lista.appendChild(fila);
  });

  // Event listeners para cantidad
  document.querySelectorAll('.cantidad-input').forEach(input => {
    input.addEventListener('change', () => {
      const id = input.dataset.id;
      const nuevaCantidad = parseInt(input.value) || 1;
      modificarCantidad(id, nuevaCantidad);
    });
  });

  // Event listeners para eliminar
  document.querySelectorAll('.btn-eliminar-tabla').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      manejarAccionBoton(id, 'eliminar');
    });
  });

  // Actualizar total con descuento
  actualizarTotalConDescuento(descuentoAplicado);
  actualizarContador();
}

// ===== MODIFICAR CANTIDAD =====
function modificarCantidad(id, cantidad) {
  let carrito = obtenerCarrito();
  const index = carrito.findIndex(item => item.id === id);

  if (index >= 0) {
    if (cantidad < 1) {
      manejarAccionBoton(id, 'eliminar');
      return;
    }
    if (cantidad > MAX_CANTIDAD) {
      alert(`No puede tener más de ${MAX_CANTIDAD} unidades por producto.`);
      return;
    }
    carrito[index].cantidad = cantidad;
    guardarCarrito(carrito);
    mostrarCarrito();
  }
}

// ===== MANEJAR ACCIONES =====
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

// ===== APLICAR CUPÓN =====
function aplicarCupon(codigo) {
  codigo = codigo.toUpperCase().trim();

  if (cupones.hasOwnProperty(codigo)) {
    alert(`Cupón aplicado! Tienes un ${cupones[codigo] * 100}% de descuento.`);
    return cupones[codigo];
  } else {
    alert("Código de descuento inválido o no reconocido.");
    return 0;
  }
}

// ===== ACTUALIZAR TOTAL CON DESCUENTO =====
function actualizarTotalConDescuento(porcentajeDescuento) {
  const totalOriginal = calcularTotal();
  const totalConDescuento = totalOriginal * (1 - porcentajeDescuento);
  const totalElem = document.getElementById("totalCarrito");
  if (totalElem) {
    totalElem.textContent = `$${totalConDescuento.toLocaleString(undefined, { minimumFractionDigits: 0 })}`;
  }
  descuentoAplicado = porcentajeDescuento;
}

// ===== AGREGAR PRODUCTO AL CARRITO =====
function agregarAlCarrito(producto, cantidad = 1) {
  if (cantidad < 1) {
    alert('Debe agregar al menos 1 unidad.');
    return;
  }
  if (cantidad > MAX_CANTIDAD) {
    alert(`No puede agregar más de ${MAX_CANTIDAD} unidades.`);
    return;
  }

  let carrito = obtenerCarrito();
  const index = carrito.findIndex(item => item.id === producto.id);

  if (index >= 0) {
    let nuevaCantidad = carrito[index].cantidad + cantidad;
    if (nuevaCantidad > MAX_CANTIDAD) {
      alert(`No puede tener más de ${MAX_CANTIDAD} unidades del mismo producto.`);
      return;
    }
    carrito[index].cantidad = nuevaCantidad;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      autor: producto.autor,
      precio: producto.precio,
      imagen: producto.img_delantera,
      cantidad
    });
  }

  guardarCarrito(carrito);
  actualizarContador();
  mostrarCarrito();
  alert(`Se añadió ${cantidad} unidad(es) de ${producto.nombre} al carrito.`);
}

// ===== EVENTO BOTÓN CUPÓN =====
const botonAplicarCupon = document.getElementById("apply-coupon");
if (botonAplicarCupon) {
  botonAplicarCupon.addEventListener("click", () => {
    const codigo = document.getElementById("coupon-code").value;
    const descuento = aplicarCupon(codigo);
    actualizarTotalConDescuento(descuento);
  });
}

// ===== EVENTO BOTÓN LIMPIAR =====
const btnLimpiar = document.getElementById("limpiar-carrito");
if (btnLimpiar) {
  btnLimpiar.addEventListener("click", () => {
    if (confirm("¿Estás seguro de que quieres limpiar el carrito?")) {
      localStorage.removeItem("carrito");
      descuentoAplicado = 0;
      document.getElementById("coupon-code").value = "";
      mostrarCarrito();
      actualizarContador();
    }
  });
}

// ===== INICIALIZACIÓN =====
document.addEventListener("DOMContentLoaded", () => {
  // Mostrar productos en grid
  const contenedor = document.getElementById("productos-lista");
  if (contenedor) {
    contenedor.innerHTML = "";
    productos.forEach(prod => {
      const articulo = document.createElement("div");
      articulo.className = "producto-compra";
      articulo.innerHTML = `
        <img src="${IMG_PATH}${prod.img_delantera}" alt="Portada del libro ${prod.nombre}" />
        <p class="producto-nombre">${prod.nombre}</p>
        <span class="producto-categoria">${prod.categoria}</span>
        <p class="producto-precio">$${prod.precio.toLocaleString()}</p>
        <p class="producto-stock">Stock Disponible</p>
        <button class="btn-agregar-compra" data-id="${prod.id}" type="button">Añadir</button>
      `;
      contenedor.appendChild(articulo);
    });

    // Event listeners para botones añadir
    document.querySelectorAll(".btn-agregar-compra").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const producto = productos.find(p => p.id === id);
        if (producto) {
          agregarAlCarrito(producto, 1);
        }
      });
    });
  }

  // Mostrar carrito
  mostrarCarrito();
  actualizarContador();
});
=======
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
  const carrito = obtenerCarrito(); // --> aquí sí existe la variable
  if (carrito.length === 0) {
    document.getElementById('cart-items-container').classList.add('vacio');
    return 0;
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

>>>>>>> 0a8dc56fb13191ff8b52c38985d3d39f7a18c0b5
