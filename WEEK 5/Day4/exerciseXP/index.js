//ex1

async function fetchStarWarsData() {
    try {
      const response = await fetch("https://www.swapi.tech/api/starships/9/");
      const objectStarWars = await response.json();
      console.log(objectStarWars.result);
    } catch (error) {
      console.log(error);
    }
  }
  
  fetchStarWarsData();

  //ex2

 // The expected outcome when executing the code will be:

//calling
//resolved
//The code will log 'calling' first, and then after a delay of 2 seconds, it will log 'resolved'.