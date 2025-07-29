console.log("hello world");

let myString = a"a2b3c";
console.log(myString);

let mynumvar =123;
console.log(typeof mynumvar);

console.log(10 + 7 "eggs");



//both conditions need to be true
console.log(7>3)&&(5<10);

//one condition must be true 
console.log(10>3)||(10>12);

//if the statement is logical or not
console.log(!5>3);


function introduction(name, age){
    console.log("hello, my name is " + name + "and i am" + age +" years old.")
}

introduction("fatou" , 16)

const hour = new Date().getHours();
let greeting = "";

if (hour<12){
    greeting = "good morning";
}else if (hour<18){
    greeting = "good afternoon";
}else [
    greeting = "good evening";
]

document.getElementById("greeting").innerText = greeting;