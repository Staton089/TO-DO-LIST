// Get the input, button, and unordered list elements from the DOM
let input_El = document.getElementById("input_El"); // Input element for entering tasks
let add_Btn_El = document.getElementById("add_Btn_El"); // Button element for adding tasks
let ul_El = document.getElementById("ul_El"); // Unordered list element for displaying tasks

// Function to add a new task
function addTask() {
    // Get the task text from the input
    let taskText = input_El.value;
    
    if (taskText === "") {
        return; // Do not add empty tasks
    }
    
    // Create a new list item (task)
    let li_El = document.createElement("li");
    ul_El.appendChild(li_El);
    li_El.textContent = taskText;
    
    // Clear the input field
    input_El.value = "";
    
    
}

// Add click event listener to the "Add" button
add_Btn_El.addEventListener("click", addTask);
