const meme = require("./functions/meme");
const random = require("./functions/random");

function execute(message, args) {
  if (args == "random") {
    random(message);
  }
  if (args == "meme") {
    meme(message);
  }
}

module.exports = {
  name: "img",
  description: "Comandos de imagem",
  execute,
};
