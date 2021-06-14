const Discord = require("discord.js");
const axios = require("axios");

async function search(message, args) {
  const value = args.join(" ");
  await axios({
    url: `https://kitsu.io/api/edge/anime?filter[text]=${value}`,
    method: "GET",
  }).then((response) => {
    const messageEmbed = new Discord.MessageEmbed()
      .setTitle(response.data.data[0].attributes.canonicalTitle)
      .setColor("#fdd092")
      .setThumbnail(response.data.data[0].attributes.posterImage.original)
      .setDescription(response.data.data[0].attributes.synopsis)
      .setImage(response.data.data[0].attributes.coverImage.original)
      .setTimestamp()
      .setFooter(
        response.data.data[0].attributes.canonicalTitle,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt--xxLDmNJvEOrZebebE8Tovv7lCKCrJ12brysC0XwCXdSnLfhI61XehJbHEjuvhVbDY&usqp=CAU"
      );
    message.channel.send(messageEmbed);
  });
}

module.exports = search;
