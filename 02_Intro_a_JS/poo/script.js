/* 
const objeto1 = {
    nombre: "Lavatrastes",
    precio: 200,
    lote: 213242,
    tamano: 's'
}
 */
class Producto{
    //         ("Lavatrastes")
    constructor(nombre, precio, lote, tamano, id){
        this.nombre = nombre;
        this.precio = precio;
        this.lote = lote;
        this.tamano = tamano;
        this.image = 'https://www.engenerico.com/wp-content/uploads/2011/12/301211_medicamentogenerico.jpg';
        this.id = id || Math.ceil(Math.random() * 100);
    }

    generarCodigoBootstrap() {
        const element = document.createElement('h6');
        element.setAttribute("id", this.id);
        element.setAttribute("class", "text-primary-emphasis");
        const text = document.createTextNode(`Producto: ${this.nombre} - $ ${this.precio}`);
        element.appendChild(text);
        return element;
    }

    imprimirNombre() {
        return document.createElement('h6').appendChild(document.createTextNode(`Producto: ${this.nombre}`))
    }

    agregarImagen() {
        const element = document.createElement('img');
        element.setAttribute("src", this.image);
        element.setAttribute("width", 100);
        element.setAttribute("height", 100);
        element.setAttribute("alt", this.nombre);

        return element;
    }
}
/* 
const producto1 = new Producto("Lavatrastes", 200, 32434, 's');
const producto2 = new Producto("Lavadora", 200, 32434, 's', 'id_product2');
const producto3 = new Producto("Salchicha", 200, 32434, 's');



console.log(producto1);

producto1.imprimirNombre();
const html = producto2.imprimirNombre();


document.getElementById(producto2.id).appendChild(html);

producto3.fechaCaducidad = '12/12/12';

console.log(producto3);
 */
const productos = [
    { nombre: "Crema", precio: 32},
    { nombre: "Tostadas", precio: 30},
    { nombre: "Perfume", precio: 230},
    { nombre: "Lavadora", precio: 32220},
    { nombre: "Lavatrastes", precio: 23320},
    { nombre: "Helado", precio: 20}
];

const objetosProducto = productos.map((elementoActual)=>{
    const nombre = elementoActual.nombre;
    const precio = elementoActual.precio;
    const lote = Math.ceil(Math.random() * 1000000);
    const tamano = Math.ceil(Math.random() * 100);
    const id = Math.ceil(Math.random() * 1000);
    return new Producto(nombre, precio, lote, tamano, id);
});

const misProductosHTML = document.getElementById('section--productos');

for(producto of objetosProducto){
    misProductosHTML.appendChild(producto.agregarImagen());
    misProductosHTML.appendChild(producto.generarCodigoBootstrap());
}