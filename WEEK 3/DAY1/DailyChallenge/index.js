// Array of planets
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "white"];

const moons = [
    ["Moon"],
    
];

const listPlanets = document.querySelector(".listPlanets");

// create planets
for (let i = 0; i < planets.length; i++) {
  const planet = document.createElement("div");
  planet.classList.add("planet");
  planet.classList.add(`planet-${colors[i]}`);
  planet.textContent = planets[i];
  
  // create moons
  if (moons[i].length > 0) {
    for (let j = 0; j < moons[i].length; j++) {
      const moon = document.createElement("div");
      moon.classList.add("moon");
      moon.textContent = moons[i][j];
      moon.style.left = `${50 + (j * 50)}px`; // adjust moon positions
      planet.appendChild(moon);
    }
  }
  
  listPlanets.appendChild(planet);
}