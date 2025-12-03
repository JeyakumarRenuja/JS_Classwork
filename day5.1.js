let students = [
    {name: "Renu", score: 85},
    {name: "Soysa", score: 86},
    {name: "Thesha", score: 95},
    {name: "Saai", score: 78}
];
// using forEach to list all student Name
students.forEach(detail => console.log(detail.name));

//using forEach to list all student score
students.forEach(a => console.log(a.score));

//create new array of scores using map()
// const scores =students.map(students => students.score);
// console.log(scores);

//filter students who scored more than 80
// const topStudents =students.filter(students => students.score > 80);
// console.log(topStudents);


//using filter and forEach
const topStudents = students.filter(student => student.score > 80);
topStudents.forEach(student => {
  console.log(student.name);
});


students.filter(student => student.score > 80).forEach(student => {
    console.log(student.score);
  });


// calculae average score using reduce()
const totalScore = students.reduce((sum, stu) => sum+ stu.score);
const avgScore = totalScore / students.length;
console.log(avgScore);

//some and every
console.log(students.some(stu => stu.score >80));
console.log(students.every(stu => stu.score >80));

//flat
const nested= [[1,2],[3,4],[5,6]];
console.log(nested.flat());

//flatmap
const flatMapped = nested.flatMap(arr => arr.map(n => n*2));
console.log(flatMapped);









