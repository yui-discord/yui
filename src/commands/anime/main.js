const search = require("./functions/search");
const list = require("./functions/list");
const img = require("./functions/img");
const sfw = require("./functions/sfw");
const nsfw = require("./functions/nsfw");

function execute(message, args) {
  if (args[0] == "find" || args[0] == "search") {
    args.shift();
    search(message, args);
  }
  if (args[0] == "img") {
    args.shift();
    img(message, args);
  }
  if (args == "list") {
    list(message);
  }
  if (args[0] == "sfw") {
    args.shift();
    sfw(message, args);
  }
  if (args[0] == "nsfw") {
    args.shift();
    nsfw(message, args);
  }
}

module.exports = {
  name: "anime",
  description: "Comandos de anime",
  execute,
};
