const types = require("./errorTypes.js");

module.exports = {
  ...types,
  handler: (err, message) => {
    switch (err.message) {
      case types.COMMAND_NOT_FOUND:
        message.channel.send(`${err.message}, ${message.userReference}.`);
        break;
      case types.COMMAND_NOT_INFORMED:
        message.channel.send(`${err.message}, ${message.userReference}.`);
        break;
      default:
        message.channel.send(
          `Houve um erro inesperado, ${message.userReference}.`
        );
        break;
    }
  },
};
