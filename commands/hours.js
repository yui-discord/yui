module.exports = {
	name: "hours",
	description: "Que horas são?",
	execute(message, args) {
		const date = new Date();
		message.channel.send(
			`Agora são **${date.getHours()}**:**${date.getMinutes()}**`
		);
	},
};
