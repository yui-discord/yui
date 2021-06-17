const search = require("./functions/search");
const list = require("./functions/list");
const img = require("./functions/img");

function execute(message, args) {
  if (args[0] == "search") {
    args.shift();
    search(message, args);
  }
  if (args == "list") {
    list(message);
  }
  if (args[0] == "img") {
    args.shift();
    img(message, args);
  }
}

module.exports = {
  name: "anime",
  description: "Comandos de anime",
  execute,
};
