const fibs = function(number){

    const arr = []

    if(number == 0){
        return arr 
    }

    if(number == 1){
        return[0]
    }

    arr.push(0,1)

    for (let i = 2; i < number; i++) {

       const nextNumber = arr[arr.length -1] + arr [arr.length-2]
        arr.push(nextNumber)
    }

    return arr
} 

// recursive function 

const fibsRec = function(number){

    if (number == 0) { 
        return [] 
    }
    if (number == 1 ){
        return[0]
    }
    if(number == 2 ){
        return [0,1]
    }

    const previous = fibsRec(number - 1)

    const nextNumber = previous[previous.length - 1] + previous[previous.length - 2]

    previous.push(nextNumber)

    return previous
}

console.log(fibs(0))
console.log(fibs(1))
console.log(fibs(2))
console.log(fibs(5))
console.log(fibs(8))

console.log(fibsRec(0))
console.log(fibsRec(1))
console.log(fibsRec(2))
console.log(fibsRec(5))
console.log(fibsRec(8))