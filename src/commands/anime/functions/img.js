const Discord = require("discord.js");
const axios = require("axios");

async function img(message, args) {
  const value = args.join(" ");

  await axios({
    url: `https://kitsu.io/api/edge/anime?filter[text]=${value}`,
    method: "GET",
  })
    .then((response) => {
      const data = response.data.data;
      const numberRandom = parseInt(Math.random() * (data.length - 1) + 1);

      const messageEmbed = new Discord.MessageEmbed()
        .setTitle(response.data.data[numberRandom].attributes.canonicalTitle)
        .setColor("#fdd092")
        .setImage(
          response.data.data[numberRandom + 1].attributes.coverImage.original
        )
        .setTimestamp()
        .setFooter(
          response.data.data[numberRandom].attributes.canonicalTitle,
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

module.exports = img;
