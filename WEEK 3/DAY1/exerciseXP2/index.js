// Add a "light blue" background color and some padding to the <div>
const divUsers = document.getElementById("users");
divUsers.style.backgroundColor = "lightblue";
divUsers.style.padding = "10px";

// Do not display the <li> that contains the text node "John" (the first <li> of the <ul>)
const liJohn = document.querySelector("ul li:first-child");
liJohn.style.display = "none";

// Add a border to the <li> that contains the text node "Pete" (the second <li> of the <ul>)
const liPete = document.querySelector("ul li:nth-child(2)");
liPete.style.border = "1px solid black";

// Change the font size of the whole body
document.body.style.fontSize = "20px";

// Bonus: If the background color of the div is "light blue", alert "Hello x and y"
const users = document.querySelectorAll("ul li");
if (divUsers.style.backgroundColor === "lightblue") {
  const x = users[0].textContent;
  const y = users[1].textContent;
  alert(`Hello ${x} and ${y}`);
}