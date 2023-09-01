// Get the input, button, and unordered list elements from the DOM
let input_El = document.getElementById("input_El"); // Get the input element for entering tasks
let add_Btn_El = document.getElementById("add_Btn_El"); // Get the button element for adding tasks
let ul_El = document.getElementById("ul_El"); // Get the unordered list element for displaying tasks

// Function to add a new task
function addTask() {
    // Check if the task text is empty
    if (input_El.value === "") {
        return; // Do not add empty tasks
    }
    
    // Create a new list item (task)
    let li_El = document.createElement("li");
    ul_El.appendChild(li_El); // Append the new task item to the task list
    
    // Set the text content of the new task item to the input value
    li_El.textContent = input_El.value;
    
    // Clear the input field after adding a task
    input_El.value = "";
}

// Add click event listener to the "Add" button
add_Btn_El.addEventListener("click", addTask);
