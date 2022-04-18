 /*
  * ====================================================
  * Function: UI Object
  * Description: Show Task Object values on UI.
  * ====================================================
  */

 //Import Object File
 import LS from './LS.js';

 const ls = new LS();

 function UI() {}


 /*
  * ====================================================
  * Function: Show All Task Prototype Fuction
  * Description: Show All Task Object values on UI.
  * ====================================================
  */

  UI.prototype.showTasks = function () {
      let tasks = ls.fetchTask();
      let taskHTML = '';

      tasks.forEach(task => {
         taskHTML += `
            <div class="task ${task.isCompleted ? 'completed' : ''}" data-createdat="${task.id}">
                <div class="task__details">
                    <input type="checkbox" class="task-check" ${task.isCompleted ? 'checked' : ''} />
                    <label class="task-title">${task.title}</label>
                </div>
            
                <div class="task__op">
                    <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
                    <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
                </div>
            </div>
            `;
      });

      document.querySelector('.task-list').innerHTML = taskHTML;
  }

 /*
  * ====================================================
  * Function: AddToUi Prototype Fuction
  * Description: Show Task Object values on UI.
  * ====================================================
  */
 UI.prototype.addToUi = function (task) {
     //task store prototype function call
     ls.storeTask(task);
     //Add Task UI
     let taskHtml = `
        <div class="task" data-createdat="${task.id}">
            <div class="task__details">
                <input type="checkbox" class="task-check" />
                <label class="task-title">${task.title}</label>
            </div>
        
            <div class="task__op">
                <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
                <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
            </div>
        </div>
        `;

     document
         .querySelector('.task-list')
         .insertAdjacentHTML('afterbegin', taskHtml);
 }

 /*
  * ====================================================
  * Function: resetFOrm Prototype Function
  * Description: Reset form input value from UI.
  * ====================================================
  */
 UI.prototype.resetForm = function () {
     document.querySelector('#newtaskID').value = '';
 }


 /*
  * ====================================================
  * Function: Task Delete Prototype Function
  * Description: Delete Task from UI.
  * ====================================================
  */
 UI.prototype.taskDelete = function (e) {
     const task = e.target.parentElement.parentElement;
     const id = task.dataset.createdat;
     ls.deleteTask(id);
     task.remove();
 }

 /*
  * ====================================================
  * Function: Task Completed Prototype Function
  * Description: Task Completed from UI.
  * ====================================================
  */
 UI.prototype.taskCompleted = function (e) {
     const task = e.target.parentElement.parentElement;
     const id = task.dataset.createdat;
     ls.completeTask(id);
     task.classList.toggle('completed');
 }


 /*
  * ====================================================
  * Function: Task Edit Prototype Function
  * Description: Task Edit from UI.
  * ====================================================
  */
 UI.prototype.taskEdit = function (e) {
     const task = e.target.parentElement.parentElement;
     const id = task.dataset.createdat;
     const data = ls.findTask(id);

     document.querySelector('#newtaskID').value = data.title;
     document.querySelector('#updateTaskId').value = data.id;

     document.querySelector('.AddTaskBtn').style.display = 'none';
     document.querySelector('.EditTaskBtn').style.display = 'inline';
     document.querySelector('.CancelTaskBtn').style.display = 'inline';
 }


 /*
  * ====================================================
  * Function: Task Update Prototype Function
  * Description: Task Update from UI.
  * ====================================================
  */
 UI.prototype.taskUpdate = function (e) {
     const tasks = document.querySelectorAll('.task-title');
     let taskTitle = document.querySelector('#newtaskID').value;
     let taskId = document.querySelector('#updateTaskId').value;

     if (taskTitle.length > 0) {
         ls.taskUpdate(taskId, taskTitle);
         tasks.forEach(title => {
             if (title.parentElement.parentElement.dataset.createdat === taskId) {
                 title.innerText = taskTitle;
             }
         });
     }

     document.querySelector('#newtaskID').value = '';
     document.querySelector('#updateTaskId').value = '';

     document.querySelector('.AddTaskBtn').style.display = 'none';
     document.querySelector('.EditTaskBtn').style.display = 'inline';
     document.querySelector('.CancelTaskBtn').style.display = 'inline';
 }


 /*
  * ====================================================
  * Function: Task Cancel Prototype Function
  * Description: Task Cancel from UI.
  * ====================================================
  */
 UI.prototype.taskCancel = function (e) {
     document.querySelector('#newtaskID').value = '';
     document.querySelector('#updateTaskId').value = '';

     document.querySelector('.AddTaskBtn').style.display = 'inline';
     document.querySelector('.EditTaskBtn').style.display = 'none';
     document.querySelector('.CancelTaskBtn').style.display = 'none';
 }

 export default UI;