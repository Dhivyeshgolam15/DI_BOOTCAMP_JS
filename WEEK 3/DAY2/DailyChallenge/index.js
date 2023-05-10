const form = document.getElementById('libform');
const libButton = document.getElementById('lib-button');
const shuffleButton = document.getElementById('shuffle-button');
const storyElement = document.getElementById('story');

// Define the story template
const storyTemplate = 'Once upon a time, there was a {{adjective}} {{noun}} named {{person}} who loved to {{verb}} in {{place}}.';

// Function to get the input values and generate the story
function generateStory(event) {
  event.preventDefault();
  
  const noun = document.getElementById('noun').value;
  const adjective = document.getElementById('adjective').value;
  const person = document.getElementById('person').value;
  const verb = document.getElementById('verb').value;
  const place = document.getElementById('place').value;
  
  // Check if all the input values are not empty
  if (noun !== '' && adjective !== '' && person !== '' && verb !== '' && place !== '') {
    const story = storyTemplate.replace('{{adjective}}', adjective)
                              .replace('{{noun}}', noun)
                              .replace('{{person}}', person)
                              .replace('{{verb}}', verb)
                              .replace('{{place}}', place);
    storyElement.textContent = story;
  } else {
    alert('Please fill in all the input fields.');
  }
}

// Function to shuffle the story
function shuffleStory() {
  // Split the story template into an array of words
  const words = storyTemplate.split(/\b/g);
}
  
  // Shuffle the words array
  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
  }
  
  // Join the shuffled words array back into a string
  const shuffledStory = words.join('');
  
  // Replace the placeholders in the shuffled story with the user input values
  const noun = document.getElementById('noun').value;
  const adjective = document.getElementById('adjective').value;
  const person = document.getElementById('person').value;
  const verb = document.getElementById('verb').value;
  const place = document.getElementById('place').value;
  const story = shuffledStory.replace('{{adjective}}', adjective)
                             .replace('{{noun}}', noun)
                             .replace('{{person}}', person)
                             .replace('{{verb}}', verb)

                             