let employee = {
  name: "Asha",
  age: 30,
  department: "Marketing",
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001"
  },
  skills: ["Strategy", "Content Creation", "SEO"]
};

// 1
let employeeCity = employee.address.city;
console.log(`1. Employee's City: ${employeeCity}`);

// 2
const employeeZip = employee.address["zip"];
console.log(`2. Employee's Zip Code: ${employeeZip}`);

// 3
const { name, department } = employee;
console.log(`3a. Name: ${name}`);
console.log(`3b. Department: ${department}`);

// 4
employee.introduce = function() {
  console.log(`4. Hi, my name is ${this.name} and I work in ${this.department}.`);
};

employee.introduce();

// 5
employee.email = "asha@company.com";
console.log(`5. Employee's Email: ${employee.email}`);

// 6
console.log("6. Employee's Skills:");
for (const skill of employee.skills) {
  console.log(`- ${skill}`);
}

// 7
const propertyKeys = Object.keys(employee);
const propertyValues = Object.values(employee);

console.log("7a. Property Names (Keys):", propertyKeys);

console.log("7b. Property Values (Values):", propertyValues);

