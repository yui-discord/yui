const axios = require("axios");

module.exports = {
	name: "dolar",
	description: "Quanto está a cotação do dolar agora?",
	async execute(message, args) {
		const response = await axios({
			method: "GET",
			url: "https://economia.awesomeapi.com.br/last/USD-BRL",
		});
		message.channel.send(
			`O dólar americano para COMPRA está ${response.data.USDBRL.bid} 💵`
		);
	},
};
