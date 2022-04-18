/*
 * Project: TaskList
 * Description: TaskList project with Save Data To Local Storage.
 * With ES5 Prototypes and OOP Based.
 * Author: Limon Rana
 */

/*
 * Import object Files
 */
import Task from './Task.js';
import UI from './UI.js';

const ui = new UI();

ui.showTasks();

/*
 * ====================================================
 * Function: Task Add Event Function
 * Description: Task add event listener function start.
 * ====================================================
 */

document
    .querySelector('.AddTaskBtn')
    .addEventListener('click', (e) => {
        const title = document.querySelector('#newtaskID').value;
        if (title.length > 0) {
            const task = new Task(title);
            ui.addToUi(task);
            ui.resetForm();
        }
    })


/*
 * ====================================================
 * Function: Task Delete and Completed
 * Description: Task delete & Completed event listener.
 * ====================================================
 */

document
    .querySelector('.task-list')
    .addEventListener('click', (e) => {
        if (e.target.className.includes('task__op_delete')) {
            ui.taskDelete(e);
        }

        if (e.target.className.includes('task__op_edit')) {
            ui.taskEdit(e);
        }

        if (e.target.className.includes('task-check')) {
            ui.taskCompleted(e);
        }
    })   
/*
 * ====================================================
 * Function: Task Update
 * Description: Task update event listener.
 * ====================================================
 */

document
    .querySelector('.EditTaskBtn')
    .addEventListener('click', (e) => {
        ui.taskUpdate(e);
    })   
/*
 * ====================================================
 * Function: Task Cancel
 * Description: Task Cancel event listener.
 * ====================================================
 */

document
    .querySelector('.CancelTaskBtn')
    .addEventListener('click', (e) => {
        ui.taskCancel(e);
    })   