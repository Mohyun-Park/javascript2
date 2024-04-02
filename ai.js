const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const todoName = document.getElementById('todo-name').value;
    const todoDueDate = document.getElementById('todo-due-date').value;

    addTodoItem(todoName, todoDueDate);
    // todoForm.reset();
    // renderTodoList(); // Re-render the todo list after adding a new item
});

function addTodoItem(name, dueDate) {
    const todoItem = document.createElement('tr');
    todoItem.classList.add('todo-item');
    todoItem.classList.add('not-completed');
    const statusCell = document.createElement('td');
    const deleteBtn = document.createElement('span');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '&#128465;';

    todoItem.innerHTML = `
        <td class="status"></td>
        <td class="name">${name}</td>
        <td class="due-date">${dueDate}</td>
        <td class="delete-cell"></td>
    `;

    todoItem.querySelector('.delete-cell').appendChild(deleteBtn);

    todoList.appendChild(todoItem);

    deleteBtn.addEventListener('click', function() {
        todoItem.remove();
        // renderTodoList(); // Re-render the todo list after deleting an item
    });

    statusCell.addEventListener('click', function() {
        if (todoItem.classList.contains('completed')){
            todoItem.classList.remove('completed');
            todoItem.classList.add('not-completed');
        }
        else{
            todoItem.classList.remove('not-completed');
            todoItem.classList.add('completed');
        }
    });

    todoItem.querySelector('.status').appendChild(statusCell);
}

