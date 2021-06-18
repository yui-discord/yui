const error = require("../utils/handlers/errors/errors.handler");
const prefix = process.env.PREFIX;

module.exports = async (client, message) => {
  if (message.author.id === process.env.OWNER_ID) {
    message.userReference = process.env.OWNER_NAME;
  } else {
    message.userReference = message.member;
  }

  try {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!command) throw new Error(error.COMMAND_NOT_INFORMED);

    if (!message.client.commands.get(command))
      throw new Error(error.COMMAND_NOT_FOUND);

    message.client.commands.get(command).execute(message, args);
  } catch (err) {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    console.error(`
        ❌ ${err.toString()}
        🦊 Input: '${message.content}'
        ✨ Command: ${args[0]}
        🔥 Function: ${args[1]}
        🧅 Possible Path: /commands/${args[0]}/${args[1]}.js
      `);
    console.error(err);
    error.handler(err, message);
  }
};
