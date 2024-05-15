document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector('input[type="text"]');
    const addTaskButton = document.getElementById('push');
    const taskList = document.querySelector('ul');

    addTaskButton.addEventListener('click', (e) => {
        e.preventDefault();
        addTask();
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove';
        removeButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }
});