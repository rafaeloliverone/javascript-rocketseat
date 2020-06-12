var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var allTasks = JSON.parse(localStorage.getItem('list-tasks')) || [];

renderAll();

function renderAll() {
    listElement.innerHTML = '';

    for (task of allTasks) {
        var taskElement = document.createElement('li');
        var taskText = document.createTextNode(task);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        
        var linkText = document.createTextNode('Delete');
        linkElement.appendChild(linkText);

        var position = allTasks.indexOf(task);
        linkElement.setAttribute('onclick', `deleteTask(${position})`);

        taskElement.appendChild(taskText);
        taskElement.appendChild(linkElement);
        listElement.appendChild(taskElement);
    }
}

function addTask() {
    var inputText = inputElement.value;
    allTasks.push(inputText);

    inputElement.value = '';
    renderAll();
    saveToStorage();
}

function deleteTask(position){
    allTasks.splice(position, 1);
    renderAll();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list-tasks', JSON.stringify(allTasks) );
}