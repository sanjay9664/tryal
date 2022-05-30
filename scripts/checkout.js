function getdata(event) {
    event.preventDefault()

    let form = document.getElementById("form")

    let name = form.name.value

    console.log(name)

    let number = form.number.value
    console.log(number)

    let add = form.address.value

    console.log("add")

    alert("your order is accepted")

    let a = setInterval(function() {
        alert("your order is being packed")
    }, 100)
    let b = setInterval(function() {
        alert("your order arrive soon")
    }, 100)
    let c = setInterval(function() {
        alert("piced your order ")
    }, 100)
    let d = setInterval(function() {
        alert("finally your order is deliver")
    }, 100)

}