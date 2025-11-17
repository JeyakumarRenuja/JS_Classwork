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

//create ne array of scores using map()
const scores =students.map(students => students.score);
console.log(scores);

//filter students who scored more than 80
const topStudents =students.filter(students => students.score > 80);
console.log(topStudents);



