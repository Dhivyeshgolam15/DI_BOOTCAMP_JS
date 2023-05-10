// Get the box and target elements
var box = document.getElementById("box");
var target = document.getElementById("target");

// Initialize the position variables
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

// Add an event listener to the box for dragging
box.addEventListener("mousedown", dragStart);

// Add an event listener to the document for stopping dragging
document.addEventListener("mouseup", dragStop);

// Function to start dragging
function dragStart(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.addEventListener("mousemove", dragMove);
}

// Function to stop dragging
function dragStop() {
    document.removeEventListener("mousemove", dragMove);
}

// Function to move the box while dragging
function dragMove(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    box.style.top = (box.offsetTop - pos2) + "px";
    box.style.left = (box.offsetLeft - pos1) + "px";
    
    // Check if the box is inside the target
    if (box.offsetTop >= target.offsetTop && 
        box.offsetTop + box.offsetHeight <= target.offsetTop + target.offsetHeight &&
        box.offsetLeft >= target.offsetLeft && 
        box.offsetLeft + box.offsetWidth <= target.offsetLeft + target.offsetWidth) {
        target.style.background = "green";
    } else {
        target.style.background = "yellow";
    }
}