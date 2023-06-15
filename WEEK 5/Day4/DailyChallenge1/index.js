// ex1
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
//  ex2
 // Function to retrieve sunrise time using the API
 async function getSunriseTime(latitude, longitude) {
    // const apiUrl = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today`;

    const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today`);
     const data = await response.json();
     return data.results.sunrise;
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    const parisLat = document.getElementById('parisLat').value;
    const parisLng = document.getElementById('parisLng').value;
    const nyLat = document.getElementById('nyLat').value;
    const nyLng = document.getElementById('nyLng').value;

    const parisPromise = getSunriseTime(parisLat, parisLng);
    const nyPromise = getSunriseTime(nyLat, nyLng);

    Promise.all([parisPromise, nyPromise])
      .then(([parisSunrise, nySunrise]) => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `Paris sunrise time: ${parisSunrise}<br>New York sunrise time: ${nySunrise}`;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  // Attach form submission event listener
  const cityForm = document.getElementById('cityForm');
  cityForm.addEventListener('submit', handleSubmit);