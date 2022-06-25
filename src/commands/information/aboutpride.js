const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('aboutpride')
		.setDescription('Replies with meaning & orign of LGBTQ+! 🤓'),
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor('#E50000')
			.setAuthor({
				name: 'About LGBTQ+ & its Community 🤓',
				iconURL: 'https://i.imgur.com/PyReIVN.jpg',
				url: 'https://github.com/OctoplusNinja/Pride-Campus'
			})
			.setDescription(
				'LGBTQ+ stands for Lesbian, Gay, Bisexual, Transgender, and Queer. The “+” signifies that one acronym can’t capture everyone’s experience of their gender identity or expression and/or sexual orientation. “Queer” is a word that historically has been used as a slur or insult against members of the LGBTQ+ community. In recent years, it has been reclaimed by the LGBTQ+ community to be an umbrella term for someone who is not heterosexual and/or cisgender.\nThe LGBT term is an adaptation of the initialism LGB, which began to replace the term gay in reference to the broader LGBT community beginning in the mid-to-late 1980s.When not inclusive of transgender people, the shorter term LGB is still used instead of LGBT.\nIt may refer to anyone who is non-heterosexual or non-cisgender, instead of exclusively to people who are lesbian, gay, bisexual, or transgender. To recognize this inclusion, a popular variant, LGBTQ, adds the letter Q for those who identify as queer or are questioning their sexual or gender identity.'
			);
		await interaction.reply({ embeds: [embed] });
	}
};
