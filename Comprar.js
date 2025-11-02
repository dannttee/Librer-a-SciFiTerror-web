// ==================== VALIDACIÓN DE CORREO ====================
function validarCorreo(email) {
  const dominiosValidos = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
  return dominiosValidos.some(dominio => email.toLowerCase().endsWith(dominio));
}

// ==================== DATOS DE REGIONES Y COMUNAS ====================
const regionesComunas = {
  "arica_parinacota": ["Arica", "Camarones", "Putre", "General Lagos"],
  "tarapaca": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
  "antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
  "atacama": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
  "coquimbo": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paihuano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
  "valparaiso": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Quilpué", "Villa Alemana", "Limache", "Olmué", "Quillota", "La Calera", "Hijuelas", "Nogales", "La Cruz", "San Antonio", "Cartagena", "El Quisco", "El Tabo", "Algarrobo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "Isla de Pascua"],
  "ohiggins": ["Rancagua", "Machalí", "Graneros", "Mostazal", "Codegua", "Coinco", "Coltauco", "Doñihue", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Requínoa", "Rengo", "San Vicente de Tagua Tagua", "San Fernando", "Chimbarongo", "Nancagua", "Placilla", "Santa Cruz", "Lolol", "Palmilla", "Peralillo", "Pumanque", "Chépica", "Litueche", "Navidad", "Pichilemu", "La Estrella", "Marchigüe"],
  "maule": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas", "Cauquenes", "Pelluhue", "Chanco"],
  "nuble": ["Chillán", "Chillán Viejo", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", "Ninhue", "Ñiquén", "Portezuelo", "Pemuco", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Trehuaco", "Yungay"],
  "biobio": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualpén", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Tomé", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Lebu", "Los Álamos", "Tirúa", "Angol"],
  "araucania": ["Temuco", "Padre Las Casas", "Vilcún", "Cunco", "Melipeuco", "Curacautín", "Lonquimay", "Lautaro", "Perquenco", "Galvarino", "Cholchol", "Carahue", "Saavedra", "Teodoro Schmidt", "Toltén", "Villarrica", "Freire", "Gorbea", "Lanco", "Pitrufquén", "Pucón"],
  "los_rios": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"],
  "los_lagos": ["Ancud", "Puerto Montt", "Dalcahue", "Puqueldón", "Queilén", "Quemchi", "Quellón", "Quinchao", "Calbuco", "Cochamó", "Chonchi", "Curaco de Vélez", "Fresia", "Frutillar", "Llanquihue", "Maullín", "Los Muermos", "Puerto Varas", "Castro", "Osorno", "Puerto Octay", "Río Negro", "Purranque", "Puyehue", "San Juan de la Costa", "San Pablo"],
  "aysen": ["Coihaique", "Cisnes", "Guaitecas", "Cochrane", "Aysén", "Río Ibáñez", "Tortel", "Gonzalo Corvez"],
  "magallanes": ["Punta Arenas", "Puerto Natales", "Torres del Paine", "Porvenir", "Primavera", "Timaukel", "Cabo de Hornos", "Antártica Chilena"],
  "metropolitana": ["Santiago", "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Padre Hurtado", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Recoleta", "Rinconada", "San Borja", "San José de Maipo", "San Miguel", "San Pedro", "San Ramón", "Vitacura", "Puente Alto"]
};

// ==================== CARGAR DATOS GUARDADOS (NUEVA FUNCIÓN) ====================
function cargarDatosGuardados() {
  const datosTemp = JSON.parse(localStorage.getItem("datosCompraTemporal"));
  
  if (datosTemp) {
    document.getElementById('nombre').value = datosTemp.nombre || "";
    document.getElementById('apellidos').value = datosTemp.apellidos || "";
    document.getElementById('email').value = datosTemp.email || "";
    document.getElementById('calle').value = datosTemp.calle || "";
    document.getElementById('departamento').value = datosTemp.departamento || "";
    document.getElementById('region').value = datosTemp.region || "";
    document.getElementById('indicaciones').value = datosTemp.indicaciones || "";
    
    // Actualizar comunas basado en región
    if (datosTemp.region && regionesComunas[datosTemp.region]) {
      const comunaSelect = document.getElementById("comuna");
      comunaSelect.innerHTML = '<option value="">Seleccione la comuna...</option>';
      
      regionesComunas[datosTemp.region].forEach(comuna => {
        const option = document.createElement("option");
        option.value = comuna.toLowerCase().replace(/\s+/g, '_');
        option.textContent = comuna;
        comunaSelect.appendChild(option);
      });
      
      // Seleccionar la comuna guardada
      document.getElementById('comuna').value = datosTemp.comuna || "";
    }
    
    // Limpiar temporal
    localStorage.removeItem("datosCompraTemporal");
  }
}

// ==================== CARGAR AL DOM ====================
window.addEventListener('DOMContentLoaded', function() {
  cargarCarrito();
  actualizarContador();
  cargarDatosGuardados();  // ✅ NUEVA LÍNEA

  const regionSelect = document.getElementById("region");
  const comunaSelect = document.getElementById("comuna");
  
  if (regionSelect) {
    regionSelect.addEventListener("change", function() {
      const regionSeleccionada = this.value;
      comunaSelect.innerHTML = '<option value="">Seleccione la comuna...</option>';
      
      if (regionSeleccionada && regionesComunas[regionSeleccionada]) {
        regionesComunas[regionSeleccionada].forEach(comuna => {
          const option = document.createElement("option");
          option.value = comuna.toLowerCase().replace(/\s+/g, '_');
          option.textContent = comuna;
          comunaSelect.appendChild(option);
        });
      }
    });
  }
});

// ==================== CARGAR CARRITO ====================
function cargarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let total = 0;
  let html = '';

  if (carrito.length === 0) {
    html = '<tr><td colspan="5" style="text-align:center; padding: 20px; color: #999;">El carrito está vacío</td></tr>';
  } else {
    carrito.forEach(producto => {
      const subtotal = producto.precio * producto.cantidad;
      total += subtotal;

      html += `
        <tr>
          <td><img src="${producto.imagen}" alt="${producto.nombre}"></td>
          <td>${producto.nombre}</td>
          <td>$${producto.precio.toLocaleString()}</td>
          <td>${producto.cantidad}</td>
          <td>$${subtotal.toLocaleString()}</td>
        </tr>
      `;
    });
  }

  document.getElementById('tabla-productos').innerHTML = html;
  const totalFormato = total.toLocaleString();
  document.getElementById('total-display').textContent = `$${totalFormato}`;
  document.getElementById('total-pagar').textContent = totalFormato;
}

