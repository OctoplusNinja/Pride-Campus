const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();
const fs = require('fs');
require('dotenv').config();

const functions = fs
	.readdirSync('./src/functions')
	.filter((file) => file.endsWith('.js'));
const eventFiles = fs
	.readdirSync('./src/events')
	.filter((file) => file.endsWith('.js'));
const commandFolder = fs.readdirSync('./src/commands');

(async () => {
	for (file of functions) {
		require(`./functions/${file}`)(client);
	}
	client.handleEvents(eventFiles, './src/events');
	client.handleCommands(commandFolder, './src/commands');
	client.login(process.env.TOKEN);
})();
