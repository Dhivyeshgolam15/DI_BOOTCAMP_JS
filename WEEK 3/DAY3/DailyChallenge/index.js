
const input = document.getElementById('letters-only');

input.addEventListener('keydown', function(event) {
  const key = event.key;
  const letters = /^[A-Za-z]+$/;

  if (!key.match(letters)) {
    event.preventDefault();
  }
});