function getHours(message) {
  const date = new Date();
  message.channel.send(
    `Agora são **${date.getHours()}**:**${date.getMinutes()}**`
  );
}

module.exports = getHours;
