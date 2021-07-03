function oper(amallar) {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let all = document.getElementById('result');
    if (amallar === "+") {
        all.value = +number1 + (+number2)
    }
    if (amallar === "-") {
        all.value = number1 - number2
    }
    if (amallar === "*") {
        all.value = number1 * number2
    }
    if (amallar === "/") {
        all.value = number1 / number2
    }
}

function oper2(event) {
    let number3 = document.getElementById('number3').value;
    let number4 = document.getElementById('number4').value;
    let all = document.getElementById('result2');
    if (event.target.value === "+") {
        all.value = +number3 + (+number4)
    }
    if (event.target.value === "-") {
        all.value = number3 - number4
    }
    if (event.target.value === "*") {
        all.value = number3 * number4
    }
    if (event.target.value === "/") {
        all.value = number3 / number4
    }
}

function getRegion(event) {
    document.getElementById('region').innerHTML = event.target.value
}

//i+=2
//i=i+2
//15=3,5,6,9,10,12,15=60
let natija = 0;
let natija2 = 0;
for (let i = 1; i <= 5; i++) {
    natija += i;
}
console.log(natija);
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        natija2 += i
        //natija2=0+3
        //natija2=3+5
        //natija2=8+6
        //natija2=14+9
        //natija2=23+10
        //natija2=33+12
        //natija2=45+15=60
    }
}
console.log(natija2);

let users = [
    {
        firstName: 'Nizom',
        lastName: 'Muhammatov',
        age: 23,
        company: "Bank",
        salary: '$1000'
    },
    {
        firstName: 'Ozodbek',
        lastName: 'Oripjonov',
        age: 23,
        company: "Exedel",
        salary: '$1500'
    },
    {
        firstName: 'Azizbek',
        lastName: 'Mirzaahmatov',
        age: 22,
        company: "IT MED",
        salary: '$600'
    },
    {
        firstName: 'Jafarbek',
        lastName: 'Torayev',
        age: 24,
        company: "PDP",
        salary: '$2000'
    },
];

function drawList() {
    for (let i = 0; i < users.length; i++) {
        document.getElementById('getUserList').innerHTML +=
            '<tr>' +
            '<td>' + (i+1) + '</td>' +
            '<td>' + users[i].firstName + '</td>' +
            '<td>' + users[i].lastName + '</td>' +
            '<td>' + users[i].age + '</td>' +
            '<td>' + users[i].company + '</td>' +
            '<td>' + users[i].salary + '</td>' +
            '<tr>'
    }
}

drawList();




