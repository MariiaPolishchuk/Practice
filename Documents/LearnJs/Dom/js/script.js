document.addEventListener('DOMContentLoaded', () => {
    // выбор и изменение фигуры
    document.getElementById('shapeSelect').addEventListener('change', function () {
        const shapeType = this.value;
        const shape = document.getElementById('shape');
        shape.className = shapeType;
    })

    document.getElementById('applyColorButton').addEventListener('click', applyColor);

    function applyColor() {
        const colorInput = document.getElementById('colorPicker');
        const color = colorInput.value || '#000000';
        const shape = document.getElementById('shape');
        shape.style.backgroundColor = color;
    }

    // добавления элемента в список
    const btn123 = document.getElementById('btn123');
    const listContainer = document.getElementById('list-container');
    const ulElement = document.createElement('ul');

    btn123.addEventListener('click', () => {
        const liElement = document.createElement('li');
        liElement.textContent = 'Привет';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            ulElement.removeChild(liElement);
        });

        liElement.appendChild(deleteButton);
        ulElement.appendChild(liElement);
        listContainer.appendChild(ulElement);
    });

    // TODO 
    const todoInput = document.getElementById('todoInput');
    const addButton = document.getElementById('addButton');
    const todoList = document.getElementById('todoList');

    addButton.addEventListener('click', () => {
        const todoText = todoInput.value;
        if (todoText.trim() === '') return;

        const liElement = document.createElement('li');
        liElement.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(liElement);
        });

        liElement.appendChild(deleteButton);
        todoList.appendChild(liElement);
        todoInput.value = '';
    });
});
