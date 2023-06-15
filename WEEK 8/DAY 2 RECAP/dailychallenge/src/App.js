// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import LanguageButton from './languagebutton'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      languages : [
          {name: "Php", votes: 0},
          {name: "Python", votes: 0},
          {name: "JavaScript", votes: 0},
          {name: "Java", votes: 0}
      ]
  };

}

render(){
  return(
    <div>
    <h1>Vote for your favorite language</h1>
    {this.state.languages.map((languages, index)=>(
       <LanguageButton
      key={index}
      name={languages.name}
      votes={languages.votes}
      />
    ))}
    </div>
    )
}
}


export default App;
