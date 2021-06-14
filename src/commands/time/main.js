const getHours = require("./functions/getHours");

function execute(message, args) {
  if (args == "hours") {
    getHours(message);
  }
}

module.exports = {
  name: "time",
  description: "Que horas são?",
  execute,
};
