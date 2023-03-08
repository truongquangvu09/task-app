const yargs = require("yargs");
const taskFunc = require("./task");
//add task

yargs.command({
  command: "add",
  builder: {
    title: {
      type: "string",
      demanOptions: true,
    },
    description: {
      type: "string",
      demanOptions: true,
    },
  },
  handler: function (args) {
    taskFunc.addTask(args.title, args.description);
  },
});
// remove task

yargs.command({
  command: "remove",
  build: {
    title: {
      type: "string",
      demanOptions: true,
    },
  },
  handler: function (args) {
    taskFunc.removeTask(args.title);
  },
});

// update task

yargs.command({
  command: "update",
  build: {
    title: {
      type: "string",
      demanOptions: true,
    },
    description: {
      type: "string",
      demanOptions: true,
    },
  },
  handler: function (args) {
    taskFunc.updateTask(args.title, args.description);
  },
});

// list all task

yargs.command({
  command: "list",
  builder: {},
  handler: function (args) {
    taskFunc.listTasks();
  },
});

//  task detail

yargs.command({
  command: "detail",
  build: {
    title: {
      type: "string",
      demanOptions: true,
    },
  },
  handler: function (args) {
    taskFunc.detailTask(args.title);
  },
});

yargs.parse();
