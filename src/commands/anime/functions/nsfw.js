const Discord = require("discord.js");
const axios = require("axios");

async function nsfw(message, args) {
  await axios({
    url: `https://api.waifu.pics/nsfw/${args}`,
    method: "GET",
  })
    .then((response) => {
      const { url } = response.data;

      const messageEmbed = new Discord.MessageEmbed()
        .setColor("#fdd092")
        .setImage(url)
        .setTimestamp()
        .setFooter(
          "waifuuu",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt--xxLDmNJvEOrZebebE8Tovv7lCKCrJ12brysC0XwCXdSnLfhI61XehJbHEjuvhVbDY&usqp=CAU"
        );
      message.channel.send(messageEmbed);
    })
    .catch((error) => {
      console.error(error.message);
      message.channel.send(`
        > **Ops.. deu ruim ;-;**
        > Ocorreu um erro, por favor tente novamente
      `);
    });
}

module.exports = nsfw;
