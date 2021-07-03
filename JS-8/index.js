// // Task N1
// let letter1 = "das"
// let letter2 = "sba"

// letter1.length === letter2.length && letter1.split("").sort().join() === letter2.split("").sort().join() ? console.log(true) : console.log(false);

// // Task N2

// const numbers = [12, 13, 5, ,8, 7, 45, 998, 40, 85, 4, 33, 867, 100, 52, 1043]

// // tub sonlar

// function tubSon(){
//     return numbers.filter((value) => value % 2!==0 && value % 3!==0 && value % allNum!==0).sort((a, b) => a-b)
// }
// console.log("Tub sonlar: "+tubSon().join(", "));

// // juft sonlar
// function juftSon(){
//     return numbers.filter((value) => value % 2===0).sort((a, b) => a-b)
// }
// console.log("Juft sonlar: "+juftSon().join(", "));

// // toq sonlar
// function toqSon(){
//     return numbers.filter((value) => value % 2!==0).sort((a, b) => a-b)
// }
// console.log("Toq sonlar: "+toqSon().join(", "));







function sort_prime(num) {

  var prime_num1 = [],
      prime_num2 = [];
  for (var i = 0; i <= num; i++) {
    prime_num2.push(true);
  }
  for (var i = 2; i <= num; i++) {
    if (prime_num2[i]) {
      prime_num1.push(i);
      for (var j = 1; i * j <= num; j++) {
        prime_num2[i * j] = false;
      }
    }
  }

  return prime_num1;
}

console.log("Tub sonlar: " + sort_prime(25).length +"ta:", ""+sort_prime(25))
// console.log(""+sort_prime(22));

// console.log(sort_prime(5))
// console.log(sort_prime(11))




