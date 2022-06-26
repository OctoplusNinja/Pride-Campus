const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Replies with list of commands! 🔍'),
  async execute(interaction) {
    const embed = new MessageEmbed()
      .setColor('#760188')
      .setAuthor({
        name: 'Helpppp with commands! 🔍',
        iconURL: 'https://i.imgur.com/PyReIVN.jpg',
        url: 'https://github.com/OctoplusNinja/Pride-Campus'
      })
      .setDescription('List of commands is as follows:')
      .setFields(
        {
          name: '/aboutpride',
          value: 'Replies with meaning & orign of LGBTQ+! 🤓'
        },
        { name: '/aboutus', value: "Replies with bot's purpose! 🤓" },
        {
          name: '/hashtag',
          value: 'Replies with hashtag related to the input! 📢'
        },
        { name: '/help', value: 'Replies with list of commands! 🔍' },
        { name: '/ping', value: 'Replies with pong! 🏓' },
        { name: '/random', value: 'Replies with a fact! 📝' },
        { name: '/whypronoun', value: 'Replies with importance of pronoun! 💻' }
      );
    await interaction.reply({ embeds: [embed] });
  }
};
