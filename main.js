function add (x, y){
    return x + y
}
console.log(add(2, 4))

function multiply(x, y){

    let number = 0

    for (let counter=0; counter<y; counter++) {

        number = add(x, number) 
        
        console.log (add(x, number))
        console.log ("number ", number)
    }
}

    console.log (multiply(6, 4))

    
    let expon = 0
function power(x, y){

    for (let counter=0; counter<y; counter ++ ) {
        
        expon = add(x, expon)

        console.log (add(x, expon))
        console.log ("expon ", expon)

    }
}
    console.log (power(3, 4))
