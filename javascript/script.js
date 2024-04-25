// Get the input, button, and unordered list elements from the DOM
let input_El = document.getElementById("input_El"); // Get the input element for entering tasks
let add_Btn_El = document.getElementById("add_Btn_El"); // Get the button element for adding tasks
let taskContainer = document.getElementById("taskContainer"); // Get the unordered list element for displaying tasks
let delete_El = document.getElementById("delete_El");

// Function to add a new task
function addTask() {
    // Check if  too see if the user entered in an empty 
    if (input_El.value === "") {
        return; // dont return empty tasks
    }
    
    // Create a new list item (task)
    let paragraphEl = document.createElement("p");
    taskContainer.appendChild(paragraphEl); // Append the new task item to the task list
    paragraphEl.textContent = "- " + input_El.value;
    
    let span = document.createElement("span");
    span.textContent = "X"
    paragraphEl.appendChild(span)
    // Clear the input field after adding a task
    input_El.value = "";
}

addEventListener("click", addTask)