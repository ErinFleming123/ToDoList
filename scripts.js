//March 10---just finished page 13 of "Building a ToDo List"
//March 11--do pages, 14, 15, and 16 of "Building a ToDo List"--finished March 11
//March 12--do pages 17, 18, 19 of "Building a ToDo List". finished:  17, 18

class ToDoClass {
  constructor() {
    alert('Hello World!');
  }
}
let toDo;
window.addEventListener("load", () => {
   toDo = new ToDoClass();
});

class ToDoClass {
  constructor() {
    this.tasks = [
      {task: 'Go to Dentist', isComplete: false},
    ];
    this.loadTasks();
  }
  loadTasks() {
    let tasksHtml = this.tasks.reduce((html, tasks, index) => html += 
    this.generateTaskHtml(task, index), '');
    document.getElementById('taskList').innerHTML = tasksHtml;
  }
  generateTaskHtml(task, index) {
    return `
    <li class="list-group-item checkbox">
      <div class="row">
        <div class="col-md-1 col-xs-1 col-1g-1 col-sm-1 checkbox">
        </div>
      </div>
    </li>`
  }

  }
