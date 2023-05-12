(function(userName) {
    var navbar = document.querySelector('.navbar-nav');
  
    // Create a div element for the user info
    var userDiv = document.createElement('div');
    userDiv.classList.add('nav-item', 'ml-auto');
    
    // Add the user's profile picture
    var userImg = document.createElement('img');
    userImg.src = 'path/to/user-profile-pic.jpg';
    userImg.classList.add('rounded-circle', 'mr-2');
    userImg.alt = 'User Profile Picture';
    userDiv.appendChild(userImg);
    
    // Add the user's name
    var userNameSpan = document.createElement('span');
    userNameSpan.textContent = 'Welcome, ' + userName;
    userDiv.appendChild(userNameSpan);
    
    // Add the user div to the navbar
    navbar.appendChild(userDiv);
  })('John');