const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const dataSet = [
	'The planet Mercury is a symbol used by the transgendered community. The sign for Mercury is a crescent shape and a cross, which represents the male and female principles in harmony in an individual. Additionally, the god Mercury fathered Hermaphroditus, who had both male and female sex organs.',
	'The labrys, a double-edged hatchet or axe, is a symbol of strength and unity for the lesbian community. Demeter, the Goddess of Earth, is said to have used a labrys as her scepter, especially in religious ceremonies.',
	'In 1987, Delta Airlines apologized for arguing in plane crash litigation that it should pay less in compensation for the life of a gay passenger than for a heterosexual one because he may have had AIDS.',
	'Records of same-sex relationships have been found in nearly every culture throughout history with varying degrees of acceptance.',
	'No research has conclusively proven what causes homosexuality, heterosexuality, or bisexuality.',
	'Scientists estimate that approximately 5% of the total human population worldwide has a homosexual orientation.',
	"Historians note that in some cultures, homosexual behavior was not viewed as effeminate but as evidence of a man's masculinity. Examples include the Celtic and Greek cultures.",
	'Gay teen suicides are more common in politically conservative regions.',
	"Bisexual rights activist, Brenda Howard, is considered the 'Mother of Pride' as she first coordinated the Liberation March (the original name of what we call Gay PRIDE today) in New York in June 1970, exactly a year after the Stonewall Riots. Thanks to the great work of Brenda, many other nations have followed in the USA's footsteps, including the UK, with more and more Pride marches being held every year.",
	'South Africa is home to one of only a few Pride marches on the African continent and holds annual marches in Johannesburg and Cape Town. Another African country to have held pride marches in Africa is Eswatini, despite the fact that being homosexual in this country is illegal. Here’s hoping that South Africa and Eswatini can pioneer the way forward for its remaining continent allies.',
	'Sao Paulo, Brazil holds the Guinness world record for the number of attendees at a pride event, with a staggering three to five million people turning up at the event every year – and I thought Soho square was busy!',
	'Amsterdam is the only city whose Pride celebration floats on a river. The parade involves 100 decorated boats that sail through the city on the Prinsengracht River. The boats are decorated with the pride of the Pride March, and the city is presided over by the pride of the Pride March.',
	'In 1860, Walt Whitman published the homoerotic Leaves of Grass, which later inspired numerous gay poets.',
	'Every colour on the LGBTQIA+ flag has a meaning: \nRED means LIFE;\nORANGE means HEALING;\nYELLOW means SUNLIGHT;\nGREEN means NATURE;\nBLUE means HARMONY; and\nVIOLET means SPIRIT.'
];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('randomfact')
		.setDescription('Replies with a fact! 📝'),
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor('#008121')
			.setAuthor({
				name: 'Random Fact 📝',
				iconURL: 'https://i.imgur.com/PyReIVN.jpg',
				url: 'https://github.com/OctoplusNinja/Pride-Campus'
			})
			.setDescription(dataSet[Math.floor(Math.random() * dataSet.length)]);
		await interaction.reply({ embeds: [embed] });
	}
};
