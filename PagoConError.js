// ==================== CARGAR DATOS AL DOM ====================
window.addEventListener('DOMContentLoaded', function() {
    cargarDatosCompraError();
});

// ==================== CARGAR DATOS DE LA COMPRA CON ERROR ====================
function cargarDatosCompraError() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const datosFormulario = JSON.parse(localStorage.getItem("datosFormularioError")) || {};
    
    if (carrito.length === 0) {
        alert("No hay carrito registrado");
        window.location.href = "Index.html";
        return;
    }

    // Llenar datos del cliente
    const nombre = datosFormulario.nombre || "";
    const apellidos = datosFormulario.apellidos || "";
    const email = datosFormulario.email || "";
    
    document.getElementById('clientName').textContent = nombre;
    document.getElementById('clientLastname').textContent = apellidos;
    document.getElementById('clientEmail').textContent = email;

    // Llenar dirección de entrega
    document.getElementById('addressStreet').textContent = datosFormulario.calle || "No especificado";
    document.getElementById('addressApart').textContent = datosFormulario.departamento || "N/A";
    document.getElementById('addressRegion').textContent = datosFormulario.region || "No especificado";
    document.getElementById('addressComuna').textContent = datosFormulario.comuna || "No especificado";
    document.getElementById('addressIndicaciones').textContent = datosFormulario.indicaciones || "Ninguna";

    // Llenar tabla de productos
    let tablaHTML = '';
    let total = 0;
    
    carrito.forEach(producto => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;
        
        tablaHTML += `
            <tr>
                <td><img src="${producto.imagen}" alt="${producto.nombre}" style="width: 60px; height: auto;"></td>
                <td>${producto.nombre}</td>
                <td>$${producto.precio.toLocaleString()}</td>
                <td>${producto.cantidad}</td>
                <td>$${subtotal.toLocaleString()}</td>
            </tr>
        `;
    });

    document.getElementById('productsTable').innerHTML = tablaHTML;

    // Mostrar razón del error
    const razonError = datosFormulario.razonError || "❌ Correo inválido o datos incompletos";
    document.getElementById('errorReason').textContent = razonError;
}

// ==================== REINTENTAR COMPRA ====================
function reintentar() {
    // Guardar datos en localStorage temporal para que vuelvan a Comprar.html
    const datosFormulario = JSON.parse(localStorage.getItem("datosFormularioError")) || {};
    localStorage.setItem("datosCompraTemporal", JSON.stringify(datosFormulario));
    
    // Limpiar el error anterior
    localStorage.removeItem("datosFormularioError");
    
    // Volver a la página de compra
    window.location.href = "Comprar.html";
}

// ==================== IR AL CARRITO ====================
function irAlCarrito() {
    window.location.href = "Carrito.html";
}

// ==================== IR AL INICIO ====================
function irAlInicio() {
    localStorage.removeItem("datosFormularioError");
    window.location.href = "Index.html";
}

