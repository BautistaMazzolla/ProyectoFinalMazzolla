// Productos
const productos= [
    { 
    id: 1,
    nombre: "Camiseta Titular San Lorenzo de Almagro ",
    precio: 40000,
    img: "../assets/img/remera_titular.webp"
    },

    {
    id: 2,
    nombre: "Camiseta Suplente San Lorenzo de Almagro",
    precio: 35000,
    img: "../assets/img/remerasuplente.webp"
    },
    
    {
    id: 3,
    nombre: "Short Titular San Lorenzo de Almagro ",
    precio: 20000,
    img: "../assets/img/shortazul.webp"
    },

    {
    id: 4,
    nombre: "Short Suplente San Lorenzo de Almagro ",
    precio: 20000,
    img: "../assets/img/shortblanco.webp"
    },

    {
    id: 5,
    nombre: "Buzo De Entrenamiento San Lorenzo de Almagro",
    precio: 30000,
    img: "../assets/img/buzoconcierre.jfif"
    },

    {
    id: 6,
    nombre: "Campera Con Capucha San Lorenzo de Almagro",
    precio: 25000,
    img: "../assets/img/buzoconcapucha.jfif"
    },
    
    {
    id: 7,
    nombre: "Medias Alternativa San Lorenzo de Almagro ",
    precio: 25000,
    img: "../assets/img/mediasblancas.webp"
    },

    {
    id: 8,
    nombre: "Musculosa Entrenamiento San Lorenzo de Almagro ",
    precio: 25000,
    img: "../assets/img/musculosa.webp"
    },

    {
    id: 9,
    nombre: "Pantalón Largo San Lorenzo de Almagro",
    precio: 25000,
    img: "../assets/img/pantalonlargo.webp"
    }
];

let cartproducts = []

let container_sanlorenzo = document.getElementById("container_sanlorenzo")

function renderproductos(productosArray){
    productosArray.forEach(producto => {

        const card = document.createElement("div")

        card.innerHTML = `
        <img src="${producto.img}" width="150">
        <h3>${producto.nombre}</h3>
        <h4>${producto.precio}</h4>
        <button class="productoAgregar" id="${producto.id}">Agregar</button>

        `

        container_sanlorenzo.appendChild(card)
    })
}

renderproductos(productos)

function agregaralcarrito(){
    const Addbutton = document.querySelectorAll(".productoAgregar")

    Addbutton.forEach(button=>{
        button.onclick = (e)=>{
            const productid = e.currentTarget.id

            const selectedproduct = productos.find(
                producto => producto.id == productid
            )

            cartproducts.push(selectedproduct)

            localStorage.setItem("cartproducts", JSON.stringify(cartproducts))

            console.log(cartproducts)
        }
    })
}

agregaralcarrito()