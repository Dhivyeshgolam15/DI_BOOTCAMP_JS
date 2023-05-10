// Get the div where we want to display the books
const listBooksDiv = document.querySelector('.listBooks');

// Array of books
const allBooks = [
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    image: 'https://images.pexels.com/photos/3825084/pexels-photo-3825084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alreadyRead: true
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    image: 'https://images.pexels.com/photos/236357/pexels-photo-236357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alreadyRead: false
  }
];

// Create a table element
const table = document.createElement('table');

// Create a header row for the table
const headerRow = document.createElement('tr');

// Add the title column to the header row
const titleHeader = document.createElement('th');
titleHeader.textContent = 'Title';
headerRow.appendChild(titleHeader);

// Add the author column to the header row
const authorHeader = document.createElement('th');
authorHeader.textContent = 'Author';
headerRow.appendChild(authorHeader);

// Add the table header row to the table
table.appendChild(headerRow);

// Loop through the books and create a row for each one
allBooks.forEach(book => {
  const bookRow = document.createElement('tr');

  // Add the title cell to the row
  const titleCell = document.createElement('td');
  titleCell.textContent = book.title;
  bookRow.appendChild(titleCell);

  // Add the author cell to the row
  const authorCell = document.createElement('td');
  authorCell.textContent = book.author;
  bookRow.appendChild(authorCell);

  // Add the image cell to the row
  const imageCell = document.createElement('td');
  const bookImage = document.createElement('img');
  bookImage.src = book.image;
  bookImage.width = 100;
  imageCell.appendChild(bookImage);
  bookRow.appendChild(imageCell);

  // Check if the book has been read, and add a class to the row accordingly
  if (book.alreadyRead) {
    bookRow.classList.add('read');
  }

  // Add the book row to the table
  table.appendChild(bookRow);
});

// Add the table to the div
listBooksDiv.appendChild(table);