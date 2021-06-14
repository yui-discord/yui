const axios = require("axios");

async function euro(message) {
  const response = await axios({
    method: "GET",
    url: "https://economia.awesomeapi.com.br/last/EUR-BRL",
  });
  message.channel.send(`

			**${response.data.EURBRL.name}**
			> **Compra:** ${response.data.EURBRL.bid}
			> **Venda:** ${response.data.EURBRL.ask}
			> **Variação:** ${response.data.EURBRL.varBid}
			> **Porcentagem de variação:** ${response.data.EURBRL.pctChange}
			> **Máximo:** ${response.data.EURBRL.high}
			> **Mínimo:** ${response.data.EURBRL.low}

		`);
}

module.exports = euro;
