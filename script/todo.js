const todoForm = document.getElementById('todoForm');

function fetchTodoList() {
    const todo = localStorage.getItem('todo');
    return todo ? JSON.parse(todo) : []
}

function saveTodoList(todoList = []) {
    localStorage.setItem('todo', JSON.stringify(todoList));
}

function saveTodo(content) {
    const todoList = fetchTodoList();
    const todo = { id: Date.now(), content }
    saveTodoList([...todoList, todo]);
}

function activateTodoList() {
    const todoBox = document.querySelector('.todo');
    todoBox.classList.remove('hidden');
}

function handleDeleteTodo(e) {
    const todoList = fetchTodoList();

    saveTodoList(todoList.filter(v => v.id !== parseInt(e.target.dataset.id)));
    e.target.parentNode.remove();
}

function drawTodo(todo) {
    const span = document.createElement('span');
    span.innerText = todo.content;

    const button = document.createElement('button');
    button.dataset.id = todo.id;
    button.innerText = 'X';
    button.addEventListener('click', handleDeleteTodo);

    const li = document.createElement('li');
    li.id = todo.id;
    li.appendChild(span);
    li.appendChild(button);
    
    const todoList = document.getElementById('todoList');
    todoList.appendChild(li);
}

function drawTodoList() {
    const todo = fetchTodoList();
    if (!todo || todo.length < 1) {
        return;
    }

    todo.forEach(drawTodo);
}

function handleTodoSubmit() {
    const input = document.getElementById('todoInput');
    const value = input.value;
    saveTodo(value);

    input.value = "";

    drawTodoList();
}

todoForm.addEventListener('submit', e => {
    e.preventDefault();
    handleTodoSubmit();
});