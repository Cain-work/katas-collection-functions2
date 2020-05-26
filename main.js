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
