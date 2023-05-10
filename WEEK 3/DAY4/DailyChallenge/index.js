const tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const listTasks = document.querySelector(".listTasks");
  
  if (taskInput.value.trim() !== "") {
    // Add the task to the array
    tasks.push(taskInput.value);
    
    // Clear the input field
    taskInput.value = "";
    
    // Add the task to the DOM
    const newTask = document.createElement("div");
    newTask.className = "task";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const label = document.createElement("label");
    label.textContent = tasks[tasks.length - 1];
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "<i class='fas fa-times'></i>";
    
    newTask.appendChild(deleteBtn);
    newTask.appendChild(checkbox);
    newTask.appendChild(label);
    listTasks.appendChild(newTask);
    
    // Add event listener to the delete button
    deleteBtn.addEventListener("click", () => {
      listTasks.removeChild(newTask);
      const index = tasks.indexOf(label.textContent);
      if (index > -1) {
        tasks.splice(index, 1);
      }
    });
  }
}

// Add event listener to the submit button
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addTask();
});

// Add event listener to the input field
const taskInput = document.getElementById("taskInput");
taskInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});