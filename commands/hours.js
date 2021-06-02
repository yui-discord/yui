module.exports = {
	name: "hours",
	description: "Bom dia",
	execute(message, args) {
		const date = new Date();
		message.channel.send(
			`Agora são ${date.getHours()} hora(s) e ${date.getMinutes()} minuto(s)`
		);
	},
};
