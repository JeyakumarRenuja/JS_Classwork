// function circle(π, r, h) {
//     return π * r ** 2 * h;
// }
// let total = circle(22/7, 10, 15);
// console.log(total);



// function circle(r,h) {
//     return Math.PI* r ** 2 * h;
// }
// let Total = circle(10, 15);
// console.log(Total.toFixed(2));


// const multiple=function(n){
//     return n*n
// }
// console.log(multiple(5));


// //arrow function (short form)
// const square = (n) => n*n;
// console.log(square(5));

// function greet(name="Guest") {
//     console.log("Hello" + name)
// }
// greet();


// //function calling another function

// function add(a,b) {
//     return a+b;
// }
// function displaySum() {
//     let result = add(3,7);
//     console.log("Sum is: " + result)
// }
// displaySum()



// example salary
// function salary(x,y){
//     return x+y;
// }
// function Bonus (){
//     let totalSalary=salary(40000,50000)
//     let bonus= totalSalary * 0.10
//     let final= (totalSalary + bonus)
//     console.log("Final Salary with 10% bonus:",final);
// }
// Bonus();

//using arrow function
let salary = (x, y) => x + y;

let Bonus = () => {
    let totalSalary = salary(40000, 50000);
    let bonus = totalSalary * 0.10;
    let final = totalSalary + bonus;
    console.log("Final Salary with 10% bonus:", final);
};

Bonus();

