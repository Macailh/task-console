const Task = require("./task");

class Tasks {
  _list = {};
  get listArray() {
    const list = [];
    Object.keys(this._list).forEach((key) => {
      const task = this._list[key];
      list.push(task);
    });
    return list;
  }

  constructor() {
    this._list = {};
  }

  deleteTask(id = "") {
    if (this._list[id]) {
      delete this._list[id];
    }
  }

  loadTaskFromArray(tasks = []) {
    tasks.forEach((task) => {
      this._list[task.id] = task;
    });
  }

  addTask(desc = "") {
    const task = new Task(desc);
    this._list[task.id] = task;
  }

  fullList(_list) {
    console.log("");

    this.listArray.forEach((task, i) => {
      const idx = `${i + 1}`.green;
      const { desc, completedIn } = task;
      const status = completedIn ? "Completed".green : "Pending".red;

      console.log(`${idx} ${desc} :: ${status}`);
    });
  }

  listTaskByStatus(completed = true) {
    console.log("");

    let cont = 0;
    this.listArray.forEach((task) => {
      const { desc, completedIn } = task;
      const status = completedIn ? "Completed".green : "Pending".red;

      if (completed) {
        if (completedIn) {
          cont += 1;
          console.log(`${cont.toString().green} ${desc} :: ${completedIn}`);
        }
      } else {
        if (!completedIn) {
          cont += 1;
          console.log(`${cont.toString().green} ${desc} :: ${status}`);
        }
      }
    });
  }
}

module.exports = Tasks;
