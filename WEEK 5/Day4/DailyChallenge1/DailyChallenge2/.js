document.getElementById("cityForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const city1Lat = document.getElementById("city1Lat").value;
    const city1Lon = document.getElementById("city1Lon").value;
    const city2Lat = document.getElementById("city2Lat").value;
    const city2Lon = document.getElementById("city2Lon").value;

    const city1Promise = fetch(`https://api.sunrise-sunset.org/json?lat=${city1Lat}&lng=${city1Lon}`)
      .then(response => response.json())
      .then(data => data.results.sunrise);

    const city2Promise = fetch(`https://api.sunrise-sunset.org/json?lat=${city2Lat}&lng=${city2Lon}`)
      .then(response => response.json())
      .then(data => data.results.sunrise);

    Promise.all([city1Promise, city2Promise])
      .then(results => {
        const [city1Sunrise, city2Sunrise] = results;
        document.getElementById("result").innerHTML = `
          City 1 Sunrise Time: ${city1Sunrise}<br>
          City 2 Sunrise Time: ${city2Sunrise}
        `;
      })
      .catch(error => {
        console.log("Error:", error);
        document.getElementById("result").innerHTML = "Oops! Something went wrong.";
      });
  });