const fs = require("fs");
const addTask = function (title, description) {
  // get old tasks
  const tasks = getTask();
  // check exits task
  const foundedTask = tasks.find((item) => {
    return item.title == title;
  });
  if (foundedTask) return;
  // add task
  const task = { title, description };

  tasks.push(task);
  saveTask(tasks);
};

const removeTask = function (title) {
  // check exit task
  const tasks = getTask();
  const index = tasks.findIndex((item) => {
    return item.title == title;
  });

  // remove task
  if (index !== -1) {
    tasks.splice(index, 1);
    saveTask(tasks);
  }
};

const updateTask = function (title, description) {
  const tasks = getTask();
  const index = tasks.findIndex((item) => {
    return item.title == title;
  });
  if (index !== -1) {
    tasks[index].title = title;
    tasks[index].description = description;
    saveTask(tasks);
  }
};

const detailTask = function (title) {
  const tasks = getTask();
  const foundedTask = tasks.findIndex((item) => {
    return item.title == title;
  });
  if(foundedTask !== -1){
    console.log("title:",tasks[foundedTask].title);
    console.log("desctiption:",tasks[foundedTask].description);

  }
};

const listTasks = function () {
  const tasks = getTask();
  tasks.forEach((item) => {
    console.log("title:", item.title);
    console.log("description:", item.description);
    console.log("---------------");
  });
};

const saveTask = function (tasks) {
  const taskJSON = JSON.stringify(tasks);
  // write  file
  fs.writeFileSync("tasks.json", taskJSON);
};

const getTask = function () {
  try {
    const taskBuffer = fs.readFileSync("tasks.json");
    const taskJSON = taskBuffer.toString();
    return JSON.parse(taskJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  addTask,
  removeTask,
  listTasks,
  updateTask,
  detailTask
};
