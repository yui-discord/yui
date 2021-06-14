const play = require("./functions/play");

function execute(message, args) {
  if (args[0] == "play") {
    args.shift();
    play(message, args);
  }
}

module.exports = {
  name: "music",
  description: "Comandos de música",
  execute,
};
