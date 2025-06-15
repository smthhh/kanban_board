const counterTasks = () => {
    const counters = document.querySelectorAll('.task-counter');
    const columnsTask = document.querySelectorAll('.all-tasks');
    columnsTask.forEach((column, index)=>{
        const currentTasks = column.getElementsByClassName('task-item').length;
        counters[index].innerHTML = currentTasks;
    })
};

counterTasks();