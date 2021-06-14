const Discord = require("discord.js");

function list(message) {
  let animes = [
    "",
    "Domestic na Kanojo",
    "Mirai Nikki",
    "One Piece",
    "Boku no Hero Academia",
    "Black Clover",
    "Shingeki no Kyojin",
    "One Punch-Man",
    "Death Note",
    "Sword Art Online",
    "Rascal Does Not Dream of Bunny Girl Senpai",
    "The God of High School",
    "Tower of God",
    "Castlevania",
    "The Misfit of Demon King Academy",
    "Kono Subarashii Sekai ni Shukufuku o!",
    "Jujutsu Kaisen",
    "Roku de Nashi Majutsu Kōshi to Akashic Records",
  ];

  const messageEmbed = new Discord.MessageEmbed()
    .setTitle("Botecu DosZodíado - Anime List")
    .setColor("#fdd092")
    .setThumbnail(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt--xxLDmNJvEOrZebebE8Tovv7lCKCrJ12brysC0XwCXdSnLfhI61XehJbHEjuvhVbDY&usqp=CAU"
    )
    .setDescription(animes.join(`\n • `))
    .setImage("https://media.giphy.com/media/WQr5l1Ye0Pj5Zf40El/giphy.gif")
    .setTimestamp()
    .setFooter(
      "lista feita pelos membros do server.",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt--xxLDmNJvEOrZebebE8Tovv7lCKCrJ12brysC0XwCXdSnLfhI61XehJbHEjuvhVbDY&usqp=CAU"
    );
  message.channel.send(messageEmbed);
}

module.exports = list;
