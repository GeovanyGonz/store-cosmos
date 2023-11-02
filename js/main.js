//PRODUCTOS
const productos = [
    // Abrigos 
    {
        id: "abrigo-01",
        titulo: "Abrigo 01",
        imagen: "./img/abrigos/01.jpg",
        categoria: {
            nombre: "Chaquetas",
            id: "chaquetas"
        },
        precio: 1000,
    },
    {
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "./img/abrigos/02.jpg",
        categoria: {
            nombre: "Chaquetas",
            id: "chaquetas"
        },
        precio: 1000,
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "./img/abrigos/03.jpg",
        categoria: {
            nombre: "Chaquetas",
            id: "chaquetas"
        },
        precio: 1000,
    },
    {
        id: "abrigo-04",
        titulo: "Abrigo 04",
        imagen: "./img/abrigos/04.jpg",
        categoria: {
            nombre: "Chaquetas",
            id: "chaquetas"
        },
        precio: 1000,
    },
    {
        id: "abrigo-05",
        titulo: "Abrigo 05",
        imagen: "./img/abrigos/05.jpg",
        categoria: {
            nombre: "Chaquetas",
            id: "chaquetas"
        },
        precio: 1000,
    },
    {
        id: "abrigo-06",
        titulo: "Abrigo 06",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_951129-CBT50780035200_072022-O.webp",
        categoria: {
            nombre: "Chaquetas",
            id: "chaquetas"
        },
        precio: 1000,
    },
    {
        id: "abrigo-07",
        titulo: "Abrigo 07",
        imagen: "https://rtmmoda.com/wp-content/uploads/2020/11/Banner_3.jpg",
        categoria: {
            nombre: "Chaquetas",
            id: "chaquetas"
        },
        precio: 1000,
    },
    {
        id: "abrigo-08",
        titulo: "Abrigo 08",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_600266-MCO54718783839_032023-O.webp",
        categoria: {
            nombre: "Chaquetas",
            id: "chaquetas"
        },
        precio: 1000,
    },
    {
        id: "camiseta-01",
        titulo: "Camiseta 01",
        imagen: "./img/camisetas/01.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000,
    },
    {
        id: "camiseta-02",
        titulo:"Camiseta 02",
        imagen: "./img/camisetas/02.jpg",
        categoria:{
            nombre: "Camisetas",
            id : 'camisetas'
    },
        precio:  1000
    },
    {
        id: "camiseta-03",
        titulo:"Camiseta 03",
        imagen: "./img/camisetas/03.jpg",
        categoria:{
            nombre: "Camisetas",
            id : 'camisetas'
    },
        precio:  1000,
    },
    {
        id: "camiseta-04",
        titulo:"Camiseta 04",
        imagen: "./img/camisetas/04.jpg",
        categoria:{
            nombre: "Camisetas",
            id : 'camisetas'
    },
        precio:  1000,
    },
    {
        id: "camiseta-05",
        titulo:"Camiseta 05",
        imagen: "./img/camisetas/05.jpg",
        categoria:{
            nombre: "Camisetas",
            id : 'camisetas'
    },
        precio:  1000,
    },
    {
        id: "camiseta-06",
        titulo:"Camiseta 06",
        imagen: "https://www.lyh.com.co/wp-content/uploads/2022/11/4Q109146-Camiseta-para-hombre-tienda-de-ropa-LYH-moda-2.jpg",
        categoria:{
            nombre: "Camisetas",
            id : 'camisetas'
    },
        precio:  1000,
    },
    {
        id: "camiseta-07",
        titulo:"Camiseta 07",
        imagen: "https://m.media-amazon.com/images/I/61W9UtYj33L._AC_UL1500_.jpg",
        categoria:{
            nombre: "Camisetas",
            id : 'camisetas'
    },
        precio:  1000,
    },
    {
        id: "camiseta-08",
        titulo:"Camiseta 08",
        imagen: "./img/camisetas/08.jpg",
        categoria:{
            nombre: "Camisetas",
            id : 'camisetas'
    },
        precio:  1000,
    },
    {
        id: "pantalon-01",
        titulo:"Pantalon 01",
        imagen: "./img/pantalones/01.jpg",
        categoria:{
            nombre: "Pantalones",
            id : 'pantalones'
    },
        precio:  1000,
    },
    {
        id: "pantalon-02",
        titulo:"Pantalon 02",
        imagen: "./img/pantalones/02.jpg",
        categoria:{
            nombre: "Pantalones",
            id : 'pantalones'
    },
        precio:  1000,
    },
    {
        id: "pantalon-03",
        titulo:"Pantalon 03",
        imagen: "./img/pantalones/03.jpg",
        categoria:{
            nombre: "Pantalones",
            id : 'pantalones'
    },
        precio:  1000,
    },
    {
        id: "pantalon-04",
        titulo:"Pantalon 04",
        imagen: "./img/pantalones/04.jpg",
        categoria:{
            nombre: "Pantalones",
            id : 'pantalones'
    },
        precio:  1000,
    },
    {
        id: "pantalon-05",
        titulo:"Pantalon 05",
        imagen: "./img/pantalones/05.jpg",
        categoria:{
            nombre: "Pantalones",
            id : 'pantalones'
    },
        precio:  1000,
    },
    {
        id: "pantalon-06",
        titulo:"Pantalon 06",
        imagen: "https://i.linio.com/p/016fcab6c422015a7f5e1e553f416d4c-product.webp",
        categoria:{
            nombre: "Pantalones",
            id : 'pantalones'
    },
        precio:  1000,
    },
    {
        id: "pantalon-07",
        titulo:"Pantalon 07",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_722868-CBT54255595013_032023-O.webp",
        categoria:{
            nombre: "Pantalones",
            id : 'pantalones'
    },
        precio:  1000,
    },
    {
        id: "pantalon-08",
        titulo:"Pantalon 08",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_700206-CBT54255595045_032023-O.webp",
        categoria:{
            nombre: "Pantalones",
            id : 'pantalones'
    },
        precio:  1000,
    },
    {
        id: "pantalon-09",
        titulo:"Pantalon 09",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_694124-CBT54255595011_032023-O.webp",
        categoria:{
            nombre: "Pantalones",
            id : 'pantalones'
    },
        precio:  1000,
    },
    {
        id: "pantalon-10",
        titulo:"Pantalon 10",
        imagen: "https://m.media-amazon.com/images/I/71crMbYxlZL.jpg",
        categoria:{
            nombre: "Pantalones",
            id : 'pantalones'
    },
        precio:  1000,
    },
    {
        id: "pantalon-11",
        titulo:"Pantalon 11",
        imagen: "https://image.made-in-china.com/202f0j00vSZihNkRMacJ/Men-s-Jeans-Factory-Wholesale-Custom-Jeans-Men-s-Loose-Straight-High-Waist-Casual-Stretch-Business-Trousers-Jeans.webp",
        categoria:{
            nombre: "Pantalones",
            id : 'pantalones'
    },
        precio:  1000,
    },
    {
        id: "pantalon-12",
        titulo:"Pantalon 12",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_715719-MCO71255215534_082023-O.webp",
        categoria:{
            nombre: "Pantalones",
            id : 'pantalones'
    },
        precio:  1000,
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo} </h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>    
        `;
        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            console.log(productoCategoria);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
        
    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
        
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;

}