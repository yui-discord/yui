const error = require('../utils/handlers/errors/errors.handler');
const prefix = process.env.PREFIX;

module.exports = async (client, message) => {
  if (message.author.id === process.env.OWNER_ID) {
    message.userReference = process.env.OWNER_NAME;
    global.userReference = process.env.OWNER_NAME;
  } else {
    message.userReference = message.member;
    global.userReference = message.member;
  }

  try {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!command)
      throw new Error(error.COMMAND_NOT_INFORMED);

    if (!message.client.commands.get(command))
      throw new Error(error.COMMAND_NOT_FOUND);

    message.client.commands.get(command).execute(message, args);
  } catch (err) {
    error.handler(err, message);
  }
};
