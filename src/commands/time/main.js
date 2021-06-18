const hours = require("./functions/hours");

const execute = (message, args) => {
  if (args == "hours") {
    hours(message);
  }
};

module.exports = {
  name: "time",
  description: "Que horas são?",
  execute,
};
