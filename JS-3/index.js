// first part

let baho =100;

if (baho>=95 && baho<=100){
    console.log("Your result is A+");
}
else if (baho>=90 && baho<95){
    console.log("Your result is A");
}
else if (baho>=85 && baho<90){
    console.log("Your result is B+");
}
else if (baho>=80 && baho<85){

    console.log("Your result is B");
}
else if (baho>=75 && baho<80){
    console.log("Your result is C+");
}
else if (baho>=70 && baho<75){
    console.log("Your result is C");
}
else if (baho>=65 && baho<70){
    console.log("Your result is D+");
}
else if (baho>60 && baho<65){
 console.log("Your result is D");
}
else if (baho<=60 && baho>=0){
    console.log("You failed!")
}
else{
    console.log("There is no such score!")  //if (baho<0 && baho>100)
}


// second part

let passWord="s9767";      // console.log(passWord.length);

if (passWord.length>12){
    console.log("Your password is too long");
}
else if (passWord.length>=4 && passWord.length<=12){
    console.log("Done! Your password is acceptable");
}
else if (passWord.length<4){
    console.log("Your password is too weak");
}