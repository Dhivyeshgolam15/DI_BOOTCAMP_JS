// Declare a global variable named allBoldItems.
let allBoldItems;

// Create a function called getBold_items() that takes no parameter.
function getBold_items() {
  // This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
  allBoldItems = document.querySelectorAll("strong");
}

// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight() {
  for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "blue";
  }
}

// Create a function called return_normal() that changes the color of all the bold text back to black.
function return_normal() {
  for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "black";
  }
}

// Call the function getBold_items().
getBold_items();

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph).
document.querySelector("p").addEventListener("mouseover", highlight);

// Call the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph).
document.querySelector("p").addEventListener("mouseout", return_normal);
