const axios = require("axios");

module.exports = {
	name: "euro",
	description: "Quanto está a cotação do euro para reais agora?",
	async execute(message, args) {
		const response = await axios({
			method: "GET",
			url: "https://economia.awesomeapi.com.br/last/EUR-BRL",
		});
		console.log(response.data.EURBRL);
		message.channel.send(`

			**${response.data.EURBRL.name}**
			> **Compra:** ${response.data.EURBRL.bid}
			> **Venda:** ${response.data.EURBRL.ask}
			> **Variação:** ${response.data.EURBRL.varBid}
			> **Porcentagem de variação:** ${response.data.EURBRL.pctChange}
			> **Máximo:** ${response.data.EURBRL.high}
			> **Mínimo:** ${response.data.EURBRL.low}

		`);
	},
};
