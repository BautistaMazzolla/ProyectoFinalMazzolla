let cartstorage = localStorage.getItem("cartproducts")

let cartproducts = JSON.parse(cartstorage)

let cartsection = document.getElementById("productoscarrito")

function rendercarrito(cartitems){

    cartitems.forEach(producto=>{

        const card = document.createElement("div")

        card.innerHTML = `
        <h3>${producto.nombre}</h3>
        <h4>${producto.precio}</h4>
        `

        cartsection.appendChild(card)

    })
}

rendercarrito(cartproducts)