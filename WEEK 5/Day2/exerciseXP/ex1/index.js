// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Define the API URL
const apiUrl = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

// Configure the AJAX request
xhr.open('GET', apiUrl, true);

// Set the response type to JSON
xhr.responseType = 'json';

// Handle the AJAX request response
xhr.onload = function () {
  if (xhr.status === 200) {
    // Request successful
    console.log(xhr.response);
  } else {
    // Request failed
    console.log('Error:', xhr.status);
  }
};

// Send the AJAX request
xhr.send();