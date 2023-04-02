require("colors");

const showMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("================================".rainbow);
    console.log("        Select an option");
    console.log("================================".rainbow);

    console.log(`${"1.".yellow} Add task`);
    console.log(`${"2.".yellow} List tasks`);
    console.log(`${"3.".yellow} List completed tasks`);
    console.log(`${"4.".yellow} List pending tasks`);
    console.log(`${"5.".yellow} Mark task as complete`);
    console.log(`${"6.".yellow} Delete task`);
    console.log(`${"0.".yellow} Exit \n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Select an option: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pause = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPress ${"ENTER".green} to continue\n`, (opt) => {
      readline.close();
      resolve();
    });
  });
};

module.exports = {
  showMenu,
  pause,
};
