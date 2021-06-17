const Discord = require("discord.js");

async function free(message, args) {
  message.channel.bulkDelete(1);

  const roleId = "757319467100274859";
  const messageEmbed = new Discord.MessageEmbed()
    .setTitle(`Novo Jogo GRÁTIS`)
    .setColor("#fdd092")
    .setThumbnail(
      "https://pbs.twimg.com/profile_images/962664561852796928/38Ar26jV.jpg"
    )
    .setDescription(
      `
      <@&${roleId}>

      **Oii gente, tudo bom?
      Jogo GRÁTIS na área**

      Basta clicar [AQUI](${args[1]})


      Para mais informações entre em contato com:
        - @${message.author.username}#${message.author.discriminator}
        - administradores/moderadores do servidor
    `
    )
    .setImage(
      "https://media1.tenor.com/images/010d4105b4688d279e94072220b9960e/tenor.gif"
    )
    .setTimestamp()
    .setFooter(
      `Divulgado por @${message.author.username}#${message.author.discriminator}`,
      "https://pbs.twimg.com/profile_images/962664561852796928/38Ar26jV.jpg"
    );

  message.channel.send(messageEmbed);
}

module.exports = free;
