// Productos
const productos = [
    { nombre: "Remera", precio: 5000 },
    { nombre: "Pantalón", precio: 8000 },
    { nombre: "Zapatillas", precio: 15000 }
];

// Mostrar productos
const mostrarProductos = () => {
    let mensaje = "Productos disponibles:\n";

    for (let i = 0; i < productos.length; i++) {
        mensaje += (i + 1) + " - " + productos[i].nombre +
        " ($" + productos[i].precio + ")\n";
    }

    alert(mensaje);
};

// Elegir producto
const elegirProducto = () => {
    return parseInt(prompt("Ingrese el número del producto:"));
};

// Calcular total
const calcularTotal = (opcion, cantidad) => {
    let producto = productos[opcion - 1];
    return producto.precio * cantidad;
};

// Programa principal
mostrarProductos();

let opcion = elegirProducto();
let cantidad = parseInt(prompt("Ingrese la cantidad:"));

if (opcion >= 1 && opcion <= productos.length && cantidad > 0) {
    let total = calcularTotal(opcion, cantidad);

    console.log("Producto:", productos[opcion - 1].nombre);
    console.log("Cantidad:", cantidad);
    console.log("Total:", total);

    alert(
        "Producto: " + productos[opcion - 1].nombre +
        "\nCantidad: " + cantidad +
        "\nTotal a pagar: $" + total
    );
} else {
    alert("Datos inválidos");
}