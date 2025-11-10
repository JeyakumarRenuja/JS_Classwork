// Hoisting
console.log(name);
var name="renu";

console.log(name);
const name="renu";

console.log(name);
let name="renu";

// Scope

{
    const x=25;
    console.log(x);
}
console.log(x);

{
    let x=25;
    console.log(x);
}
console.log(x);

{
    var x=25;
    console.log(x);
}
console.log(x);

