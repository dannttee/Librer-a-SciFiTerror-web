// ==================== DATOS DE PRODUCTOS TUS LIBROS ====================
const productosCategoria = {
    "Ciencia ficción": [
        {
            id: 'dune',
            nombre: 'Dune',
            autor: 'Frank Herbert',
            precio: 9092,
            imagen: 'DUNE.jpg'
        },
        {
            id: 'neuromante',
            nombre: 'Neuromante nº 01',
            autor: 'William Gibson',
            precio: 13990,
            imagen: 'NEUROMANTE.jpg'
        },
        {
            id: 'problema-tres-cuerpos',
            nombre: 'El problema de los tres cuerpos',
            autor: 'Cixin Liu',
            precio: 14990,
            imagen: 'El problema de los tres cuerpos.jpg'
        },
        {
            id: 'cronicas-marcianas',
            nombre: 'Crónicas Marcianas',
            autor: 'Ray Bradbury',
            precio: 12500,
            imagen: 'Crónicas Marcianas.jpg'
        },
        {
            id: 'fahrenheit-451',
            nombre: 'Fahrenheit 451',
            autor: 'Ray Bradbury',
            precio: 10990,
            imagen: 'Fahrenheit451.jpg'
        },
        {
            id: 'soy-leyenda',
            nombre: 'Soy Leyenda',
            autor: 'Richard Matheson',
            precio: 11800,
            imagen: 'SoyLeyenda.jpg'
        },
        {
            id: 'androide-ovejas-electricas',
            nombre: '¿Sueñan los androides con ovejas eléctricas?',
            autor: 'Philip K. Dick',
            precio: 13200,
            imagen: '¿Sueñan los androides con ovejas eléctricas.jpg'
        },
        {
            id: 'metro-2033',
            nombre: 'Metro 2033',
            autor: 'Dmitry Glukhovsky',
            precio: 12800,
            imagen: 'Metro2033.jpg'
        },
        {
            id: 'hombre-ilustrado',
            nombre: 'El hombre ilustrado',
            autor: 'Ray Bradbury',
            precio: 13700,
            imagen: 'ElHombreIlustrado.jpg'
        },
        {
            id: 'hyperion',
            nombre: 'Hyperion',
            autor: 'Dan Simmons',
            precio: 14300,
            imagen: 'Hyperion.jpg'
        }
    ],
    "Terror": [
        {
            id: 'frankenstein',
            nombre: 'Frankenstein',
            autor: 'Mary Shelley',
            precio: 10500,
            imagen: 'FRANKENSTEIN.jpg'
        },
        {
            id: 'it',
            nombre: 'It',
            autor: 'Stephen King',
            precio: 7793,
            imagen: 'IT.jpg'
        },
        {
            id: 'llamada-cthulhu',
            nombre: 'La llamada de Cthulhu',
            autor: 'H.P. Lovecraft',
            precio: 9990,
            imagen: 'La llamada de Cthulhu.jpg'
        },
        {
            id: 'exorcista',
            nombre: 'El Exorcista',
            autor: 'William Peter Blatty',
            precio: 11500,
            imagen: 'El Exorcista.jpg'
        },
        {
            id: 'noche-muertos-vivientes',
            nombre: 'La noche de los muertos vivientes',
            autor: 'John Russo',
            precio: 9990,
            imagen: 'La noche de los muertos vivientes.jpg'
        },
        {
            id: 'cementerio-animales',
            nombre: 'Cementerio de animales',
            autor: 'Stephen King',
            precio: 12000,
            imagen: 'CementerioAnimales.jpg'
        },
        {
            id: 'resplandor',
            nombre: 'El resplandor',
            autor: 'Stephen King',
            precio: 10900,
            imagen: 'ElResplandor.jpg'
        }
    ],
    "Novelas": [
        {
            id: '1984',
            nombre: '1984',
            autor: 'George Orwell',
            precio: 7692,
            imagen: '1984.jpg'
        },
        {
            id: 'sombra-noche',
            nombre: 'La Sombra de la Noche / Shadow of Night',
            autor: 'Deborah Harkness',
            precio: 13500,
            imagen: 'La Sombra de la Noche.jpg'
        },
        {
            id: 'la-carretera',
            nombre: 'La Carretera',
            autor: 'Cormac McCarthy',
            precio: 10600,
            imagen: 'LaCarretera.jpg'
        }
    ]
};

// ==================== ACTUALIZAR CONTADOR DEL CARRITO ====================
function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

// ==================== FILTRAR CATEGORÍA ====================
function filtrarCategoria(categoria) {
    const productos = productosCategoria[categoria] || [];
    const container = document.getElementById('productsContainer');
    const categoryTitle = document.getElementById('categoryTitle');

    categoryTitle.textContent = `📚 Categoría: ${categoria} (${productos.length} productos)`;
    container.innerHTML = '';

    if (productos.length === 0) {
        container.innerHTML = '<p>No hay productos en esta categoría</p>';
        return;
    }

    productos.forEach(producto => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-card';
        productDiv.innerHTML = `
            <div class="product-image">
                <img src="${producto.imagen}" alt="${producto.nombre}" onerror="this.src='placeholder.jpg'">
            </div>
            <div class="product-info">
                <h3>${producto.nombre}</h3>
                <p class="autor">${producto.autor}</p>
                <div class="product-footer">
                    <span class="price">$${producto.precio.toLocaleString()}</span>
                    <button class="btn-add-cart" onclick="agregarAlCarrito('${producto.id}', '${producto.nombre}', ${producto.precio}, '${producto.imagen}')">
                        🛒 Agregar
                    </button>
                </div>
            </div>
        `;
        container.appendChild(productDiv);
    });
}

// ==================== AGREGAR AL CARRITO ====================
function agregarAlCarrito(id, nombre, precio, imagen) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    const productoExistente = carrito.find(p => p.id === id);
    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ id, nombre, precio, imagen, cantidad: 1 });
    }
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContadorCarrito();
    alert(`${nombre} agregado al carrito`);
}

// ==================== INICIALIZAR AL CARGAR LA PÁGINA ====================
document.addEventListener('DOMContentLoaded', function() {
    actualizarContadorCarrito();
});
