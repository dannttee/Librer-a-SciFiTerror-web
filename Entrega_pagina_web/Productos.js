const productos = [
  {
    id: 'dune',
    nombre: 'Dune',
    autor: 'Frank Herbert',
    precio: 12990,
    categoria: "Ciencia ficción",
    descripcion:'“Dune” es una epopeya de ciencia ficción que se desarrolla en el árido planeta Arrakis, vital por su especia Melange. Paul Atreides, heredero de una casa noble, se enfrenta a traiciones, profecías y al choque de culturas y religiones en una lucha titánica por el poder. Es un libro que explora política, ecología, religión, y el destino de la humanidad en un futuro lejano.',
    img_delantera: 'DUNE.jpg',
    img_trasera: 'DUNE_back.jpg',
  },
  {
    id: 'frankenstein',
    nombre: 'Frankenstein',
    autor: 'Mary Shelley',
    precio: 10500,
    categoria: "Terror",
    descripcion:
      'La clásica novela gótica relata la obsesión del joven científico Victor Frankenstein por el límite entre la vida y la muerte, dando vida a una criatura inadaptada y solitaria. Shelley explora profundas cuestiones éticas, científicas y filosóficas sobre el origen de la humanidad y la responsabilidad de la creación.',
    img_delantera: 'FRANKENSTEIN.jpg',
    img_trasera: 'FRANKENSTEIN_back.jpg',
  },
  {
    id: 'it',
    nombre: 'It',
    autor: 'Stephen King',
    precio: 11990,
    categoria: "Terror",
    descripcion:
      'En “It”, un grupo de amigos de la infancia se enfrenta a un mal ancestral que acecha el pueblo de Derry cada 27 años, manifestándose muchas veces como el payaso Pennywise. La novela alterna pasado y presente, profundizando en los miedos personales y colectivos, la fuerza de la amistad y el trauma.',
    img_delantera: 'IT.jpg',
    img_trasera: 'IT_back.jpg',
  },
  {
    id: 'neuromante',
    nombre: 'Neuromante nº 01',
    autor: 'William Gibson',
    precio: 13990,
    categoria: "Ciencia ficción",
    descripcion:
      'Obra fundamental del cyberpunk, presenta un futuro dominado por corporaciones, hackers y la inteligencia artificial. Case, ex-cibercriminal, se ve envuelto en una peligrosa misión junto a personajes tan inolvidables como Molly Millions, desafiando las fronteras entre lo humano y lo virtual.',
    img_delantera: 'NEUROMANTE.jpg',
    img_trasera: 'NEUROMANTE_back.jpg',
  },
  {
    id: 'problema-tres-cuerpos',
    nombre: 'El problema de los tres cuerpos',
    autor: 'Cixin Liu',
    precio: 14990,
    categoria: "Ciencia ficción",
    descripcion:
      'Esta novela china narra el primer contacto con una civilización alienígena y el impacto global que ello provoca. Ciencia, historia y política se entrelazan en una trama única sobre la humanidad enfrentando retos tecnológicos y morales nunca antes vistos.',
    img_delantera: 'El problema de los tres cuerpos.jpg',
    img_trasera: 'El problema de los tres cuerpos_back.jpg',
  },
  {
    id: 'llamada-cthulhu',
    nombre: 'La llamada de Cthulhu',
    autor: 'H.P. Lovecraft',
    precio: 9990,
    categoria: "Terror",
    descripcion:
      'El relato que consolidó el mitológico universo de Lovecraft, donde un horror ancestral y cósmico se cierne sobre la humanidad. Un clásico del terror que explora la insignificancia y vulnerabilidad humanas ante fuerzas incompresibles.',
    img_delantera: 'La llamada de Cthulhu.jpg',
    img_trasera: 'La llamada de Cthulhu_back.jpg',
  },
  {
    id: '1984',
    nombre: '1984',
    autor: 'George Orwell',
    precio: 10990,
    categoria: "Novelas",
    descripcion:
      '“1984” es una visión estremecedora de un Estado totalitario, donde la vigilancia constante del Gran Hermano y la manipulación del lenguaje y la memoria anulan la libertad individual. Winston Smith lucha por la verdad y la dignidad en medio de la opresión y la represión.',
    img_delantera: '1984.jpg',
    img_trasera: '1984_back.jpg',
  },
  {
    id: 'cronicas-marcianas',
    nombre: 'Crónicas Marcianas',
    autor: 'Ray Bradbury',
    precio: 12500,
    categoria: "Ciencia ficción",
    descripcion:
      'Una colección de relatos líricos y poéticos que narran la colonización de Marte y los conflictos entre colonizadores terrestres y los nativos marcianos. Bradbury examina con sensibilidad el choque de culturas y la nostalgia por la Tierra perdida.',
    img_delantera: 'Crónicas Marcianas.jpg',
    img_trasera: 'Crónicas Marcianas_back.jpg',
  },
  {
    id: 'exorcista',
    nombre: 'El Exorcista',
    autor: 'William Peter Blatty',
    precio: 11500,
    categoria: "Terror",
    descripcion:
      'Novela de horror sobrenatural basada en hechos reales. Cuando una niña es poseída por una entidad demoníaca, sus familiares buscan la ayuda de dos sacerdotes para realizar un exorcismo, enfrentando el mal absoluto y la fe hasta sus últimas consecuencias.',
    img_delantera: 'El Exorcista.jpg',
    img_trasera: 'El Exorcista_back.jpg',
  },
  {
    id: 'noche-muertos-vivientes',
    nombre: 'La noche de los muertos vivientes',
    autor: 'John Russo',
    categoria: "Terror",
    precio: 9990,
    descripcion:
      'Libro y película pioneros del género zombie, narra la lucha por sobrevivir de un grupo de personas atrapadas en una casa, rodeados por muertos vivientes. Una historia de horror social, ritmo frenético y tensión hasta el último momento.',
    img_delantera: 'La noche de los muertos vivientes.jpg',
    img_trasera: 'La noche de los muertos vivientes_back.jpg',
  },
  {
    id: 'sombra-noche',
    nombre: 'La Sombra de la Noche / Shadow of Night',
    autor: 'Deborah Harkness',
    precio: 13500,
    categoria: "Novelas",
    descripcion:
      'Segunda parte de la trilogía “All Souls”, mezcla historia, romance y fantasía. La protagonizan una bruja y un vampiro perseguidos por sociedades secretas y misterios ligados al tiempo, el saber y la alquimia.',
    img_delantera: 'La Sombra de la Noche.jpg',
    img_trasera: 'La Sombra de la Noche_back.jpg',
  },
  {
    id: 'fahrenheit-451',
    nombre: 'Fahrenheit 451',
    autor: 'Ray Bradbury',
    precio: 10990,
    categoria: "Ciencia ficción",
    descripcion:
      'En una sociedad donde los libros están prohibidos y son incendiados por los bomberos, Guy Montag comienza a cuestionar su labor y a buscar el conocimiento. Una distopía sobre censura, conformismo y el poder transformador de la literatura.',
    img_delantera: 'Fahrenheit451.jpg',
    img_trasera: 'Fahrenheit451_back.jpg',
  },
  {
    id: 'soy-leyenda',
    nombre: 'Soy Leyenda',
    autor: 'Richard Matheson',
    precio: 11800,
    categoria: "Ciencia ficción",
    descripcion:
      'Una plaga convierte a la humanidad en criaturas vampíricas y Robert Neville, el último hombre normal, debe sobrevivir aislado. Un clásico de la ciencia ficción y el terror, explora la soledad y el concepto de “leyenda” desde una perspectiva radical.',
    img_delantera: 'SoyLeyenda.jpg',
    img_trasera: 'SoyLeyenda_back.jpg',
  },
  {
    id: 'cementerio-animales',
    nombre: 'Cementerio de animales',
    autor: 'Stephen King',
    precio: 12000,
    categoria: "Terror",
    descripcion:
      'Stephen King lleva el terror a la esfera familiar. Tras mudarse cerca de un cementerio indígena, los Creed experimentan la tragedia y descubren los oscuros poderes de ese lugar, donde los muertos vuelven, pero nunca igual.',
    img_delantera: 'CementerioAnimales.jpg',
    img_trasera: 'CementerioAnimales_back.jpg',
  },
  {
    id: 'resplandor',
    nombre: 'El resplandor',
    autor: 'Stephen King',
    precio: 10900,
    categoria: "Terror",
    descripcion:
      'Jack Torrance acepta cuidar el Hotel Overlook durante el invierno, llevándose consigo a su esposa e hijo. La soledad, el aislamiento, y las fuerzas sobrenaturales desatan la locura y el terror en sus pasillos desiertos.',
    img_delantera: 'ElResplandor.jpg',
    img_trasera: 'ElResplandor_back.jpg',
  },
  {
    id: 'androide-ovejas-electricas',
    nombre: '¿Sueñan los androides con ovejas eléctricas?',
    autor: 'Philip K. Dick',
    precio: 13200,
    categoria: "Ciencia ficción",
    descripcion:
      'En un mundo devastado por la guerra, Rick Deckard debe “retirar” a unos androides rebeldes que quieren sobrevivir. La novela ahonda en las diferencias entre humano y máquina, la empatía y el valor de la vida.',
    img_delantera: '¿Sueñan los androides con ovejas eléctricas.jpg',
    img_trasera: '¿Sueñan los androides con ovejas eléctricas_back.jpg',
  },
  {
    id: 'la-carretera',
    nombre: 'La Carretera',
    autor: 'Cormac McCarthy',
    precio: 10600,
    categoria: "Novelas",
    descripcion:
      'Padre e hijo atraviesan paisajes devastados por una catástrofe desconocida, buscando sobrevivir en medio de la desolación y la pérdida de la esperanza. Una novela breve y sobrecogedora sobre la humanidad y el amor paterno.',
    img_delantera: 'LaCarretera.jpg',
    img_trasera: 'LaCarretera_back.jpg',
  },
  {
    id: 'metro-2033',
    nombre: 'Metro 2033',
    autor: 'Dmitry Glukhovsky',
    precio: 12800,
    categoria: "Ciencia ficción",
    descripcion:
      'Tras una guerra nuclear, los supervivientes de Moscú viven bajo tierra en el metro, luchando contra criaturas mutantes y facciones enfrentadas. Artém hace un viaje por el laberinto subterráneo en busca de salvación y un sentido para la humanidad.',
    img_delantera: 'Metro2033.jpg',
    img_trasera: 'Metro2033_back.jpg',
  },
  {
    id: 'hombre-ilustrado',
    nombre: 'El hombre ilustrado',
    autor: 'Ray Bradbury',
    precio: 13700,
    categoria: "Ciencia ficción",
    descripcion:
      'Colección de cuentos unificados por el enigma de un misterioso hombre cubierto de tatuajes vivos que narran historias sobre el futuro, la tecnología y la condición humana. Es un puente entre la fantasía y la reflexión filosófica.',
    img_delantera: 'ElHombreIlustrado.jpg',
    img_trasera: 'ElHombreIlustrado_back.jpg',
  },
  {
    id: 'hyperion',
    nombre: 'Hyperion',
    autor: 'Dan Simmons',
    precio: 14300,
    categoria: "Ciencia ficción",
    descripcion:
      'Siete peregrinos cuentan sus historias en el camino hacia el misterioso planeta Hyperion, cada una cargada de drama, amor, horror y maravilla. Con una estructura coral y ambiciosa, esta novela es uno de los pilares de la ciencia ficción moderna.',
    img_delantera: 'Hyperion.jpg',
    img_trasera: 'Hyperion_back.jpg',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  mostrarProductosPorCategoria(productos);
  // Además, establecer el listener para botones "añadir al carrito"
  document.querySelectorAll('.añadir-carrito').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const producto = productos.find(p => p.id === id);
      if (producto) {
        agregarAlCarrito(producto, 1);
      }
    });
  });
});


