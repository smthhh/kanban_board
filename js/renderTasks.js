const tasks = [
  {
    id: 1,
    issueType: "Task",
    shortSummary: "qui est esse",
    description: "quis ut nam facilis et officia qui",
    reporter: "John Doe",
    asignees: "Peter Bobs",
    priority: "High",
    colId: 1
  },
  {
    id: 2,
    issueType: "Task",
    shortSummary: "ea molestias quasi exercitationem",
    description: "fugiat veniam minus",
    reporter: "John Doe",
    asignees: "Peter Bobs",
    priority: "High",
    colId: 2
  },
  {
    id: 3,
    issueType: "Task",
    shortSummary: "et porro tempora",
    description: "eum et est occaecati",
    reporter: "John Doe",
    asignees: "Peter Bobs",
    priority: "High",
    colId: 3
  }
]

const TASKS_URL = 'https://649127532f2c7ee6c2c7ccc6.mockapi.io/v1/tasks';


const renderTasks = () => {
  fetch(TASKS_URL)
  .then(response => response.json())
  .then(dataTasks => {
    dataTasks.forEach(task=> {
      const colContainer = 
      document.querySelector(`.task-col1[data-id="${task.colId}"] .all-tasks`);
      colContainer.innerHTML+= `
                                <a class="task-item" id="drag${task.id}" href="#">
                                  <div class="task-info">
                                      <p class="descr">
                                          ${task.shortSummary}
                                      </p>
                                      <div class="task-about">
                                          <div>
                                              <i class="material-icons current-state">done</i>
                                              <i class="material-icons current-progress">arrow_upward</i>
                                          </div>
                                          <div class="avatar">
                                              <div class="avatar-img">
        
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </a>
      `
    })
  })

  
}

renderTasks();