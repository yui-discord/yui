const Discord = require("discord.js");

const poll = (message, args) => {
  const messageEmbed = new Discord.MessageEmbed()
    .setTitle("Votação")
    .setColor("#fdd092")
    .setDescription(args.join(" "))
    .setTimestamp();
  message.channel.send({ embed: messageEmbed }).then((embedMessage) => {
    embedMessage.react("⬆");
    embedMessage.react("⬇");
  });
};

module.exports = poll;