const MAX_CANTIDAD = 99;
let descuentoAplicado = 0;

function obtenerCarrito() {
  return JSON.parse(localStorage.getItem('carrito')) || [];
}

function guardar(carrito) {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function actualizarContador() {
  const carrito = obtenerCarrito();
  const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const span = document.getElementById('cart-count');
  if (span) span.textContent = total;
}

function calcularTotal() {
  const carrito = obtenerCarrito();
  let total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  if (descuentoAplicado > 0) {
    total = total - (total * descuentoAplicado) / 100;
  }
  return total;
}

function mostrarCarrito() {
  const lista = document.getElementById('carrito-lista');
  const carrito = obtenerCarrito();

  if (!lista) return;

  lista.innerHTML = '';

  if (carrito.length === 0) {
    lista.innerHTML = '<p class="text-muted text-center">El carrito está vacío.</p>';
    const totalElem = document.getElementById('carrito-total');
    if (totalElem) totalElem.textContent = '$0';
    return;
  }

  carrito.forEach((item) => {
    const prod = document.createElement('div');
    prod.className = 'd-flex align-items-center justify-content-between border-bottom py-3 gap-2';

    prod.innerHTML = `
      <div class="d-flex align-items-center gap-3">
        <img src="img/${item.img_delantera}" alt="Portada de ${item.nombre}" class="carrito-producto-img" />
        <div>
          <div class="fw-semibold">${item.nombre}</div>
          <div class="text-muted small">${item.autor || ''}</div>
        </div>
      </div>
      <div class="d-flex align-items-center gap-2">
        <button class="btn btn-outline-secondary carrito-btn menos-prod" data-id="${item.id}">-</button>
        <span class="mx-2">${item.cantidad}</span>
        <button class="btn btn-outline-secondary carrito-btn mas-prod" data-id="${item.id}">+</button>
      </div>
      <div class="fw-semibold" style="width: 85px;">
        $${(item.precio * item.cantidad).toLocaleString()}
      </div>
      <button class="btn btn-link text-danger quitar-prod" data-id="${item.id}" title="Eliminar">&#128465;</button>
    `;
    lista.appendChild(prod);
  });

  const totalCalculado = calcularTotal();
  const totalElem = document.getElementById('carrito-total');
  if (totalElem) totalElem.textContent = `$${totalCalculado.toLocaleString()}`;

  // Event listeners for buttons +, -, and delete
  document.querySelectorAll('.mas-prod').forEach(btn => {
    btn.addEventListener('click', () => modificarCantidad(btn.dataset.id, 1));
  });
  document.querySelectorAll('.menos-prod').forEach(btn => {
    btn.addEventListener('click', () => modificarCantidad(btn.dataset.id, -1));
  });
  document.querySelectorAll('.quitar-prod').forEach(btn => {
    btn.addEventListener('click', () => quitarProducto(btn.dataset.id));
  });
}

function modificarCantidad(id, delta) {
  let carrito = obtenerCarrito();
  const index = carrito.findIndex(item => item.id === id);

  if (index >= 0) {
    let nuevaCantidad = carrito[index].cantidad + delta;
    if (nuevaCantidad < 1) {
      alert('La cantidad mínima es 1.');
      return;
    }
    if (nuevaCantidad > MAX_CANTIDAD) {
      alert(`No puede tener más de ${MAX_CANTIDAD} unidades por producto.`);
      return;
    }
    carrito[index].cantidad = nuevaCantidad;
    guardar(carrito);
    mostrarCarrito();
    actualizarContador();
  }
}

function quitarProducto(id) {
  let carrito = obtenerCarrito().filter(item => item.id !== id);
  guardar(carrito);
  mostrarCarrito();
  actualizarContador();
}

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
      imagen: producto.img_delantera, // 👈 unificado aquí
      cantidad
    });
  }

  guardar(carrito);
  actualizarContador();
  mostrarCarrito();
  alert(`Se añadió ${cantidad} unidad(es) de ${producto.nombre} al carrito.`);
}

