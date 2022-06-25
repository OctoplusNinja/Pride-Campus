const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
require('dotenv').config();

client.on('ready', () => {
	console.log('I am ready!');
});

(async () => {
	client.login(process.env.TOKEN);
})();
