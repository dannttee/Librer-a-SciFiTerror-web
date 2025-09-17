document.addEventListener('DOMContentLoaded', () => {
  const productos = [
    {
      id: 'dune',
      nombre: 'Dune',
      autor: 'Frank Herbert',
      precio: '$12.990',
      descripcion: '“Dune” es una epopeya de ciencia ficción que se desarrolla en el árido planeta Arrakis, vital por su especia Melange. Paul Atreides, heredero de una casa noble, se enfrenta a traiciones, profecías y al choque de culturas y religiones en una lucha titánica por el poder. Es un libro que explora política, ecología, religión, y el destino de la humanidad en un futuro lejano.',
      img_delantera: 'DUNE.jpg',
      img_trasera: 'DUNE_back.jpg'
    },
    {
      id: 'frankenstein',
      nombre: 'Frankenstein',
      autor: 'Mary Shelley',
      precio: '$10.500',
      descripcion: 'La clásica novela gótica relata la obsesión del joven científico Victor Frankenstein por el límite entre la vida y la muerte, dando vida a una criatura inadaptada y solitaria. Shelley explora profundas cuestiones éticas, científicas y filosóficas sobre el origen de la humanidad y la responsabilidad de la creación.',
      img_delantera: 'FRANKENSTEIN.jpg',
      img_trasera: 'FRANKENSTEIN_back.jpg'
    },
    {
      id: 'it',
      nombre: 'It',
      autor: 'Stephen King',
      precio: '$11.990',
      descripcion: 'En “It”, un grupo de amigos de la infancia se enfrenta a un mal ancestral que acecha el pueblo de Derry cada 27 años, manifestándose muchas veces como el payaso Pennywise. La novela alterna pasado y presente, profundizando en los miedos personales y colectivos, la fuerza de la amistad y el trauma.',
      img_delantera: 'IT.jpg',
      img_trasera: 'IT_back.jpg'
    },
    {
      id: 'neuromante',
      nombre: 'Neuromante nº 01',
      autor: 'William Gibson',
      precio: '$13.990',
      descripcion: 'Obra fundamental del cyberpunk, presenta un futuro dominado por corporaciones, hackers y la inteligencia artificial. Case, ex-cibercriminal, se ve envuelto en una peligrosa misión junto a personajes tan inolvidables como Molly Millions, desafiando las fronteras entre lo humano y lo virtual.',
      img_delantera: 'NEUROMANTE.jpg',
      img_trasera: 'NEUROMANTE_back.jpg'
    },
    {
      id: 'problema-tres-cuerpos',
      nombre: 'El problema de los tres cuerpos',
      autor: 'Cixin Liu',
      precio: '$14.990',
      descripcion: 'Esta novela china narra el primer contacto con una civilización alienígena y el impacto global que ello provoca. Ciencia, historia y política se entrelazan en una trama única sobre la humanidad enfrentando retos tecnológicos y morales nunca antes vistos.',
      img_delantera: 'El problema de los tres cuerpos.jpg',
      img_trasera: 'El problema de los tres cuerpos_back.jpg'
    },
    {
      id: 'llamada-cthulhu',
      nombre: 'La llamada de Cthulhu',
      autor: 'H.P. Lovecraft',
      precio: '$9.990',
      descripcion: 'El relato que consolidó el mitológico universo de Lovecraft, donde un horror ancestral y cósmico se cierne sobre la humanidad. Un clásico del terror que explora la insignificancia y vulnerabilidad humanas ante fuerzas incompresibles.',
      img_delantera: 'La llamada de Cthulhu.jpg',
      img_trasera: 'La llamada de Cthulhu_back.jpg'
    },
    {
      id: '1984',
      nombre: '1984',
      autor: 'George Orwell',
      precio: '$10.990',
      descripcion: '“1984” es una visión estremecedora de un Estado totalitario, donde la vigilancia constante del Gran Hermano y la manipulación del lenguaje y la memoria anulan la libertad individual. Winston Smith lucha por la verdad y la dignidad en medio de la opresión y la represión.',
      img_delantera: '1984.jpg',
      img_trasera: '1984_back.jpg'
    },
    {
      id: 'cronicas-marcianas',
      nombre: 'Crónicas Marcianas',
      autor: 'Ray Bradbury',
      precio: '$12.500',
      descripcion: 'Una colección de relatos líricos y poéticos que narran la colonización de Marte y los conflictos entre colonizadores terrestres y los nativos marcianos. Bradbury examina con sensibilidad el choque de culturas y la nostalgia por la Tierra perdida.',
      img_delantera: 'Crónicas Marcianas.jpg',
      img_trasera: 'Crónicas Marcianas_back.jpg'
    },
    {
      id: 'exorcista',
      nombre: 'El Exorcista',
      autor: 'William Peter Blatty',
      precio: '$11.500',
      descripcion: 'Novela de horror sobrenatural basada en hechos reales. Cuando una niña es poseída por una entidad demoníaca, sus familiares buscan la ayuda de dos sacerdotes para realizar un exorcismo, enfrentando el mal absoluto y la fe hasta sus últimas consecuencias.',
      img_delantera: 'El Exorcista.jpg',
      img_trasera: 'El Exorcista_back.jpg'
    },
    {
      id: 'noche-muertos-vivientes',
      nombre: 'La noche de los muertos vivientes',
      autor: 'John Russo',
      precio: '$9.990',
      descripcion: 'Libro y película pioneros del género zombie, narra la lucha por sobrevivir de un grupo de personas atrapadas en una casa, rodeados por muertos vivientes. Una historia de horror social, ritmo frenético y tensión hasta el último momento.',
      img_delantera: 'La noche de los muertos vivientes.jpg',
      img_trasera: 'La noche de los muertos vivientes_back.jpg'
    },
    {
      id: 'sombra-noche',
      nombre: 'La Sombra de la Noche / Shadow of Night',
      autor: 'Deborah Harkness',
      precio: '$13.500',
      descripcion: 'Segunda parte de la trilogía “All Souls”, mezcla historia, romance y fantasía. La protagonizan una bruja y un vampiro perseguidos por sociedades secretas y misterios ligados al tiempo, el saber y la alquimia.',
      img_delantera: 'La Sombra de la Noche.jpg',
      img_trasera: 'La Sombra de la Noche_back.jpg'
    },
    {
      id: 'fahrenheit-451',
      nombre: 'Fahrenheit 451',
      autor: 'Ray Bradbury',
      precio: '$10.990',
      descripcion: 'En una sociedad donde los libros están prohibidos y son incendiados por los bomberos, Guy Montag comienza a cuestionar su labor y a buscar el conocimiento. Una distopía sobre censura, conformismo y el poder transformador de la literatura.',
      img_delantera: 'Fahrenheit451.jpg',
      img_trasera: 'Fahrenheit451_back.jpg'
    },
    {
      id: 'soy-leyenda',
      nombre: 'Soy Leyenda',
      autor: 'Richard Matheson',
      precio: '$11.800',
      descripcion: 'Una plaga convierte a la humanidad en criaturas vampíricas y Robert Neville, el último hombre normal, debe sobrevivir aislado. Un clásico de la ciencia ficción y el terror, explora la soledad y el concepto de “leyenda” desde una perspectiva radical.',
      img_delantera: 'SoyLeyenda.jpg',
      img_trasera: 'SoyLeyenda_back.jpg'
    },
    {
      id: 'cementerio-animales',
      nombre: 'Cementerio de animales',
      autor: 'Stephen King',
      precio: '$12.000',
      descripcion: 'Stephen King lleva el terror a la esfera familiar. Tras mudarse cerca de un cementerio indígena, los Creed experimentan la tragedia y descubren los oscuros poderes de ese lugar, donde los muertos vuelven, pero nunca igual.',
      img_delantera: 'CementerioAnimales.jpg',
      img_trasera: 'CementerioAnimales_back.jpg'
    },
    {
      id: 'resplandor',
      nombre: 'El resplandor',
      autor: 'Stephen King',
      precio: '$10.900',
      descripcion: 'Jack Torrance acepta cuidar el Hotel Overlook durante el invierno, llevándose consigo a su esposa e hijo. La soledad, el aislamiento, y las fuerzas sobrenaturales desatan la locura y el terror en sus pasillos desiertos.',
      img_delantera: 'ElResplandor.jpg',
      img_trasera: 'ElResplandor_back.jpg'
    },
    {
      id: 'androide-ovejas-electricas',
      nombre: '¿Sueñan los androides con ovejas eléctricas?',
      autor: 'Philip K. Dick',
      precio: '$13.200',
      descripcion: 'En un mundo devastado por la guerra, Rick Deckard debe “retirar” a unos androides rebeldes que quieren sobrevivir. La novela ahonda en las diferencias entre humano y máquina, la empatía y el valor de la vida.',
      img_delantera: '¿Sueñan los androides con ovejas eléctricas.jpg',
      img_trasera: '¿Sueñan los androides con ovejas eléctricas_back.jpg'
    },
    {
      id: 'la-carretera',
      nombre: 'La Carretera',
      autor: 'Cormac McCarthy',
      precio: '$10.600',
      descripcion: 'Padre e hijo atraviesan paisajes devastados por una catástrofe desconocida, buscando sobrevivir en medio de la desolación y la pérdida de la esperanza. Una novela breve y sobrecogedora sobre la humanidad y el amor paterno.',
      img_delantera: 'LaCarretera.jpg',
      img_trasera: 'LaCarretera_back.jpg'
    },
    {
      id: 'metro-2033',
      nombre: 'Metro 2033',
      autor: 'Dmitry Glukhovsky',
      precio: '$12.800',
      descripcion: 'Tras una guerra nuclear, los supervivientes de Moscú viven bajo tierra en el metro, luchando contra criaturas mutantes y facciones enfrentadas. Artém hace un viaje por el laberinto subterráneo en busca de salvación y un sentido para la humanidad.',
      img_delantera: 'Metro2033.jpg',
      img_trasera: 'Metro2033_back.jpg'
    },
    {
      id: 'hombre-ilustrado',
      nombre: 'El hombre ilustrado',
      autor: 'Ray Bradbury',
      precio: '$13.700',
      descripcion: 'Colección de cuentos unificados por el enigma de un misterioso hombre cubierto de tatuajes vivos que narran historias sobre el futuro, la tecnología y la condición humana. Es un puente entre la fantasía y la reflexión filosófica.',
      img_delantera: 'ElHombreIlustrado.jpg',
      img_trasera: 'ElHombreIlustrado_back.jpg'
    },
    {
      id: 'hyperion',
      nombre: 'Hyperion',
      autor: 'Dan Simmons',
      precio: '$14.300',
      descripcion: 'Siete peregrinos cuentan sus historias en el camino hacia el misterioso planeta Hyperion, cada una cargada de drama, amor, horror y maravilla. Con una estructura coral y ambiciosa, esta novela es uno de los pilares de la ciencia ficción moderna.',
      img_delantera: 'Hyperion.jpg',
      img_trasera: 'Hyperion_back.jpg'
    }
  ];

  const params = new URLSearchParams(window.location.search);
  const idProducto = params.get('id');
  const producto = productos.find(p => p.id === idProducto);

  if (!producto) {
    document.getElementById('producto-nombre').textContent = 'Producto no encontrado';
    document.getElementById('producto-autor').textContent = '';
    document.getElementById('producto-precio').textContent = '';
    document.getElementById('producto-descripcion').textContent = '';
    return;
  }

 
  document.getElementById('producto-nombre').textContent = producto.nombre;
  document.getElementById('producto-autor').textContent = producto.autor;
  document.getElementById('producto-precio').textContent = producto.precio;
  document.getElementById('producto-descripcion').textContent = producto.descripcion;

  const mainImage = document.getElementById('main-product-image');
  const miniaturas = document.querySelectorAll('.d-flex img');

  miniaturas[0].src = producto.img_delantera;
  miniaturas[1].src = producto.img_trasera;
  miniaturas[0].alt = `Portada de ${producto.nombre}`;
  miniaturas[1].alt = `Contraportada de ${producto.nombre}`;

  let currentIndex = 0; 

  mainImage.src = producto.img_delantera;
  mainImage.alt = miniaturas[0].alt;

  miniaturas.forEach(img => img.style.display = 'inline-block');
  if (miniaturas.length > 2) {
    for (let i = 2; i < miniaturas.length; i++) {
      miniaturas[i].style.display = 'none';
    }
  }

  miniaturas[0].addEventListener('click', () => {
    currentIndex = 0;
    updateMainImage();
  });
  miniaturas[1].addEventListener('click', () => {
    currentIndex = 1;
    updateMainImage();
  });

  function updateMainImage() {
    if (currentIndex === 0) {
      mainImage.src = producto.img_delantera;
      mainImage.alt = miniaturas[0].alt;
    } else {
      mainImage.src = producto.img_trasera;
      mainImage.alt = miniaturas[1].alt;
    }
  }

  const prevArrow = document.getElementById('prev-arrow');
  const nextArrow = document.getElementById('next-arrow');

  prevArrow.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? 1 : 0;
    updateMainImage();
  });

  nextArrow.addEventListener('click', () => {
    currentIndex = (currentIndex === 1) ? 0 : 1;
    updateMainImage();
  });

  [prevArrow, nextArrow].forEach(arrow => {
    arrow.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        arrow.click();
      }
    });
  });

  const container = document.querySelector('.image-slider-container');
  container.addEventListener('click', (e) => {
    const rect = container.getBoundingClientRect();
    const clickPos = e.clientX - rect.left;
    if (clickPos < rect.width / 2) {
      currentIndex = (currentIndex === 0) ? 1 : 0;
    } else {
      currentIndex = (currentIndex === 1) ? 0 : 1;
    }
    updateMainImage();
  });

  const relacionados = productos.filter(p => p.id !== producto.id).slice(0, 3);
  const relacionadosContainer = document.createElement('div');
  relacionadosContainer.classList.add('d-flex', 'flex-row', 'justify-content-start', 'gap-3', 'flex-wrap');

  relacionados.forEach(rel => {
    const item = document.createElement('div');
    item.style.flex = '1 1 calc(33% - 1rem)';
    item.innerHTML = `
      <div class="card h-100" style="max-width:100%;">
        <img src="${rel.img_delantera}" class="card-img-top" alt="Portada de ${rel.nombre}" style="height:350px; object-fit:contain; background:#f7f7f7;">
        <div class="card-body">
          <h6 class="card-title" style="font-size:1.05rem;">${rel.nombre}</h6>
          <div class="text-muted small">${rel.autor}</div>
          <div class="text-primary">${rel.precio}</div>
          <a href="producto_detalle.html?id=${rel.id}" class="btn btn-outline-primary btn-sm w-100">Ver detalle</a>
        </div>
      </div>
    `;
    relacionadosContainer.appendChild(item);
  });

  const relatedTitle = document.createElement('h5');
  relatedTitle.className = 'mb-3 mt-4';
  relatedTitle.textContent = 'Productos relacionados';

  const mainContainer = document.querySelector('main > .container');
  const hr = mainContainer.querySelector('hr');
  hr.insertAdjacentElement('afterend', relacionadosContainer);
  hr.insertAdjacentElement('afterend', relatedTitle);

