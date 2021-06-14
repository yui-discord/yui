const axios = require("axios");

async function bitcoin(message) {
  const response = await axios({
    method: "GET",
    url: "https://economia.awesomeapi.com.br/last/BTC-BRL",
  });
  message.channel.send(`

			**${response.data.BTCBRL.name}**
			> **Compra:** ${response.data.BTCBRL.bid}
			> **Venda:** ${response.data.BTCBRL.ask}
			> **Variação:** ${response.data.BTCBRL.varBid}
			> **Porcentagem de variação:** ${response.data.BTCBRL.pctChange}
			> **Máximo:** ${response.data.BTCBRL.high}
			> **Mínimo:** ${response.data.BTCBRL.low}

		`);
}

module.exports = bitcoin;
