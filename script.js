// script.js

// Constants for input button and task list area
const taskInput = document.querySelector("#task-input");
const taskSection = document.querySelector("#tasks");
const darkModeToggle = document.querySelector('#toggle-dark-mode');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Initialize tasks on page load
document.addEventListener('DOMContentLoaded', () => {
    tasks.forEach(task => {
        addTaskToDOM(task);
    });

    // Load dark mode state
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="uil uil-sun"></i>';
    }
});

// Listener for the Enter key to add a new task
taskInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        createTask();
    }
});

// Onclick event for the 'Add' button
document.querySelector('#push').onclick = function () {
    createTask();
}

// Function to create a task
function createTask() {
    if (taskInput.value.trim().length === 0) {
        alert("The task field is blank. Enter a task name and try again.");
    } else {
        const task = taskInput.value.trim();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        addTaskToDOM(task);

        // Clear the input field
        taskInput.value = '';
    }
}

// Add task to DOM
function addTaskToDOM(task) {
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.innerHTML = `
        <label id="taskname">
            <input onclick="updateTask(this)" type="checkbox" id="check-task"> 
            <p>${task}</p>
        </label>
        <div class="delete">
            <i class="uil uil-trash"></i>
        </div>
    `;

    // Attach event listener for delete
    taskElement.querySelector('.delete').onclick = function () {
        removeTask(taskElement, task);
    };

    taskSection.appendChild(taskElement);
}

// Remove task from DOM and local storage
function removeTask(element, taskText) {
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Animate removal and remove element after animation
    element.classList.add('fadeOut');
    element.addEventListener('animationend', () => {
        element.remove();
    });
}

// Update task status
function updateTask(task) {
    let taskItem = task.parentElement.querySelector('p');
    if (task.checked) {
        taskItem.classList.add("checked");
    } else {
        taskItem.classList.remove("checked");
    }
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        darkModeToggle.innerHTML = '<i class="uil uil-sun"></i>';
    } else {
        localStorage.setItem('dark-mode', 'disabled');
        darkModeToggle.innerHTML = '<i class="uil uil-moon"></i>';
    }
});
