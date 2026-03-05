let cartstorage = localStorage.getItem("cartproducts")
cartproducts = JSON.parse(cartstorage)

let cartsection = document.getElementById("cart-section")

function rendercarrito (cartitems) {
    cartitems.forEach(producto => {
        const card  = document.createElement("div")

        card.innerHTML = `
<h3>${productos.nombre}</h3>
<h4>${productos.precio}</h4>`
cartsection.appendChild(card)
    });
}

rendercarrito(cartproducts)