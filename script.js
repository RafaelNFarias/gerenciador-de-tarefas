let tasks = [];

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        tasks.push(taskText);
        taskInput.value = "";
        renderTasks();
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function editTask(index) {
    const newTaskText = prompt("Edite a tarefa:", tasks[index]);
    if (newTaskText !== null && newTaskText.trim() !== "") {
        tasks[index] = newTaskText.trim();
        renderTasks();
    }
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task';
        
        const taskText = document.createElement('span');
        taskText.textContent = task;

        const actions = document.createElement('div');
        actions.className = 'actions';

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.onclick = () => editTask(index);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => removeTask(index);

        actions.appendChild(editButton);
        actions.appendChild(removeButton);

        li.appendChild(taskText);
        li.appendChild(actions);

        taskList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', renderTasks);
