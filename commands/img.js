require("dotenv").config();

const axios = require("axios");
const Canvas = require("canvas");
const Discord = require("discord.js");

module.exports = {
	name: "img",
	description: "Get a random image",
	async execute(message, args) {
		const response = await axios({
			method: "GET",
			url: "https://api.unsplash.com/photos/random",
			params: {
				client_id: process.env.UNSPLASH_ACCESS_KEY,
			},
		});

		const canvas = Canvas.createCanvas(1000, 1000);
		const context = canvas.getContext("2d");
		const background = await Canvas.loadImage(response.data.urls.small);

		context.drawImage(background, 0, 0, canvas.width, canvas.height);

		const attachment = new Discord.MessageAttachment(
			canvas.toBuffer(),
			"image.png"
		);

		message.channel.send(
			`Imagem de **${response.data.user.name}**`,
			attachment
		);
	},
};
