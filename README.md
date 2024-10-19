
# React Todo Application

This project is a simple **React-based Todo Application** where users can:
- Add todos with descriptions.
- Update the status of each todo (Completed/Not Completed) using a custom dropdown.
- Delete todos as needed.
- Filter todos based on their status (all, completed, or not completed).

![Todo App Screenshot](./screenshot.png) <!-- You can add a screenshot path here to give a visual overview -->

## Features

- **Add Todos**: Enter the name and description of the todo and add it to the list.
- **Custom Status Dropdown**: Each todo has a dropdown to toggle between 'Completed' and 'Not Completed'.
- **Delete Todos**: Remove todos from the list with a delete button.
- **Status Filter**: Filter the displayed todos based on their completion status.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Getting Started

### Prerequisites

To run this project locally, you need to have **Node.js** and **npm** (Node Package Manager) installed.

- Download and install [Node.js](https://nodejs.org/en/download/) which includes `npm`.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/react-todo-app.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd react-todo-app
   ```

3. **Install the project dependencies:**
   ```bash
   npm install
   ```

4. **Run the application:**
   ```bash
   npm start
   ```

5. **Open your browser** and visit `http://localhost:3000` to view the app.

---

## Project Structure

The project's file structure looks like this:

```
react-todo-app/
│
├── public/                    # Public files
├── src/                       # Source files
│   ├── components/            # Components
│   │   ├── TodoItem.js        # Todo item component
│   │   ├── TodoForm.js        # Form for adding todos
│   ├── App.js                 # Main app component
│   ├── index.js               # Entry point of the app
│
├── package.json               # Project metadata and dependencies
└── README.md                  # Project documentation
```

---

## Available Scripts

In the project directory, you can run the following scripts:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

---

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS**: For styling the components.
- **PropTypes**: Used for type-checking the props passed to the components.
- **Bulma**: A modern CSS framework for styling (used for dropdown and button styles).

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
