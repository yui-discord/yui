<p align="center"><img src=".github/app.gif" /></p>
<p align="center"><h1 align="center" >Yui</h1></p>
<p align="center"><a href="./README-en.md">English Version</a></p>

<p align="justify">
Quase como uma filha, é um bot de propósitos gerais, chamada de Yui estou a desenvolvendo para o discord com a biblioteca discord.js, o nome tem inspiração na personagem Yui do anime Sword Art Online que a princípio é uma I.A.</p>

<br/>

## **Fluxo da aplicação**

### **Diretórios**

#### /commands

- Diretório onde se encontra todos os comandos do bot
- Cada comando fica em uma pasta com o seu nome
- Dentro de cada pasta tem
  - main.js - Configurações do comando
  - /functions - Dentro dessa pasta fica os subcomandos assim dizer

#### /events

- Diretório onde se encontra todos os eventos do bot
- Tudo que vai ser executado como ação fica aqui

#### /handlers

- Onde será manipulado os dados
- É criado handlers para manipular tipos de dados
  - Eventos
  - Erros
  - Comandos

<br/>

### **Arquivos importantes**

#### index.js

- Função anônima
- Listar os comandos
- Executa os handlers enviando o diretório dos events

#### commands.handler.js

- Lista os comandos
- Adiciona eles ao client que é a instância do BOT

#### events.handler.js

- Manipula os eventos
- Fala quando o o bot foi iniciado por completo
- Ouve o evento message

#### error.handler.js

- Manipula os erros
- Diz os tipos de erros

#### message.js

- Verifica quem está chamando o comando, caso seja o OWNER_ID irá atribuir o nome definido no arquivo `.env`
- Faz o tratamento do evento acionado
- Faz as verificações
- Executa o comando

#### ready.js

- Mostra em quantos server o bot está conectado
- Fala que a aplicação já está rodando

<br/><br/><br/>

## **References**

- <a target="_blank" href="https://discordjs.guide/">Discord.js Documentation</a>
- <a target="_blank" href="https://discordjs.guide/command-handling/#individual-command-files">How to organize your commands</a>
- <a target="_blank" href="https://discordjs.guide/popular-topics/canvas.html#basic-image-loading">Basic image loading</a>
- <a target="_blank" href="https://youtu.be/2qOXf5u6SiM">Meme command</a>
- <a target="_blank" href="https://youtu.be/2qOXf5u6SiM">API Memes</a>
- <a target="_blank" href="https://discordjs.guide/popular-topics/faq.html#how-do-i-play-music-from-youtube">Play music from youtube</a>
- <a target="_blank" href="https://stackoverflow.com/questions/60925319/i-am-getting-this-error-ffmpeg-avconv-not-found">Error: FFmpeg/avconv not found!</a>
- <a target="_blank" href="https://stackoverflow.com/questions/50849678/reacting-to-embeds-with-discord-js">Reacting to embeds with discord.js</a>
