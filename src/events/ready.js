const fs = require('fs');

module.exports = {
	name: 'ready',
	once: true,
	description: 'Ready event',
	async execute(client) {
		console.log(`${client.user.tag} is online!`);
	}
};
