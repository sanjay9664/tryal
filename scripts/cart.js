let arr = JSON.parse(localStorage.getItem("item"))

arr.forEach(function(el, index) {

    let div = document.createElement("div")

    let name = document.createElement("p")

    name.innerText = el.name

    let image = document.createElement("img")
    image.src = el.image

    let price = document.createElement("p")

    price.innerText = el.price

    let btn = document.createElement("button")

    btn.innerText = "remove"

    btn.addEventListener("click", function() {

        removeItem(el, index)
    })



    div.append(image, name, price, btn)

    document.getElementById("cart").append(div)

})

function removeItem(el, index) {
    arr.splice(index, 1)

    localStorage.setItem("item", JSON.stringify(arr))

    window.location.reload()
}

let sum = 0

for (let a = 0; a < arr.length; a++) {
    sum += arr[a].price
}

document.getElementById("cart_total").append(sum)

console.log(sum)