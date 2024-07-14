function sumVicDef (numV, numD){
return numV - numD
}

//Captures user victories ​​and convert to numbers
let numV = parseInt(prompt("Enter number of victories: "),10)
//Captures user defeats and convert to numbers
let numD = parseInt(prompt("Enter number of defeats: "),10)
//Result
let balance = sumVicDef(numV, numD)

function classification(balance){
    if (balance <=10){
        return "Iron"
    }else if(balance <=20){
        return "Bronze"
    }else if(balance <=50){
        return "Silver"
    }else if(balance <=80){
        return "Gold"
    }else if(balance <=90){
        return "Diamond"
    }else if(balance <=100){
        return "Legendary"
    }else{
        return "Immortal"
    }
}
console.log(`The Hero has a balance of ${balance} and is at rank ${classification} `)