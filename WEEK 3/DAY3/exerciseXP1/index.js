//part1

setTimeout(function() {
    alert("Hello World");
  }, 2000);

  //part2

  setTimeout(function() {
    var container = document.getElementById("container");
    var paragraph = document.createElement("p");
    paragraph.textContent = "Dhivyesh Golam";
    container.appendChild(paragraph);
  }, 2000);

  //part3

  var interval = setInterval(function() {
    var container = document.getElementById("container");
    var paragraph = document.createElement("p");
    paragraph.textContent = "Dhivyesh Golam";
    container.appendChild(paragraph);
    
    if (container.children.length === 5) {
      clearInterval(interval);
    }
  }, 2000);
  
  var clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", function() {
    clearInterval(interval);
  });