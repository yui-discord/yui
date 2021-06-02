module.exports = {
	name: "playlist",
	description: "Melhor playlist de todas!",
	execute(message, args) {
		message.channel.send(
			`https://music.youtube.com/playlist?list=PL_UuXhPMmfUIjbh6ytrkzkh24ac4hWK3x`
		);
	},
};
