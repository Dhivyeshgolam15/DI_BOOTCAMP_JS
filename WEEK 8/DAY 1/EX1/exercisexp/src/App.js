import logo from './logo.svg';
import './App.css';

function App() {
  const sample = <h1>i do not use jsx </h1>
  const lol = <h2>hello world !</h2>
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5 
  const sentence =<h4>"React is {sum}  times better with JSX"</h4>
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };
  return <div>{sample}{lol}{myelement}{sentence}
  <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
  <h3>{user.favAnimals[3]}</h3>
  </div>  ;   
  
}

export default App;
