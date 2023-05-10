// Retrieve the div and console.log it
const container = document.getElementById("container");
console.log(container);

// Change the name "Pete" to "Richard"
const pete = document.querySelector("ul.list:nth-of-type(1) li:nth-of-type(2)");
pete.textContent = "Richard";

// Delete the <li> that contains the text node "Sarah"
const sarah = document.querySelector("ul.list:nth-of-type(2) li:nth-of-type(2)");
sarah.remove();

// Change each first name of the two <ul>'s to your name
const names = ["Your Name", "Your Name"];
const uls = document.querySelectorAll("ul.list");

for (let i = 0; i < uls.length; i++) {
  const lis = uls[i].querySelectorAll("li");
  for (let j = 0; j < lis.length; j++) {
    if (j === 0) {
      lis[j].textContent = names[i];
    }
  }
}

// Add a class called student_list to both of the <ul>'s
const ulList = document.querySelectorAll("ul.list");
for (let i = 0; i < ulList.length; i++) {
  ulList[i].classList.add("student_list");
}

// Add the classes university and attendance to the first <ul>
const firstUl = document.querySelector("ul.list:nth-of-type(1)");
firstUl.classList.add("university", "attendance");