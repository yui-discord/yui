const Discord = require("discord.js");
const { readdirSync } = require("fs");

module.exports = (commandsDirectory, client) => {
  console.log("> Carregando comandos... 🤠");

  client.commands = new Discord.Collection();

  try {
    const commandFolders = readdirSync(commandsDirectory);

    for (const commandFolder of commandFolders) {
      const command = require(`${commandsDirectory}/${commandFolder}/main.js`);
      client.commands.set(command.name, command);
    }
    console.log(
      `> ${client.commands.size} comandos carregados com sucesso. 👾`
    );
  } catch (err) {
    console.error(err);
    throw new Error("Houve uma falha ao carregar os comandos! 😢");
  }
};
