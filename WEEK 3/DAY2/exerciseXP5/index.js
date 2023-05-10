const myElement = document.querySelector('#myElement');

// Click event listener
myElement.addEventListener('click', () => {
  myElement.style.backgroundColor = 'yellow';
});

// Mouseover event listener
myElement.addEventListener('mouseover', () => {
  myElement.style.color = 'red';
});

// Mouseout event listener
myElement.addEventListener('mouseout', () => {
  myElement.style.color = 'black';
});

// Double-click event listener
myElement.addEventListener('dblclick', () => {
  myElement.style.fontSize = '2em';
});