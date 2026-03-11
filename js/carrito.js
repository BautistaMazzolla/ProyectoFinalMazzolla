let cartstorage = localStorage.getItem("cartproducts")

let cartproducts = JSON.parse(cartstorage)

let cartsection = document.getElementById("productoscarrito")

function rendercarrito(cartitems){

    cartitems.forEach(producto=>{

    const card = document.createElement("div")

    card.innerHTML = `
    <div class="cart-card">
        <img src="${producto.img}" width="80">
        <div class="cart-info">
            <h3>${producto.nombre}</h3>
            <h4>$${producto.precio}</h4>
            <button class="eliminar" data-id="${producto.id}">Eliminar</button>
        </div>
    </div>
    `

    cartsection.appendChild(card)

})
}

rendercarrito(cartproducts)

function eliminarProducto(){

const botonesEliminar = document.querySelectorAll(".eliminar")

botonesEliminar.forEach(boton => {

    boton.onclick = (e)=>{

        const id = e.currentTarget.dataset.id

        cartproducts = cartproducts.filter(
            producto => producto.id != id
        )

        localStorage.setItem("cartproducts", JSON.stringify(cartproducts))

        location.reload()
    }

})

}

eliminarProducto()

function calcularTotal(cartitems){
    let total = 0

    cartitems.forEach(producto=>{
        total += producto.precio
    })

    return total
}

let total = calcularTotal(cartproducts)

let totalHTML = document.createElement("h2")
totalHTML.innerText = "Total: $" + total

cartsection.appendChild(totalHTML)

let vaciarBtn = document.createElement("button")
vaciarBtn.innerText = "Vaciar carrito"

vaciarBtn.onclick = () => {
    localStorage.removeItem("cartproducts")
    location.reload()
}

cartsection.appendChild(vaciarBtn)

let comprarBtn = document.createElement("button")
comprarBtn.innerText = "Finalizar compra"

comprarBtn.onclick = () => {

Swal.fire({
  title: "¡Compra realizada!",
  text: "Gracias por comprar en la tienda de San Lorenzo",
  icon: "success",
  imageUrl: "../assets/img/compra.gif",
  imageWidth: 400,
  confirmButtonText: "Aceptar"
})

localStorage.removeItem("cartproducts")

}

cartsection.appendChild(comprarBtn)