document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const error = document.getElementById('error');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === "") {
        error.textContent = "Por favor, ingresa una tarea.";
        return;
    }

    error.textContent = "";

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;

    const editButton = document.createElement('button');
    editButton.textContent = "Editar";
    editButton.classList.add('edit');
    editButton.onclick = function() {
        const newTask = prompt("Edita tu tarea:", taskText.textContent);
        if (newTask) {
            taskText.textContent = newTask;
        }
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Eliminar";
    deleteButton.onclick = function() {
        taskList.removeChild(taskDiv);
    };

    taskDiv.appendChild(taskText);
    taskDiv.appendChild(editButton);
    taskDiv.appendChild(deleteButton);
    taskList.appendChild(taskDiv);
    taskInput.value = "";
});