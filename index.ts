let myName = 'Mishu';
console.log(myName);

const age = 25 ;
console.log(age);

function addNumbers(num1: number, num2: number){
    console.log(num1 + num2);
}
addNumbers(20 , 30);

//index.ts > tsc index.ts > index.js > node index.js
//tsc means typescript compiler
//tsc index.ts --watch