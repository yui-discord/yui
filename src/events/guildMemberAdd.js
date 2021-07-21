const Discord = require("discord.js");

module.exports = async (client, message) => {
  const welcomeChannel = message.client.channels.cache.find(
    (channel) => channel.id == "867539283282886656"
  );

  console.log();

  const messageEmbed = new Discord.MessageEmbed()
    .setTitle("Bem vindo meu cabacinho! 🍺")
    .setColor("#fdd092")
    .setDescription(
      `
      **SEGUINTE <@${message.user.id}>!!**

      Nossas regras aqui, mas ngm lê: <#690926906849361931>
      Pega uma cor aqui: <#867431973601542184>
      Pega uns cargos aqui: <#772151425589313599>
      Chat geral, vai se enturmar lá: <#726621915430649987>

      *OBS: Não nos responsabilizamos por quaisquer danos mentais ou delitos em geral.*

      Tmj!
    `
    )
    .setThumbnail(
      "https://i.pinimg.com/originals/c7/86/0a/c7860a8361ffa8e50507865587eea116.png"
    )
    .setImage(
      `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfVp2b8RQoJxTEnT4HxAo-lRNyJvzT2t36dg&usqp=CAU`
    )
    .setTimestamp();
  welcomeChannel.send(messageEmbed);
};
