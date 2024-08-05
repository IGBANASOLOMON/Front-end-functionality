document.getElementById('new-task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;

    if (title && description) {
        addTaskToList(title, description);
        document.getElementById('new-task-form').reset();
    }
});

function addTaskToList(title, description) {
    const tasksList = document.getElementById('tasks');
    const li = document.createElement('li');
    li.innerHTML = <><strong>${title}</strong><p>${description}</p></>;
    tasksList.appendChild(li);
}