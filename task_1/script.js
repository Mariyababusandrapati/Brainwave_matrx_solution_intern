// Add event listener to the "Add Task" button
document.getElementById('addTaskButton').addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    // Do not add empty tasks
    if (taskText === '') {
        return;
    }

    // Create a new list item
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    // Add task text to the list item
    const taskTextNode = document.createTextNode(taskText);
    li.appendChild(taskTextNode);

    // Create a "Remove" button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        taskList.removeChild(li);  // Remove the task from the list
    };
    li.appendChild(removeButton);

    // Add the new task to the list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}

// Toggle task completion when clicked
document.getElementById('taskList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
});
