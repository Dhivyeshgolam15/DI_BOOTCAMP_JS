// Change the value of the id attribute from "navBar" to "socialNetworkNavigation"
const navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");

// Create a new <li> element, add text content, and append to the <ul>
const logoutLi = document.createElement("li");
const logoutText = document.createTextNode("Logout");
logoutLi.appendChild(logoutText);
const ul = document.querySelector("#socialNetworkNavigation ul");
ul.appendChild(logoutLi);

// Retrieve the first and last <li> elements and display their text content
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;
console.log(firstLi.textContent);
console.log(lastLi.textContent);