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
        </div>
    </div>
    `

    cartsection.appendChild(card)

})
}

rendercarrito(cartproducts)

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