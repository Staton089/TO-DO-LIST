// Get the input, button, and unordered list elements from the DOM
let input_El = document.getElementById("input_El"); // Get the input element for entering tasks
let add_Btn_El = document.getElementById("add_Btn_El"); // Get the button element for adding tasks
let taskContainer = document.getElementById("taskContainer"); // Get the unordered list element for displaying tasks
let delete_El = document.getElementById("delete_El");

// Function to add a new task
function addTask() {
    // Check if  too see if the user entered in an empty 
    if (input_El.value === " ") {
        return; // dont return empty tasks
    }
    
    // Create a new list item (task)
    let paragraphEl = document.createElement("p");
    taskContainer.appendChild(paragraphEl); // Append the new task item to the task list
    
    // Set the text content of the new task item to the input value
    paragraphEl.textContent = "- " + input_El.value;
    
    // Clear the input field after adding a task
    input_El.value = "";
}

// Add click event listener to the "Add" button
add_Btn_El.addEventListener("click", addTask);

function deletesTask(event) {
    // Get the parent <p> element of the delete button
    let taskParagraph = event.target.parentElement;
    
    // Remove the task <p> element
    taskParagraph.remove();
}

delete_El.addEventListener("click", deletesTask);

console.log(delete_El)