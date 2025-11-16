//Numbers & Strings

//question 1
// let price=99.9876;
// let roundedprice=price.toFixed(2);
// console.log(`Total price is RS.${roundedprice}`);


//question 2
// let name=prompt("Enter user full name");
// console.log(name.toUpperCase());


//question 3
// let Item="keyboard";
// let Price=250;
// console.log("Receipt");
// console.log("Item".padEnd(8) + Item);
// console.log("Price".padEnd(8) + Price)



//question 4
let value="123abc";
let numberValue=Number(value);
if (Number.isNaN(numberValue)){
    console.log("conversion failed: Not a valid number");
}
else {
    console.log(`converted number : ${numberValue}`);
}

// //question 5
let prices=[500,100,200,35];
let total=prices.reduce((sum,price)=>sum+price,0);
let FormattedTotal=total.toLocaleString('en-IN', {
    minimumFractionDigits:2,
    maximumFractionDigits:2
});          
console.log(`TotalPrice: RS ${FormattedTotal}`);

// //question 6
// let Text="hello@@world@@!";
// let cleanText= Text.replace(/@@/g," "); //regular expressions(reg x)
// console.log(cleanText);

// //OBJECTS part 1

// Question 1
// let person ={};

//question 2
let person ={
    name: "Renu",
    age: 25,

    introduceYou:function(){
        console.log(`hi, I am ${this.name}and I am ${this.age}years old.`);
    }
};
person.introduceYou();

//question 3
let person={
    name:"Renu",
    age:25,

    greetStudent:function(student){
        console.log(`Hello${student.name},Welcome to the Coding School!`)
    }
};
let student={
    name:"Jaanu",
    age: 26
};

person.greedStudent(student);

//question 4
let person={
    name:"Renu",
    age:25,
    country:"SriLanka"
};
//dot notation
console.log(person.name);
console.log(person.age);

//bracket notation
console.log(person[country]);

//question 5
person["email"]="shan@example.com";
console.log(person);

//question 6
delete person.country;
console.log(person);

//question 7
console.log(":seven: 'name' in person:", "name" in person); // true
console.log("   person.hasOwnProperty('email'):", person.hasOwnProperty("email"));

//question 8
const studentObj = { name: "Shan", age: 20 };
const courseObj = { subject: "JavaScript", duration: "3 months" };
// Method 1: Spread operator
const studentCourse = { ...studentObj, ...courseObj };
// Method 2: Using Object.assign()
// const studentCourse = Object.assign({}, studentObj, courseObj);
console.log(":eight: Merged Object:", studentCourse);

// //Objects part 2

// // question 1
// let student={
//     name:"Renu",
//     age: 25
// };

// let{name,age}=student;

// console.log(`Name:${name}`);
// console.log(`Age:${age}`);


// // question 2
// functioncreateStudent(name,age) {
//     return{name,age};
// }
// console.log(createStudent("Renu",25));


// // question 3
// let Student={
//     name:"Renu",
//     age: 25,
//     course:"Technology"
// };
// let updatedStudent={ 
//     ...student,
//     age:26,
//     grade:"A"
// };
// console.log("Original:",Student);
// console.log("Updated:",updatedStudent);

// //question 4
// let stu={
//     name:"Renu",
//     age: 25,
//     course:"Technology"
// };
// let studentArray=Object.entries(student);
// console.log("Array form:",studentArray);

// //question 5
// let employee={
//     name:"Renu",
//     salary:50000

// calculateTax(){
//     let taxRate;

//     if(this.salary<=30000){
//         taxRate=0.5;
//     } else if(this.salary<=60000){
//         taxRate=0.10;
//     }else{
//         taxRate=0.15;
//     }

//     let tax=this.salary*taxRate;
//     return tax;
// }
// };
// console.log(`Employee:${employee.name}`);
// console.log(`Salary:${employee.salary}`);
// console.log(`Tax:${employee.calculateTax()}`);

// // question 6
// let STudent={
//     name:"Renu",
//     address:{
//         city:"Jaffna",
//         country:"Sri Lanka"
//     }
// };

// console.log(student.address?.city);


// // question 7
// let userInfo={
//     name:"Renu",
//     age:25
// };

// let contactInfo={
//     email:"jeyrenuja@gmail.com",
//     phone:"0767654321"
// };

// letuserProfile={...userInfo,...contactInfo};
// console.log(userProfile);

//Array part 1

//question 1
let numbers=[1,2,36,7];
let first=numbers[0];  //first element
let last=numbers[numbers.length-1];  //last element

console.log("First element:",first);
console.log("Last element:",last);

//question 2
let numbers=[1,2,36,7];
numbers.unshift(10);   //add a new element start
numbers.push(20);     //add a new  element end
console.log("Updated array:",numbers);

//question 3
let numbers=[1,2,36,7];
numbers.shift();   //remove 1st element
numbers.pop();     //remove ;ast element
console.log("Updated array:",numbers);

//question 4
let numbers=[1,2,36,7];
for (let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

//question 5
let numbers=[1,2,36,7];
numbers.forEach(function(number){
    console.log(number);
});

//question 6
let numbers=[1,2,36,7];

let maxValue = Math.max(...numbers);
let minValue = Math.min(...numbers);

console.log("Maximum value:", maxValue);
console.log("Minimum value:", minValue);

//question 7
let numbers=[1,2,36,7];

if (numbers.includes(36)) {
  console.log("36 exists in the array");
} else {
  console.log("36 does not exist in the array");
}


//question 8
let numbers=[1,2,36,7];

let sum = numbers.reduce((total, current) => total + current, 0);

console.log("Sum of all numbers:", sum);

//question 9
let numbers = [1, 2, 36, 7];

numbers.sort((a, b) => a - b);

console.log("Ascending order:", numbers);

//question 10
let numbers = [1, 2, 36, 7];

numbers.reverse();

console.log("Reversed array:", numbers);

//question 11
let numbers = [1, 2, 36, 7];

let greaterThanFive = numbers.filter(num => num > 5);

console.log("Numbers greater than 5:", greaterThanFive);


