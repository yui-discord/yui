const free = require("./functions/free");

const execute = (message, args) => {
  try {
    if (args[0] == "free") {
      free(message, args);
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  name: "games",
  description: "Comandos relacionados a games",
  execute,
};
