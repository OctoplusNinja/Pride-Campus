const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('aboutus')
    .setDescription("Replies with bot's purpose! 🤓"),
  async execute(interaction) {
    const embed = new MessageEmbed()
      .setColor('#FF8D00')
      .setAuthor({
        name: 'About Us 🤓',
        iconURL: 'https://i.imgur.com/PyReIVN.jpg',
        url: 'https://github.com/OctoplusNinja/Pride-Campus'
      })
      .setDescription(
        'Since being part of communities, we need to be inclusive and diverse in all aspects, and also to make new members of communities aware of the same, we created this bot. Happy #pride. 🌈\nMade with 🤍 & #pride by [Aniruddha Das](https://twitter.com/isthatAniruddha) and [Falguni Sarkar](https://twitter.com/isshefalguni).'
      );
    await interaction.reply({ embeds: [embed] });
  }
};