function aplicarCupon(codigo) {
  const codigoNormalizado = codigo.trim().toUpperCase();
  switch (codigoNormalizado) {
    case 'DESCUENTO10':
      descuentoAplicado = 10;
      alert('Cupón aplicado! 10% de descuento en el total.');
      break;
    case 'DESCUENTO20':
      descuentoAplicado = 20;
      alert('Cupón aplicado! 20% de descuento en el total.');
      break;
    default:
      descuentoAplicado = 0;
      alert('Cupón inválido o expirado.');
  }
  mostrarCarrito();
}


document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('productos-lista');
  contenedor.innerHTML = ''; 

  productos.forEach(prod => {
    const articulo = document.createElement('article');
    articulo.className = 'producto';
    articulo.innerHTML = `
      <img src="${prod.img_delantera}" alt="Portada del libro ${prod.nombre}" />
      <a href="producto_detalle.html?id=${prod.id}" class="titulo-producto">${prod.nombre}</a>
      <span class="atributos">Autor: ${prod.autor}</span>
      <span class="precio">$${prod.precio.toLocaleString()}</span>
      <button class="boton añadir-carrito" aria-label="Añadir ${prod.nombre} al carrito" data-id="${prod.id}" type="button">Añadir</button>
    `;
    contenedor.appendChild(articulo);
  });

  document.querySelectorAll('.añadir-carrito').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const producto = productos.find(p => p.id === id);
      if (producto) {
        agregarAlCarrito(producto, 1);
      }
    });
  });
});

  mostrarCarrito();
  actualizarContador();

  const btnCupon = document.getElementById('apply-coupon');
  if (btnCupon) {
    btnCupon.addEventListener('click', () => {
      const codigo = document.getElementById('coupon-code').value;
      aplicarCupon(codigo);
    });
}
