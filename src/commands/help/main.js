const Discord = require("discord.js");

function execute(message) {
  const messageEmbed = new Discord.MessageEmbed()
    .setTitle("Pediu ajuda, é pra já!")
    .setDescription(
      `
      [Informação sobre os comandos](https://yui-discord.github.io/yui-website/)
      [Relatar um bug](https://github.com/yui-discord/yui/issues)
    `
    )
    .setFooter(`Yui | Como posso ajudar?`);

  message.channel.send(messageEmbed);
}

module.exports = {
  name: "help",
  description: "Comando de ajuda",
  execute,
};
