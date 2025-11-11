// MAX_VALUE

console.log(Number.max_VALUE);
console.log(Number.MAX_VALUE * 2);


console.log(Number.MIN_VALUE);
console.log(Number.MIN_VALUE / 2);

console.log(Number.POSITIVE_INFINITY);


let x = 5 / 0;
console.log(x);

console.log(Number.EPSILON);


// String

let name = "Renuja";
console.log(name.length);

console.log(name.toUpperCase);


console.log(`Welcome to Uki ${name}`);

console.log(name.charAt(2));

console.log(name.indexOf("e"));
console.log(name.includes("em"));

console.log(name.slice(1, 4));

console.log(name.substring(1, 4));
console.log(name.replaceAll("e", "s"));

let fname = "       Zoysa      ";
console.log(fname.trimEnd());
console.log(fname.trimStart());
console.log(fname.trim());

let text = "a,b,c,d,e";
const myArray = text.split(",");
console.log(myArray);



//boolean

let y = 6;
console.log(Boolean(y));

let c = 5;
console.log(Boolean(c == 8));

let a = 5;
let b = 10;
console.log(Boolean(a > b));
console.log(Boolean(a < b));

let namee = true
if (namee) {
    console.log("I am Renuja");
}
else {
    console.log("invalid name");

}


let num1 = 15;
let num2 = 20;
if (num1 > num2) {
    console.log("correct");

}
else {
    console.log("wrong");

}

let x1 = false;
let y1 = new Boolean(false);
console.log(x1 == y1);
console.log(x1 === y1);

// question
let Name = prompt("Enter customer name");
let price = prompt("Enter your price");

let Discount = 17.33;

let DiscountAmount = (price * Discount) / 100;
let Total = price - DiscountAmount;

console.log("Receipt");
console.log("Customer: " + Name.toUpperCase());
console.log("price: LKR " + Name.toUpperCase());
console.log("Discount (" + Discount + "%): LKR " + price.toFixed(2));
console.log("Total after discount : " + Total.toFixed(2));


alert("Hello" + " " + Name + "!\n" + " " + "Your total after 17.33% amount is" + " " + price);
















