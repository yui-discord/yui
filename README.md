<p align="center"><img src=".github/app.gif" /></p>
<p align="center"><h1 align="center" >Yui</h1></p>
<p align="center"><a href="./README-ptBR.md">Versão em português</a></p>

<p align="justify">
Almost like a daughter, it's a general purpose bot, called Yui I'm developing for discord with discord.js library, the name is inspired by the character Yui from the anime Sword Art Online, which at first is an A.I.</p>

<br/>

## 🤔 **How to use in my server?**

❗❗❗ The bot ins't hosted so nobody can't use, just locally

- Add the bot, just click in this <a href="https://discordapp.com/oauth2/authorize?=&client_id=849235155440238592&scope=bot&permissions=8">LINK</a>
  - You must be an administrator on some server
- Read the Docs of commands <a href="#">HERE</a>
- Enjoy 😁

<br/>

## 🧩 **Running locally**

_Before all you must to be added the bot in your server, to do this follow the <a href="https://discordapp.com/oauth2/authorize?=&client_id=849235155440238592&scope=bot&permissions=8">link</a>_

```
// Clone de repository
$ git clone https://github.com/miguelrisquelme/yui.git

// Install the dependencies
$ npm i

// Create and configure the file .env, follow the example on .env.example
~/.env

// Start the aplication
$ npm run dev
```

<br/>

## 🧬 **Application flow**

### **Directories**

#### /commands

- Directory where all bot commands are found
- Each command is in a folder with its name
- Inside each folder has
  - main.js - Command settings
  - /functions - Inside this folder are the subcommands so to speak

#### /events

- Directory where all bot events are found
- Everything that will be executed as an action is here

#### /handlers

- Where will the data be manipulated
- Handlers are created to manipulate data types
  - Events
  - Errors
  - Commands

<br/>

### **Important Files**

#### index.js

- Anonymous function
- List the commands
- Execute the handlers by sending the events directory

#### commands.handler.js

- List the commands
- Add them to the client which is the BOT instance

#### events.handler.js

- Handle the events
- Speak when the bot has fully started
- Listen to the event message

#### error.handler.js

- Handle errors
- Say the types of errors

#### message.js

- Check who is calling the command, if it is the OWNER_ID it will assign the name defined in the `.env` file
- Handles the triggered event
- Do the checks
- Execute the command

#### ready.js

- Shows how many servers the bot is connected to
- Says the application is already running

<br/><br/><br/>

## 📚 **References**

- <a target="_blank" href="https://discordjs.guide/">Discord.js Documentation</a>
- <a target="_blank" href="https://discordjs.guide/command-handling/#individual-command-files">How to organize your commands</a>
- <a target="_blank" href="https://discordjs.guide/popular-topics/canvas.html#basic-image-loading">Basic image loading</a>
- <a target="_blank" href="https://youtu.be/2qOXf5u6SiM">Meme command</a>
- <a target="_blank" href="https://youtu.be/2qOXf5u6SiM">API Memes</a>
- <a target="_blank" href="https://discordjs.guide/popular-topics/faq.html#how-do-i-play-music-from-youtube">Play music from youtube</a>
- <a target="_blank" href="https://stackoverflow.com/questions/60925319/i-am-getting-this-error-ffmpeg-avconv-not-found">Error: FFmpeg/avconv not found!</a>
- <a target="_blank" href="https://stackoverflow.com/questions/50849678/reacting-to-embeds-with-discord-js">Reacting to embeds with discord.js</a>
