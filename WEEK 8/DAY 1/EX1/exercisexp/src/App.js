// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import UserFavoriteColurs from './userfavoritecolors'
import Exercise4 from './exercise4';
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
//   // exercise 2 part1
//   const helloWorld = <h1>helloWorld</h1>

//   // exercise2 (part2)
// const myelement = <h1>i love jsx!</h1>

// // exercise2 (part3)
// const sum = 5+5
// const sentence = `React is ${sum} times better with JSX`

// return <div>
// {/* exercise1 */}
//     <div className="no-jsx">
//        <h1>i do not use JSX</h1>
//     </div>
//   {helloWorld}
//   {myelement}
//   {sentence}
// </div>


// exercise 3

// return (
//     <div>
//     <h3>{user.firstName}</h3>
//     <h3>{user.lastName}</h3>
//
//     </div>
//   )

// exercise 3
return (
    <div>
    <h3>{user.firstName}</h3>
    <h3>{user.lastName}</h3>
    <UserFavoriteColurs favAnimals={user.favAnimals}/>
    <Exercise4/>
    </div>
  )

}