// ==================== ACTUALIZAR CONTADOR ====================
function actualizarContador() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const cantidadTotal = carrito.reduce((total, p) => total + p.cantidad, 0);
  const contadorElement = document.getElementById('cart-count');
  if (contadorElement) {
    contadorElement.textContent = cantidadTotal;
  }
}

// ==================== APLICAR DESCUENTO ====================
function aplicarDescuento() {
  alert("Función de descuento disponible próximamente");
}

// ==================== PROCESAR COMPRA ====================
function procesarCompra(event) {
  event.preventDefault();

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  const nombre = document.getElementById('nombre').value;
  const apellidos = document.getElementById('apellidos').value;
  const email = document.getElementById('email').value;
  const calle = document.getElementById('calle').value;
  const departamento = document.getElementById('departamento').value;
  const region = document.getElementById('region').value;
  const comuna = document.getElementById('comuna').value;
  const indicaciones = document.getElementById('indicaciones').value;

  // ========== VALIDACIÓN CORREO ===========
  if (!validarCorreo(email)) {
    // GUARDAR DATOS DE ERROR
    localStorage.setItem("datosFormularioError", JSON.stringify({
      nombre: nombre,
      apellidos: apellidos,
      email: email,
      calle: calle,
      departamento: departamento,
      region: region,
      comuna: comuna,
      indicaciones: indicaciones,
      razonError: "❌ Correo inválido - Solo se aceptan dominios @duoc.cl, @profesor.duoc.cl o @gmail.com"
    }));
    
    window.location.href = "PagoConError.html";
    return;
  }

  // ========== VALIDACIÓN DIRECCIÓN ===========
  if (!calle || !region || !comuna || !nombre || !apellidos) {
    // GUARDAR DATOS DE ERROR
    localStorage.setItem("datosFormularioError", JSON.stringify({
      nombre: nombre,
      apellidos: apellidos,
      email: email,
      calle: calle,
      departamento: departamento,
      region: region,
      comuna: comuna,
      indicaciones: indicaciones,
      razonError: "❌ Campos incompletos - Por favor completa todos los datos requeridos"
    }));
    
    window.location.href = "PagoConError.html";
    return;
  }

  const total = carrito.reduce((sum, p) => sum + (p.precio * p.cantidad), 0);

  const compra = {
    id: Date.now(),
    fecha: new Date().toLocaleDateString('es-ES'),
    cliente: `${nombre} ${apellidos}`,
    email: email,
    direccion: {
      calle: calle,
      departamento: departamento,
      region: region,
      comuna: comuna,
      indicaciones: indicaciones
    },
    productos: carrito,
    total: total
  };

  let compras = JSON.parse(localStorage.getItem("compras")) || [];
  compras.push(compra);
  localStorage.setItem("compras", JSON.stringify(compras));

  localStorage.removeItem("carrito");
  localStorage.removeItem("datosFormularioError");

  // ✅ REDIRIGIR A PAGOCORRECTO.HTML
  window.location.href = "PagoCorrecto.html";
}

// ==================== VOLVER AL CARRITO ====================
function volverAlCarrito() {
  window.location.href = "Carrito.html";
}

// ==================== SCROLL AL FORMULARIO ====================
function scrollFormulario() {
  const formulario = document.getElementById('formCheckout');
  formulario.scrollIntoView({ behavior: 'smooth' });
}

// ==================== ACTUALIZAR BOTÓN ====================
window.addEventListener('load', function() {
  const totalDisplay = document.getElementById('total-display');
  const totalDisplayBoton = document.getElementById('total-display-botton');
  if (totalDisplayBoton && totalDisplay) {
    totalDisplayBoton.textContent = totalDisplay.textContent.replace('$', '');
  }
});
