//ex1

//The output of the code will be:-

"I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)"

//ex2

function displayStudentInfo(objUser) {
    const { first, last } = objUser;
    return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({first: 'Elie', last: 'Schoppik'}));

//The output will be:-

"Your full name is Elie Schoppik"

//ex3

const users = { user1: 18273, user2: 92833, user3: 90315 };

// Convert users object to an array
const userArray = Object.entries(users);

// Multiply user's ID by 2
const modifiedUserArray = userArray.map(([key, value]) => [key, value * 2]);

console.log(modifiedUserArray);

//ouput:-

"[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]"

//ex4

"The ouput will be (OBJECT)"

//ex5

class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  }

  //ex6

  class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
  }
  
  class Mammal extends Animal {
    sound(sound) {
      return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}. ${sound}`;
    }
  }
  
  const farmerCow = new Mammal("Lily", "cow", "brown and white");
  console.log(farmerCow.sound("Moooo"));

  //output will be :-

  "Moooo I'm a cow, named Lily and I'm brown and white. Moooo"
