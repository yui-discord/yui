const bitcoin = require("./functions/bitcoin");
const dolar = require("./functions/dolar");
const euro = require("./functions/euro");

function execute(message, args) {
  if (args == "dolar") {
    dolar(message);
  }
  if (args == "euro") {
    euro(message);
  }
  if (args == "bitcoin") {
    bitcoin(message);
  }
}

module.exports = {
  name: "money",
  description: "Cotação de moedas",
  execute,
};
