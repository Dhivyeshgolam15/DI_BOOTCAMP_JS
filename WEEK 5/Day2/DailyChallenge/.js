const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Function to fetch a random GIF based on search query
function fetchRandomGif(query) {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${query}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const gifUrl = data.data.images.original.url;
            appendGif(gifUrl, query);
        })
        .catch(error => console.log(error));
}

// Function to append a GIF with delete button
function appendGif(gifUrl, category) {
    const container = document.getElementById("gifContainer");

    const gifElement = document.createElement("img");
    gifElement.src = gifUrl;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        container.removeChild(gifElement);
        container.removeChild(deleteButton);
    });

    container.appendChild(gifElement);
    container.appendChild(deleteButton);
}

// Event listener for form submission
document.getElementById("gifForm").addEventListener("submit", event => {
    event.preventDefault();
    const searchInput = document.getElementById("searchInput");
    const query = searchInput.value;
    fetchRandomGif(query);
    searchInput.value = "";
});

// Function to delete all GIFs
function deleteAllGifs() {
    const container = document.getElementById("gifContainer");
    container.innerHTML = "";
}