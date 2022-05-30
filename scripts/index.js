// Store cart items in local storage with key: "items"



const url = `https://grocery-masai.herokuapp.com/items`

fetch(url)
    .then(function(res) {
        return res.json()
    })
    .then(function(res) {
        var arr = res.data

        arr.forEach(function(el, index) {

            let div = document.createElement("div")

            let name = document.createElement("p")

            name.innerText = el.name

            let image = document.createElement("img")
            image.src = el.image

            let price = document.createElement("p")

            price.innerText = el.price

            let btn = document.createElement("button")

            btn.innerText = "Add To Cart"

            btn.addEventListener("click", function() {

                addtocart(el, index)

                a = JSON.parse(localStorage.getItem("item")).length
                zero_count.innerText = a
            })



            div.append(image, name, price, btn)

            document.getElementById("items").append(div)



        })
    })
    .catch(function(res) {
        console.log(res)
    })


let arr = JSON.parse(localStorage.getItem("item")) || []


function addtocart(el, index) {
    arr.push(el)

    localStorage.setItem("item", JSON.stringify(arr))
}