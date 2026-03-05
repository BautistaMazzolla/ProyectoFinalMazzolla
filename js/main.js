// Productos
const productos= [
    { 
    
    id: 1,
    nombre: "remera local titular",
    precio: 40.000,

    },

    {
    id: 2,
    nombre: "remera visitante suplente",
    precio: 35.000,
    },
    
    {
    id: 3,
    nombre: "short de futbol local",
    precio: 20.000
    },

    {
    id: 4,
    nombre: "short de futbol visitante",
    precio: 20.000,
    },

    {
    id: 5,
    nombre: "buzo de entrenamiento con cierre",
    precio: 30.000,
    },

    {
    id: 6,
    nombre: "buzo de entrenamiento con capucha",
    precio: 25.000,
    },
    
    {
    id: 7,
    nombre: "buzo de entrenamiento con capucha",
    precio: 25.000,
    },

    {
    id: 8,
    nombre: "medias largas blancas",
    precio: 25.000
    }
];

let container_sanlorenzo = document.getElementById("container_sanlorenzo") 

function renderproductos (productosArray) {
    productosArray.forEach(productos => {
        const card  = document.createElement("div")

        card.innerHTML = `
<h3>${productos.nombre}</h3>
<h4>${productos.precio}</h4>
<button class="productoAgregar" id="${productos.id}">Agregar</button>
`

        container_sanlorenzo.appendChild(card)
    });
}
    renderproductos(productos)

    function agregaralcarrito () {
        Addbutton = document.querySelectorAll (".agregarproducto")
        Addbutton.forEach(button => {
            button.onclick = (e) => {
                const productid = e.currentTarget.id
                const selectedproduct = productos.find(producto => producto.id == productid)
                cartproducts.push(selectedproduct)

                localStorage.setItem("cartproducts", cartproducts)
                console.log(cartproducts)
            }
        })
    }productos