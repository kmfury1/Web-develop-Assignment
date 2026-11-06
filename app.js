// ==========================================================================
// Part 3, Step 1: DOM ELEMENT SELECTION
// Explicitly select all required HTML components using descriptive variables.
// ==========================================================================
const taskForm = document.getElementById("task-form");
const taskNameInput = document.getElementById("task-name");
const taskPrioritySelect = document.getElementById("task-priority");
const taskListContainer = document.getElementById("task-list");
const errorDisplay = document.getElementById("error-message");
const themeToggleButton = document.getElementById("theme-toggle");

// Human-friendly labels for each priority value
const priorityLabels = {
    low: "Low",
    medium: "Medium",
    high: "High"
};

// ==========================================================================
// Part 3, Step 4 & 5: ELEMENT CREATION FUNCTION
// Accepts data parameters, builds a new DOM element tree, applies classes,
// and returns it.
// ==========================================================================
function createTaskElement(taskName, priority) {
    // 1. Create the parent container tag
    const taskItem = document.createElement("li");

    // 2. Add classes to style it based on its priority status
    taskItem.classList.add("task-item", "priority-" + priority);

    // 3. Populate it with the task text and the priority label
    const taskText = document.createElement("span");
    taskText.textContent = taskName;

    const priorityBadge = document.createElement("span");
    priorityBadge.classList.add("badge");
    priorityBadge.textContent = priorityLabels[priority] || priority;

    taskItem.appendChild(taskText);
    taskItem.appendChild(priorityBadge);

    // 4. Return the completed element node
    return taskItem;
}

// ==========================================================================
// Part 3, Step 2 & 3: FORM SUBMIT EVENT HANDLER
// Intercepts form submissions, validates the input, and adds new tasks.
// ==========================================================================
function handleFormSubmit(event) {
    // 1. Prevent default reload behavior
    event.preventDefault();

    // 2. Extract input values and trim whitespace
    const taskName = taskNameInput.value.trim();
    const taskPriority = taskPrioritySelect.value.trim();

    // 3. Clear any existing error messages from previous inputs
    errorDisplay.textContent = "";

    // 4. Validation: text must not be empty or only spaces
    if (taskName === "") {
        errorDisplay.textContent = "Please enter a task name before adding it.";
        taskNameInput.focus();
        return;
    }

    // 5. Generate a new element using the creation function
    const newTaskElement = createTaskElement(taskName, taskPriority);

    // 6. Append the new item to the main list container
    taskListContainer.appendChild(newTaskElement);

    // 7. Reset the form back to its default state
    taskForm.reset();
    taskNameInput.focus();
}

// Attach the listener to the form element
taskForm.addEventListener("submit", handleFormSubmit);

// ==========================================================================
// Feature B (Option 1): DARK MODE TOGGLE
// Toggles the .dark-theme class on <body> when the header button is clicked.
// ==========================================================================
function toggleDarkMode() {
    const isDark = document.body.classList.toggle("dark-theme");
    themeToggleButton.textContent = isDark ? "Toggle Light Mode" : "Toggle Dark Mode";
}

themeToggleButton.addEventListener("click", toggleDarkMode);
