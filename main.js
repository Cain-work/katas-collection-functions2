function add(x, y) {
    return x + y
}
console.log(add(2, 4))

function multiply(x, y) {

    let number = 0

    for (let counter = 0; counter < y; counter++) {

        number = add(x, number)


        console.log("number ", number)
    }
    return number
}

console.log(multiply(6, 4))


function power(x, y) {
    let expon = 1

    for (let counter = 0; counter < y; counter++) {

        expon = multiply(x, expon)

        console.log("expon ", expon)

    }
    return expon

}
console.log(power(3, 4))

function factorial(c) {
    let total = 1

    for (let counter = c; counter >= 0; counter --) {
        console.log(counter)
        total = multipy(c, total)

        console.log(multiply(4))

    }
    return total
}
