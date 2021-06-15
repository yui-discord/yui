require("dotenv").config();

function execute(message) {
  if (message.author.username === process.env.OWNER_USERNAME) {
    message.channel
      .bulkDelete(100, true)
      .then((messages) =>
        message.channel.send(
          `***Foram deletadas ${messages.size} mensagens papa***`
        )
      )
      .catch(console.error);
  } else {
    message.channel.send(`*Acha mesmo que vai limpar o chat plebeu?* 😂`);
  }
}

module.exports = {
  name: "clear",
  description: "Limpar mensagens, 100 ou o máximo que conseguir",
  execute,
};
