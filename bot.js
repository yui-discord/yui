const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
	console.log(
		`Logged in as ${client.user.tag}! on ${client.guilds.cache.size} server(s)`
	);
});

client.on("message", (msg) => {
	if (msg.content === `${config.prefix} playlist`) {
		msg.reply(
			"aqui está, a melhor playlist de todas! :blush:\nhttps://music.youtube.com/playlist?list=PL_UuXhPMmfULTN8GJQlPECG6B8ydRN483"
		);
	}
});

client.login(config.token);
