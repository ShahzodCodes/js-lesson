console.log('hello world');
console.log(document);

/*let,var*/

let text = 'my first js code';

text = 'my second js code';

console.log(text);

/*1.Son bilan boshlanmasligi kerak
let 45number=445
*/

/*2.Probel va chiziqchalar ishlatilmaydi
 let count number=5
 let count-number=5;
 */

//let phone_number=45;

/*3.Case sensitive
 let number=56;
let Number=58;
 */

/*4.Camel case Paskal case foydalaniladi
let phoneNumber;  //camel case
let PhoneNumber;  //paskal case
*/
/*5.if,else,switch,for,
let for=56
* */


//Primitive type
/*string,number,boolean,undefined,null,NaN*/

//Reference type
/*object,array,function,class*/

let firstName = "Ali";
console.log(firstName);
console.log(typeof firstName);

let age = 25;
console.log(age);
console.log(typeof age);

let isMarried = true;
console.log(isMarried);
console.log(typeof isMarried);

let count;
console.log(count);
console.log(typeof count);

let price = null;  //0,''
console.log(price);
console.log(typeof price);

/*let lastName='valiyev',num2,num3=15;
console.log(lastName); //valiyev
console.log(num2);  //undefined
console.log(num3);  //15
*/

let lastName = 'bob';
let num2;
let num3 = 15;
console.log(lastName); //bob
console.log(num2);  //undefined
console.log(num3);  //15


let myVariable = 'lorem';
console.log(myVariable);
console.log(typeof myVariable);

myVariable = 23;
console.log(myVariable);
console.log(typeof myVariable);

myVariable = false;
console.log(myVariable);
console.log(typeof myVariable);

let number1 = 9;
let number2 = 4;

let myText = 'text';
let myText2 = 'PDP';
console.log(number1 + number2); //13
console.log(number1 - number2); //5
console.log(number1 * number2); //36
console.log(number1 / number2); //2.25
console.log(number1 % number2); //1
console.log(number1 ** number2); //6561

console.log(Math.pow(number1, 2)); //9*9=81
console.log(Math.sqrt(number2));  //2

console.log(number1 + myText);  //9text
console.log(myText2 + myText);  //PDPtext
console.log('5' + '4');  //54
console.log('5' + 5); //55
console.log('5' * 5); //25
console.log('text' * 5); //25

let son = 15;
console.log(son); //15
console.log(son++); //15  +1
console.log(son); //16

console.log(++son); //17

console.log(son); //17
console.log(son--); //17
console.log(son); //16
console.log(--son); //15

//9+4=13
//9+4+7=20
console.log(number1 + '+' + number2+'='+(number1+number2));
console.log(number1 + '+' + number2+'+' + 7  +'='+(number1+number2+7));

//46 / 9= 5

console.log((46-(46%9))/9);

document.getElementById('ism').innerHTML=30;
