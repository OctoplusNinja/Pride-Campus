const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('stemopportunities')
    .setDescription('Replies with list of Stem Opportunities! 🔍'),
  async execute(interaction) {
    const config = {
      method: 'get',
      url: 'https://0377f15d-cd49-444e-a054-8c518e89737b.mock.pstmn.io/lgbtq/opportunities',
      headers: {
        'x-mock-response-code': '200'
      }
    };
    axios(config)
      .then(function (response) {
        const embed = new MessageEmbed()
          .setColor('#9EB23B')
          .setAuthor({
            name: 'Stem opportunities! 🔍',
            iconURL: 'https://i.imgur.com/PyReIVN.jpg',
            url: 'https://github.com/OctoplusNinja/Pride-Campus'
          })
          .setFields(
            response.data.opportunities.map((opportunity) => ({
              name: `${
                opportunity.title
              } - ${opportunity.type[0].toUpperCase()}${opportunity.type.slice(
                1
              )}`,
              value: opportunity.url
            }))
          );
        interaction.reply({ embeds: [embed] });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};
