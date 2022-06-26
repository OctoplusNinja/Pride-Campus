const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with pong! 🏓'),
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor('#004CFF')
			.setAuthor({
				name: 'Ping Pong 🏓',
				iconURL: 'https://i.imgur.com/PyReIVN.jpg',
				url: 'https://github.com/OctoplusNinja/Pride-Campus'
			})
			.setDescription(
				"Pong! I'm alive and spreading love.\nWell, pong again! 🏓"
			);
		await interaction.reply({ embeds: [embed] });
	}
};
