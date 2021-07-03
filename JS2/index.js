let num1 = 5;
let num2 = 10;
let num3;
num3 = num1;  //5
num1 = num2; //10
num2 = num3; //5

console.log(num1);
console.log(num2);


/*Reference type*/
//object
let user = {
    firstName: 'Ali',
    lastName: 'Valiyev',
    age: 25,
    isMarried: false,
    group: 91,
    fullName: function () {
        return this.lastName + ' ' + this.firstName
    }
};
user.group = 90;
console.log(user);
console.log(user.age);
console.log(user['lastName']);

//arrays
let numbers = [5, 8, 45, 32, 87];
let colors = ['red', 'blue', 'white', 'green'];
let students = [
    {
        firstName: 'Nodir',
        age: 32,
        group: 85
    },
    {
        firstName: 'Qodir',
        age: 56,
        group: 99
    },
    {
        firstName: 'Botir',
        age: 28,
        group: 17
    },
];
numbers[2] = 55;
colors[3] = 'yellow';
students[2].firstName = students[2].firstName + 'jon';

console.log(numbers);
console.log(numbers.length);
console.log(numbers[2]);
console.log(colors[3]);
console.log(students);
console.log(students[2].firstName);

//function

function plus(x, y, z) {
    console.log(x + y + z);
}

plus(20, 10, 25);

const pi = 3.14;
console.log(pi);


document.getElementById('group').innerHTML = user.group;
document.getElementById('age').innerHTML = user.age;
document.getElementById('userName').innerHTML = user.fullName();


let num10 = 58;
console.log(5 === '5');
console.log(10 >= 4);

// mantiqiy yoki ||  +
//mantiqiy va   &&   *
console.log(false || false);  // 1 || 0
console.log(true && true);  // 1 || 0

let hour = 7;
let result = hour > 9 ? 'Dars boshlandi' : 'Dars boshlanmadi';
console.log(result);


let ball = 86;
if (ball >= 56 && ball < 71) {
    console.log('Balingiz: 3')
} else if (ball >= 71 && ball < 86) {
    console.log('Balingiz: 4')
} else if (ball >= 86 && ball <= 100) {
    console.log('Balingiz: 5')
} else {
    console.log('Yiqildingiz')
}

let word = 'ruler';

switch (word) {
    case 'pencil':
        console.log('qalam');
        break;
    case "pen":
        console.log('ruchka');
        break;
    case "ruler":
        console.log('chizgich');
        break;
    default:
        console.log('Bu sozni tarjimasi yoq')
}

let year=2096;