function obtenerCarrito() {
  return JSON.parse(localStorage.getItem('carrito')) || [];
}

function guardarCarrito(cart) {
  localStorage.setItem('carrito', JSON.stringify(cart));
}

function actualizarContador() {
  const cart = obtenerCarrito();
  let total = 0;
  cart.forEach(item => total += item.cantidad);
  const span = document.getElementById('cart-count');
  if(span) span.textContent = total;
}

function agregarAlCarrito(prod, cantidad) {
  let cart = obtenerCarrito();
  const index = cart.findIndex(item => item.id === prod.id);
  if(index >= 0) {
    cart[index].cantidad += cantidad;
  } else {
    cart.push({
      id: prod.id,
      nombre: prod.nombre,
      precio: parseInt(prod.precio.replace(/[^\d]/g,'')),
      img_delantera: prod.img_delantera, 
      cantidad: cantidad
    });
  }
  guardarCarrito(cart);
  actualizarContador();
}

document.getElementById('carritoForm').addEventListener('submit', e => {
  e.preventDefault();
  let cantidad = parseInt(e.target.cantidad.value);
  if(!cantidad || cantidad < 1) cantidad = 1;
  agregarAlCarrito(producto, cantidad);
  alert(`Añadido ${cantidad} unidad(es) de ${producto.nombre} al carrito.`);
});

actualizarContador();
});
