let cartproducts = []

let container_sanlorenzo = document.getElementById("container_sanlorenzo")

fetch("../assets/data/productos.json")
.then(response => response.json())
.then(productos => {

    renderproductos(productos)
    agregaralcarrito(productos)

})


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


function agregaralcarrito(productos){

    const Addbutton = document.querySelectorAll(".productoAgregar")

    Addbutton.forEach(button => {

        button.onclick = (e)=>{

            const productid = e.currentTarget.id

            const selectedproduct = productos.find(
                producto => producto.id == productid
            )

            cartproducts.push(selectedproduct)

            localStorage.setItem("cartproducts", JSON.stringify(cartproducts))

            Swal.fire({
                title: "Producto agregado",
                text: selectedproduct.nombre,
                icon: "success"
            })

        }

    })
}