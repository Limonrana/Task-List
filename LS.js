 /*
  * =======================================================
  * Function: LS Class
  * Description: Store Tasks values on local storage.
  * ========================================================
  */

 class LS {
     /*
      * =======================================================
      * Function: Task Store Prototype Fuction
      * Description: Store Task Object values on Local Storage.
      * =======================================================
      */

     fetchTask() {
         let tasks = localStorage.getItem('tasks');
         return (tasks) ? JSON.parse(tasks) : [];
     }


     /*
      * =======================================================
      * Function: Task Store Prototype Fuction
      * Description: Store Task Object values on Local Storage.
      * =======================================================
      */

     storeTask(task) {
         let tasks = this.fetchTask();
         tasks.unshift(task);
         localStorage.setItem('tasks', JSON.stringify(tasks));
     }


     /*
      * =======================================================
      * Function: Task Delete Prototype Fuction
      * Description: Delete Task value from Local Storage.
      * =======================================================
      */

     deleteTask(id) {
         let tasks = this.fetchTask();
         let index = tasks.findIndex(task => task.id === id);
         tasks.splice(index, 1);
         localStorage.setItem('tasks', JSON.stringify(tasks));
     }


     /*
      * =======================================================
      * Function: Task Completed Prototype Fuction
      * Description: Completed Task value from Local Storage.
      * =======================================================
      */

     completeTask(id) {
         let tasks = this.fetchTask();
         let index = tasks.findIndex(task => task.id === id);
         tasks[index].isCompleted = !tasks[index].isCompleted;
         localStorage.setItem('tasks', JSON.stringify(tasks));
     }


     /*
      * =======================================================
      * Function: Task Find Prototype Fuction
      * Description: Find Task value from Local Storage.
      * =======================================================
      */

     findTask(id) {
         let tasks = this.fetchTask();
         return tasks.find(task => task.id === id);
     }


     /*
      * =======================================================
      * Function: Task Update Prototype Fuction
      * Description: Update Task value from Local Storage.
      * =======================================================
      */

     taskUpdate(id, title) {
         let tasks = this.fetchTask();
         let index = tasks.findIndex(task => task.id === id);
         tasks[index].title = title;
         localStorage.setItem('tasks', JSON.stringify(tasks));
     }
 }

 //Export UI Objects
 export default LS;