//EX1

//(1)
["bread", "carrot", "potato", "chicken", "apple", "orange"]
//(2)
["U", "S", "A"]
//(3)
[undefined, undefined]

//EX2
(1)
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);
//(output)
["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

(2)
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents);
//(output)
[{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' }]

(3)
const fullStackResidentsLastNames = users
  .filter(user => user.role === 'Full Stack Resident')
  .map(user => user.lastName);
console.log(fullStackResidentsLastNames);
//(output)

["Bouley", "Alnaji", "Hajek"]

//EX3

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const combinedString = epic.reduce((accumulator, currentValue) => {
  return accumulator += " " + currentValue;
});

console.log(combinedString);

//EX4

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

(1)
const passedStudents = students.filter(student => student.isPassed);
console.log(passedStudents);
(2)
passedStudents.forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
  });