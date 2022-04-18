 /*
  * =======================================================
  * Function: LS Object
  * Description: Store Task Object values on local storage.
  * ========================================================
  */

  function LS() {}

 /*
  * =======================================================
  * Function: Task Store Prototype Fuction
  * Description: Store Task Object values on Local Storage.
  * =======================================================
  */

  LS.prototype.fetchTask = function () {
      let tasks = localStorage.getItem('tasks');
      return (tasks) ? JSON.parse(tasks) : [];
  }


 /*
  * =======================================================
  * Function: Task Store Prototype Fuction
  * Description: Store Task Object values on Local Storage.
  * =======================================================
  */

  LS.prototype.storeTask = function (task) {
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

  LS.prototype.deleteTask = function (id) {
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

  LS.prototype.completeTask = function (id) {
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

  LS.prototype.findTask = function (id) {
      let tasks = this.fetchTask();
      return tasks.find(task => task.id === id);
  }


 /*
  * =======================================================
  * Function: Task Update Prototype Fuction
  * Description: Update Task value from Local Storage.
  * =======================================================
  */

  LS.prototype.taskUpdate = function (id, title) {
      let tasks = this.fetchTask();
      let index = tasks.findIndex(task => task.id === id);
      tasks[index].title = title;
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  //Export UI Objects
  export default LS;