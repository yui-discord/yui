const Discord = require("discord.js");

const poll = (message, args) => {
  const channel = message.client.channels.cache.find(
    (channel) => channel.id == "791686556581756969"
  );

  const messageEmbed = new Discord.MessageEmbed()
    .setTitle("Votação")
    .setColor("#fdd092")
    .setDescription(args.join(" "))
    .setTimestamp();
  channel.send({ embed: messageEmbed }).then((embedMessage) => {
    embedMessage.react("⬆");
    embedMessage.react("⬇");
  });
};

module.exports = poll;
