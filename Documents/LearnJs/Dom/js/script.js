document.addEventListener('DOMContentLoaded', () => {
    // Shape selection and modification
    const shapeSelect = document.querySelector('.shapeSelect');
    const shapeElement = document.querySelector('.shape');

    shapeSelect.addEventListener('change', function () {
        const selectedShape = this.value;
        shapeElement.className = 'shape ' + selectedShape;
    });

    // Apply color to shape
    const applyColorButton = document.querySelector('.applyColorButton');
    const colorPickerInput = document.querySelector('.colorPickerInput');

    applyColorButton.addEventListener('click', () => {
        const selectedColor = colorPickerInput.value || '#000000';
        shapeElement.style.backgroundColor = selectedColor;
    });

    // Function to add item to a list
    function addItemToList(container, text) {
        const listItem = document.createElement('li');
        listItem.textContent = text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            container.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        container.appendChild(listItem);
    }

    // Adding item to the general list
    const addGeneralItemButton = document.querySelector('.addGeneralItemButton');
    const generalList = document.querySelector('.generalList');

    addGeneralItemButton.addEventListener('click', () => {
        addItemToList(generalList, 'Привет');
    });

    // Adding item to the todo list
    const addTodoButton = document.querySelector('.addTodoButton');
    const todoList = document.querySelector('.todoList');
    const todoInput = document.querySelector('.todoInput');

    addTodoButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText === '') return;

        addItemToList(todoList, todoText);
        todoInput.value = '';
    });
});


