const inquirer = require("inquirer");
const Tasks = require("../models/tasks");
require("colors");

const questions = [
  {
    type: "list",
    name: "opt",
    message: "Select an option",
    choices: [
      {
        value: "1",
        name: "1. Add task",
      },
      {
        value: "2",
        name: "2. List tasks",
      },
      {
        value: "3",
        name: "3. List completed tasks",
      },
      {
        value: "4",
        name: "4. List pending tasks",
      },
      {
        value: "5",
        name: "5. Mark task as complete",
      },
      {
        value: "6",
        name: "6. Delete task",
      },
      {
        value: "0",
        name: "0. Exit",
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("================================".rainbow);
  console.log("        Select an option");
  console.log("================================".rainbow);

  const { opt } = await inquirer.prompt(questions);
  return opt;
};

const pause = async () => {
  const enter = [
    {
      type: "input",
      name: "opt",
      message: `Press ${"ENTER".green} to continue`,
    },
  ];

  console.log("\n");
  await inquirer.prompt(enter);
};

const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Please enter a value";
        }
        return true;
      },
    },
  ];
  const { desc } = await inquirer.prompt(question);
  return desc;
};

const listTaskDelete = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    const idx = `${i + 1}`.green;
    return {
      value: task.id,
      name: `${idx} ${task.desc}`,
    };
  });

  const questions = [
    {
      type: "list",
      name: "id",
      massage: "Delete",
      choices,
    },
  ];

  const { opt } = await inquirer.prompt(choices);
  return id;
};

module.exports = {
  inquirerMenu,
  pause,
  readInput,
  listTaskDelete,
};
