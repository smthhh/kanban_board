function drag(event){
    event.dataTransfer.setData('text', event.target.id);
    event.target.style.opacity = '0.7';
    // определили id элемента который выбрали
}

const dragStart = (event) => {
    event.target.closest('.task-item').classList.add('over');
}

const dragEnd = (event) => {
    const allTasks = document.querySelectorAll('.task-item');
    allTasks.forEach((task) => {
        task.classList.remove('over');
    });
    event.target.style.opacity = '1';
}

function allowDrop(event){
    event.preventDefault();
}

function drop(event){
    event.preventDefault();
    let dataCard = event.dataTransfer.getData('text');
    const currentTask = document.getElementById(dataCard);
    const headColumn = event.target.closest('.head-task');
    console.log(event.target.closest('.task-item'));
    if(event.target.closest('.task-item')){
        event.target.closest('.task-item')
        .insertAdjacentElement('afterend', currentTask)
    } else if (headColumn) {
        event.target.nextElementSibling
        .insertAdjacentElement('afterbegin', currentTask);
    } else {
        event.target.insertAdjacentElement('beforeend', currentTask);
    }
    
    counterTasks();
    // event.target.append(currentTask);
}

function initDragAndDrop(){
    let allTasks = document.getElementsByClassName('task-item');
    let boxList = document.getElementsByClassName('task-col1');

    for(let task of allTasks) {
        task.draggable = true;
        task.addEventListener('dragstart', drag);
        task.addEventListener('dragenter', dragStart);
        task.addEventListener('dragend', dragEnd);
    }

    for(let column of boxList) {
        column.addEventListener('dragover', allowDrop);
        column.addEventListener('drop', drop);
    }
}

initDragAndDrop();