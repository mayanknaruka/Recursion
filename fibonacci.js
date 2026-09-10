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

