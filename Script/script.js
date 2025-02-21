let totalTasks = 0;
let completedTasks = 0;

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const error = document.getElementById('error');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        error.textContent = 'Error: No puedes agregar una tarea vacía.';
        return;
    }

    error.textContent = '';
    totalTasks++;
    document.getElementById('totalTasks').textContent = `Total de Tareas: ${totalTasks}`;
    document.getElementById('incompleteTasks').textContent = `Tareas Sin Completar: ${totalTasks - completedTasks}`;

    const li = document.createElement('li');
    li.textContent = taskInput.value;

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    const checkButton = document.createElement('button');
    checkButton.textContent = '✔️';
    checkButton.onclick = () => {
        li.classList.toggle('completed');
        completedTasks += li.classList.contains('completed') ? 1 : -1;
        updateTaskCounts();
    };

    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.onclick = () => {
        taskInput.value = taskInput.value === li.textContent ? '' : li.textContent;
        li.remove();
        totalTasks--;
        updateTaskCounts();
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Borrar';
    deleteButton.onclick = () => {
        li.remove();
        totalTasks--;
        updateTaskCounts();
    };

    buttonContainer.appendChild(checkButton);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);
    li.appendChild(buttonContainer);
    taskList.appendChild(li);
    taskInput.value = '';
}



// Tareas por defecto
const defaultTasks = [
    "Tarea 1: Comprar víveres",
    "Tarea 2: Hacer ejercicio",
    "Tarea 3: Leer un libro"
];

defaultTasks.forEach(task => {
    totalTasks++;
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = task;

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    const checkButton = document.createElement('button');
    checkButton.textContent = '✔️';
    checkButton.onclick = () => {
        li.classList.toggle('completed');
        completedTasks += li.classList.contains('completed') ? 1 : -1;
        updateTaskCounts();
    };

    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.onclick = () => {
        taskInput.value = task;
        li.remove();
        totalTasks--;
        updateTaskCounts();
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Borrar';
    deleteButton.onclick = () => {
        li.remove();
        totalTasks--;
        updateTaskCounts();
    };

    function updateTaskCounts() {
        document.getElementById('totalTasks').textContent = `Total de Tareas: ${totalTasks}`;
        document.getElementById('completedTasks').textContent = `Tareas Completadas: ${completedTasks}`;
        document.getElementById('incompleteTasks').textContent = `Tareas Sin Completar: ${totalTasks - completedTasks}`;
    };

    buttonContainer.appendChild(checkButton);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);
    li.appendChild(buttonContainer);
    taskList.appendChild(li);
});

updateTaskCounts();