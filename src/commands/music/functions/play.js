const ytdl = require("ytdl-core");

function play(message, args) {
  const voiceChannel = message.member.voice.channel;
  const permissions = voiceChannel.permissionsFor(message.client.user);

  if (!voiceChannel)
    return message.channel.send(
      "You need to be in a voice channel to play music!"
    );

  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }

  voiceChannel.join().then((connection) => {
    const stream = ytdl(args, { filter: "audioonly" });
    const dispatcher = connection.play(stream);
    dispatcher.on("finish", () => voiceChannel.leave());
  });
}

module.exports = play;
