const axios = require("axios");

module.exports = {
	name: "dolar",
	description: "Quanto está a cotação do dolar para reais agora?",
	async execute(message, args) {
		const response = await axios({
			method: "GET",
			url: "https://economia.awesomeapi.com.br/last/USD-BRL",
		});
		console.log(response.data.USDBRL);
		message.channel.send(`

			**${response.data.USDBRL.name}**
			> **Compra:** ${response.data.USDBRL.bid}
			> **Venda:** ${response.data.USDBRL.ask}
			> **Variação:** ${response.data.USDBRL.varBid}
			> **Porcentagem de variação:** ${response.data.USDBRL.pctChange}
			> **Máximo:** ${response.data.USDBRL.high}
			> **Mínimo:** ${response.data.USDBRL.low}

		`);
	},
};
