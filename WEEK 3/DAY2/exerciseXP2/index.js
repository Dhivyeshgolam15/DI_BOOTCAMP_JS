// Retrieve the h1 and console.log it
const h1 = document.querySelector('h1');
console.log(h1);

// Remove the last paragraph in the article
const paragraphs = document.querySelectorAll('p');
const lastParagraph = paragraphs[paragraphs.length - 1];
lastParagraph.remove();

// Add event listener to h2 to change background color to red on click
const h2 = document.querySelector('#h2');
h2.addEventListener('click', function() {
  h2.style.backgroundColor = 'red';
});

// Add event listener to h3 to hide it on click
const h3 = document.querySelector('h3');
h3.addEventListener('click', function() {
  h3.style.display = 'none';
});

// Add event listener to button to make paragraphs bold on click
const boldBtn = document.querySelector('#bold-btn');
boldBtn.addEventListener('click', function() {
  paragraphs.forEach(function(p) {
    p.style.fontWeight = 'bold';
  });
});

// Add event listener to form to submit user input
const form = document.querySelector('form');
const usersAnswer = document.querySelector('.usersAnswer');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const fnameInput = document.querySelector('#fname');
  const lnameInput = document.querySelector('#lname');
  const fnameValue = fnameInput.value;
  const lnameValue = lnameInput.value;

  if (fnameValue.trim() === '' || lnameValue.trim() === '') {
    alert('Please fill out all fields');
    return;
  }

  const fnameLi = document.createElement('li');
  const lnameLi = document.createElement('li');
  fnameLi.textContent = fnameValue;
  lnameLi.textContent = lnameValue;
  usersAnswer.appendChild(fnameLi);
  usersAnswer.appendChild(lnameLi);

  fnameInput.value = '';
  lnameInput.value = '';
});

