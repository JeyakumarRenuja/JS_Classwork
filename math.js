//question 1
function totalPay (prices, discount) {
    totalPay= prices.reduce((sum, total) => sum+total,0);
    discount= totalPay * (discount/100);
    discountPrice= totalPay - discount;
    return{
        totalPay: totalPay,
        discount:discount,
        discountPrice:discountPrice

    }  
};
let prices= [80,120,360];
let discount =10;

totalPay(prices, discount);
console.log("Total Price: ", totalPay);
console.log("Discounted Price: ", discountPrice);

//question 2   //formila a=P * (1+r)^t
function compoundInterest(principle, rate, time) {
    
    let r = rate / 100; 
    let amount = principle * Math.pow((1 + r), time);
    let interest = amount - principle;

    return {
        principle: principle,
        rate: rate,
        time: time,
        amount: amount,
        interest: interest
    };
}

let results = compoundInterest(500, 20, 2);
console.log(results);


//Question 3
// Function to calculate distance between two points
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// Example values
let x1 = 3;
let y1 = 4;
let x2 = 7;
let y2 = 9;

// Calculate the distance
let result = distance(x1, y1, x2, y2);

// Print the result
console.log("Point 1:", `(${x1}, ${y1})`);
console.log("Point 2:", `(${x2}, ${y2})`);
console.log("Distance between points:", result);


//question 4
// Function to calculate new coordinates after moving distance 'd' at angle 'angleDeg'
function newCoordinates(x, y, d, angleDeg) {

    // Convert degrees to radians (JS uses radians)
    const angleRad = angleDeg * Math.PI / 180;

    // Calculate new X and Y
    const newX = x + d * Math.cos(angleRad);
    const newY = y + d * Math.sin(angleRad);

    // Return as an object
    return {
        x: newX,
        y: newY
    };
}

// Example values
let startX = 0;
let startY = 0;
let distancee = 10;
let angle = 60;

// Call the function
let resultss = newCoordinates(startX, startY, distancee, angle);

// Show the result
console.log("Starting Point: (" + startX + ", " + startY + ")");
console.log("Distance:", distancee);
console.log("Angle:", angle + " degrees");
console.log("New Coordinates:", resultss);



let a=5;
console.log(a +=5);


// let number= 100;
// if (number > 200) {
//     console.log("smaller number");
// } else (number<200) {
//     console.log("")

    

let age =25;
if (age>18) {
    console.log("can take licence");
}
else {
    console.log("can't take licence")
}




