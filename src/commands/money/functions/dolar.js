const axios = require("axios");

async function dolar(message) {
  const response = await axios({
    method: "GET",
    url: "https://economia.awesomeapi.com.br/last/USD-BRL",
  });
  message.channel.send(`

			**${response.data.USDBRL.name}**
			> **Compra:** ${response.data.USDBRL.bid}
			> **Venda:** ${response.data.USDBRL.ask}
			> **Variação:** ${response.data.USDBRL.varBid}
			> **Porcentagem de variação:** ${response.data.USDBRL.pctChange}
			> **Máximo:** ${response.data.USDBRL.high}
			> **Mínimo:** ${response.data.USDBRL.low}

		`);
}

module.exports = dolar;
