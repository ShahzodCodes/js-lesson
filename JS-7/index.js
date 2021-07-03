// age = 11

// function Fac(age){
//     age < 15 ? console.log("not excepted") : console.log("excepted");
// }
// Fac(26)

// let num = 6.3;
// console.log(Math.round(num))

function roundFunc(number){
    number*=10
    let a = parseInt(number/10) //14
    let b = number%10 //8
    if(b>5){
        return a+1
    }return a
}
console.log(roundFunc(14.8));

const kvadrat = (a, b) => a**b
console.log(kvadrat (5, 3))

// function kvadrat2(a, b){
//     return a**b
// }
// console.log(kvadrat2(4, 3));

const ildiz = (i) => i**0.5
console.log(ildiz(81));

function abcFunc(minNum){
    if(minNum<0){
        return minNum*(-1)
    } else{
        return minNum
    }
}
console.log(abcFunc(25))

function ceilFunc(number){
    number*=10
    let a = parseInt(number/10) //14
    let b = number%10 //8
    if(b<=9){
        return a+1
    }
}
console.log(ceilFunc(14.1));

function floorFunc(number){
    number*=10
    let a = parseInt(number/10) //14
    let b = number%10 //8
    if(b>9){
        return a+1
    } return a
}
console.log(floorFunc(14.9));
