# tmuxUpdaterDiscordBot
Discord bot to update Node.js server code running on Linux using tmux<br>
Users who you configure can send their code to the bot to update and run it on a server

## Requirements
1. Linux
2. Node.js

## Setup:
1. run `npm i discord.js request fs child_process tmux` to install modules
2. run `tmux new -d -s namehere` for each tmux session you need
3. edit the discord user ids and tmux session names on lines 11 & 12
4. edit the discord bot token on line 33
5. run the bot with `node update.js`, preferably in a tmux session

## Usage
* Upload file: will update the user's server and restart their session
* `stop` will stop the user's server
* `start` will start the user's server
