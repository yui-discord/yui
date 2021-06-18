const date = new Date();
const hour = date.getHours();
const minutes = date.getMinutes();

const getHours = (message) => {
  message.channel.send(`Agora são ${hour}:${minutes}`);
};

module.exports = getHours;
