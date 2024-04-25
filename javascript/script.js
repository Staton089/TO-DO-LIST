// Get the input, button, and unordered list elements from the DOM
let input_El = document.getElementById("input_El"); // Get the input element for entering tasks
let add_Btn_El = document.getElementById("add_Btn_El"); // Get the button element for adding tasks
let taskContainer = document.getElementById("taskContainer"); // Get the unordered list element for displaying tasks


// Function to add a new task
function addTask() {
    // Check if the user entered an empty task
    if (input_El.value === "") {
        return; // Don't add empty tasks
    }
    
    // Create a new paragraph element for the task
    let paragraphEl = document.createElement("p");
    
    // Append the new task paragraph to the task container
    taskContainer.appendChild(paragraphEl); 
    
    // Add the user's input from the input element to the task paragraph using textContent
    paragraphEl.textContent = "- " + input_El.value;
    
    // Creating a "X" icon using a span element
    let span = document.createElement("span");
    
    // Add a "X" character to the span element
    span.textContent = "X"
    
    // Append the span to the paragraph using appendChild
    paragraphEl.appendChild(span)
    
    // Clear the input field after adding a task
    input_El.value = "";
}

// Add click event listener to the document for adding tasks
addEventListener("click", addTask) 

// Function to delete a task
function deleteTask(event) {
    // Check if the clicked element is a "span" (delete button)
    if (event.target.tagName === "SPAN") {
        // If it's a span, remove its "P Element" thats where the "span" is located 
        event.target.parentElement.remove();
    }
    
}

// Add click event listener to the task container for deleting tasks
taskContainer.addEventListener("click", deleteTask)

