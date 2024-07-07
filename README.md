# Advanced Task List Application

## Overview

This is a task list application built with HTML, CSS, and JavaScript. The app allows users to add, complete, and delete tasks, with data persistence using local storage. It also includes a dark mode toggle for a modern and user-friendly interface.

## Features

- **Add Tasks**: Users can add tasks by typing in the input field and pressing Enter or clicking the "Add" button.
- **Complete Tasks**: Tasks can be marked as completed by checking the checkbox.
- **Delete Tasks**: Tasks can be deleted using the trash icon.
- **Dark Mode**: Toggle between light and dark modes for better accessibility.
- **Data Persistence**: Tasks are stored in local storage and persist across page reloads.

## File Structure

├── index.html
├── style.css
└── script.js


### `index.html`

This file contains the HTML structure of the application. Key components include:
- An input field and button for adding tasks.
- A container for displaying tasks.
- A button for toggling dark mode.

### `style.css`

This file contains the CSS styles for the application. It includes:
- General styles for the layout.
- Styling for the task list and individual tasks.
- Animations for adding and removing tasks.
- Styles for the dark mode.

### `script.js`

This file includes the JavaScript functionality for the application. Key features include:
- Handling task creation and deletion.
- Updating task status.
- Managing dark mode.
- Interacting with local storage to persist tasks.

## Setup

To use the task list application:

1. **Clone or Download** the repository to your local machine.
2. **Open `index.html`** in your preferred browser.

## Usage

1. **Add a Task**: Type a task in the input field and press Enter or click the "Add" button.
2. **Complete a Task**: Click the checkbox next to a task to mark it as completed.
3. **Delete a Task**: Click the trash icon next to a task to remove it.
4. **Toggle Dark Mode**: Click the moon/sun icon to switch between light and dark modes.

## Local Storage

The application uses local storage to save tasks and dark mode preference. When a task is added or deleted, the list is updated in local storage. The dark mode setting is also saved and applied on page reload.

## Contribution

Contributions are welcome! Feel free to fork the repository and submit pull requests with improvements or new features.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgements

- Icons from [Unicons](https://iconscout.com/unicons)
- Dark mode implementation inspired by various modern web applications.
