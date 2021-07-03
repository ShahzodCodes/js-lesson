let num1 = -2;
let num2 = -5;
let num3 = -2;
let res = 0;

if (num1 > 0) {
    res++
}
if (num2 > 0) {
    res = res + 1
}
if (num3 > 0) {
    res++
}
console.log('Musbat sonlar: ' + res);

let birinchiRaqam = 20;
let ikkinchiRaqam = 10;
if (birinchiRaqam < ikkinchiRaqam) {
    console.log(1)
} else {
    console.log(2)
}

let year = 1700;
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(366)
} else {
    console.log(365)
}

let number = 6;

if (number > 0 && number < 10) {
    if (number % 2 === 0) {
        console.log('1 xonali juft son')
    } else {
        console.log('1 xonali toq son')
    }
} else if (number >= 10 && number < 100) {
    if (number % 2 === 0) {
        console.log('2 xonali juft son')
    } else {
        console.log('2 xonali toq son')
    }

} else if (number >= 100 && number < 1000) {
    if (number % 2 === 0) {
        console.log('3 xonali juft son')
    } else {
        console.log('3 xonali toq son')
    }

} else {
    console.log('Bu son shartni qanoatlantirmaydi')
}

let day=80;
let isWeekend=true;
let isSummer=true;

if ((day>=60 && day<=90) || (day>90 && day<=100 && !isSummer)){
    console.log(true)
}
else{
    console.log(false)
}

function getInputValue() {
    let natija=document.getElementById('myInput').value;
    document.getElementById('res').innerHTML=natija
}

function getWeek() {
    let weekDay=document.getElementById('week').value;
    switch (parseInt(weekDay)) {
        case 1:
            document.getElementById('day').innerHTML='Dushanba';
            break;
        case 2:
            document.getElementById('day').innerHTML='Seshanba';
            break;
        case 3:
            document.getElementById('day').innerHTML='Chorshanba';
            break;
        case 4:
            document.getElementById('day').innerHTML='Payshanba';
            break;
        case 5:
            document.getElementById('day').innerHTML='Juma';
            break;
        case 6:
            document.getElementById('day').innerHTML='Shanba';
            break;
        case 7:
            document.getElementById('day').innerHTML='Yakshanba';
            break;
        default:
            document.getElementById('day').innerHTML='Bunday hafta kuni yoq'

    }
}
