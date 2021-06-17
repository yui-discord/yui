const Discord = require("discord.js");

async function free(message, args) {
  message.channel.bulkDelete(1);

  const roleId = "772171018072358913";
  const channel = message.client.channels.cache.find(
    (channel) => channel.id == "844690687341756426"
  );

  const messageEmbed = new Discord.MessageEmbed()
    .setTitle(`Novo Jogo GRÁTIS`)
    .setColor("#fdd092")
    .setThumbnail(
      "https://cdn.streamelements.com/uploads/4ad33e4b-fe28-4e77-a64d-aa89109bd045.gif"
    )
    .setDescription(
      `
      <@&${roleId}>

      **Oii gente, tudo bom?
      Jogo GRÁTIS na área**

      ***Basta clicar [AQUI](${args[1]})***

      **Para mais informações entre em contato com:**
        - @${message.author.username}#${message.author.discriminator}
        - administradores/moderadores do servidor

      **Em qualquer das situações abaixo, entre em contato com a moderação:**
        - Link com conteúdo pornográfico
        - Link não relacionado a games
        - Caso tenha enviado o link errado
        - O link não funciona
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

  channel.send(messageEmbed);
  message.channel.send(`
    > **Obrigado por contribuir, sua participação é muito importante!**
    > *Sua mensagem se encontra no canal: ${channel.toString()}*
  `);
}

module.exports = free;
