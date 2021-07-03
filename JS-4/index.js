
// task N1:  10 dan 0 gacha;
let i = 10;
for(i; i>0; i--){
    console.log(i)
};

// task N2: 0 dan 10 gacha juft son & toq son;
let a = 1;
for(a; a<=10; a++){
    if(a%2 === 0){
        console.log(a)
    }
}
let a2 = 1;
for(a2; a2<=10; a2++){
    if(a2%2 !== 0){
        console.log(a2)
    }
}

// task N3: 100 gacha 3 ga karrali sonlar;
let b = 1;
for (b; b<=100; b++) {
    if (b%3 === 0) {
        console.log(b)
    }
}

// task N4:  100 gacha 3 va 5 ga karrali sonlar;
let c = 1;
for (c; c<=100; c++) {
    if (c%3 === 0 || c%5 === 0 ){
        console.log(c)
    }
}
