const axios = require("axios");

module.exports = {
	name: "bitcoin",
	description: "Quanto está a cotação do bitcoin para reais agora?",
	async execute(message, args) {
		const response = await axios({
			method: "GET",
			url: "https://economia.awesomeapi.com.br/last/BTC-BRL",
		});
		console.log(response.data.BTCBRL);
		message.channel.send(`

			**${response.data.BTCBRL.name}**
			> **Compra:** ${response.data.BTCBRL.bid}
			> **Venda:** ${response.data.BTCBRL.ask}
			> **Variação:** ${response.data.BTCBRL.varBid}
			> **Porcentagem de variação:** ${response.data.BTCBRL.pctChange}
			> **Máximo:** ${response.data.BTCBRL.high}
			> **Mínimo:** ${response.data.BTCBRL.low}

		`);
	},
};
