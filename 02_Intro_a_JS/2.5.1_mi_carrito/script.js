const productos = [
    { nombre: "Crema", precio: 32, cantidad: 4 },
    { nombre: "Tostadas", precio: 30, cantidad: 2 },
    { nombre: "Perfume", precio: 320, cantidad: 100 }
];

const carrito = {
    subtotal: 0,
    productos: []
}

const mostrarProductos = () => {
    // for que cree el html de un producto
/* 
    <div class="col">
                <div class="card h-100">
                    <div class="card-header">
                      Nombre
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Precio</h5>
                      <p class="card-text">Cantidad</p>
                      <button class="btn btn-outline-primary" onclick="agregarAlCarrito()" id="Crema">Agregar al carrito</button>
                    </div>
                </div>
            </div> */
};

const agregarAlCarrito = (nombre) => {
    //traer el valor del id del elemento => this
/*     for(productos){
       if  productos[i].nombre === nombre {
        if productos[i].cantidad > 0{
             // cambiar
             productos[i].cantidad--;
        }
           
       }
    } */
}