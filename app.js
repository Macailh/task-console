require("colors");

const {
  inquirerMenu,
  pause,
  readInput,
  listTaskDelete,
} = require("./helpers/inquirer");
const { saveInfo, readDb } = require("./helpers/saveFile");
const Tasks = require("./models/tasks");

console.clear();

const main = async () => {
  let opt = "";
  const tasks = new Tasks();

  const tasksDb = readDb();

  if (tasksDb) {
    tasks.loadTaskFromArray(tasksDb);
  }

  do {
    // Print menu
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await readInput("Description:");
        tasks.addTask(desc);

        break;

      case "2":
        tasks.fullList();

        break;

      case "3":
        tasks.listTaskByStatus(true);

        break;

      case "4":
        tasks.listTaskByStatus(false);

        break;

      case "6":
        const id = await listTaskDelete(tasks.listArray);
        console.log(id);
    }

    saveInfo(tasks.listArray);

    await pause();
  } while (opt !== "0");

  //   inquirerMenu();
  //   pause();
};

main();
