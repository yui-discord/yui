const Discord = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "meme",
  description: "Um meme aleatório",
  async execute(message) {
    const response = await axios({
      method: "GET",
      url: "https://meme-api.herokuapp.com/gimme",
    });
    const memeEmbed = new Discord.MessageEmbed()
      .setTitle(response.data.title)
      .setImage(response.data.url)
      .setFooter(`${response.data.subreddit} ${response.data.postLink}`);

    let msg = await message.channel.send("Fetching your meme..");
    msg.edit(memeEmbed);
  },
};
