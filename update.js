const Discord = require('discord.js');
const client = new Discord.Client();
let request = require(`request`);
let fs = require(`fs`);
const { exec } = require("child_process");

client.on('message', msg => {
  if (msg.author.bot || msg.channel.type != 'dm') return;

    var filename = "";
    if (msg.author.id == "785011634212306954") filename = "vibe";//user id 785011634212306954 controls the tmux session "vibe"
    if (msg.author.id == "123456789000000000") filename = "sbot";//user id 123456789000000000 controls the tmux session "sbot"
    if (filename == "") return;

    if (msg.content === 'stop') {
      exec('tmux send -t ' + filename + ' C-c');//stop server
      msg.react('✅');
    } else if (msg.content === 'start') {
      exec('tmux send -t ' + filename + ' "node ' + filename + '.js" enter');//start server
      msg.react('✅');
    } else if (msg.attachments.size >= 1) {
      if(msg.attachments.first().name.endsWith("js")) {
        request.get(msg.attachments.first().url).on('error', console.error).pipe(fs.createWriteStream(filename + ".js"));//download file
        msg.react('✅');
        exec('tmux send -t ' + filename + ' C-c');//stop server
        exec('tmux send -t ' + filename + ' "node ' + filename + '.js" enter');//start server
        msg.react("🔁");
      }
    }

});

client.login('discord bot token here');
