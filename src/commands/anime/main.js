const search = require("./functions/search");
const list = require("./functions/list");

function execute(message, args) {
  if (args[0] == "search") {
    args.shift();
    search(message, args);
  }
  if (args == "list") {
    list(message);
  }
}

module.exports = {
  name: "anime",
  description: "Comandos de anime",
  execute,
};
