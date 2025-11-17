let employee= {
    name : "Renu",
    age : 25,
    department : "IT",
    address : {
        city : "Jaffna",
        zipCode : 40000
    },
    skills:["HTML","CSS","JavaScript"]
};
//Access city using dot notation
console.log(employee.address.city);

//Access zip code using bracket notation
console.log(employee["address"]["zipCode"]);

//Destructure object to extract name and department
const {name, department} = employee;
console.log(name);
console.log(department);

//Add a method introduce
employee.introduce = function(){
    console.log(`Hi My name is ${this.name}. I am working in ${this.department} department.`)
};
employee.introduce();

//Arrow function
let employeeIntroduce= () => {
    console.log(`Hi My name is ${name}. I am working in ${department} department.`)
};
employeeIntroduce();

//loop through skills array
employee.skills.forEach(skill => console.log(skill));


//object keys
console.log(Object.keys(employee));

//object values
console.log(Object.values(employee));

//loop Iteration
//object.in