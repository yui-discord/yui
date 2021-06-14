const poll = require("./functions/poll");

function execute(message, args) {
  poll(message, args);
}

module.exports = {
  name: "poll",
  description: "Votação, sim ou não",
  execute,
};
