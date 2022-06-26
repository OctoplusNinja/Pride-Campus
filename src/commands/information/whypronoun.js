const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('whypronoun')
    .setDescription('Replies with importance of pronoun! 💻'),
  async execute(interaction) {
    const embed = new MessageEmbed()
      .setColor('#760188')
      .setAuthor({
        name: 'Why Pronoun? 💻',
        iconURL: 'https://i.imgur.com/PyReIVN.jpg',
        url: 'https://github.com/OctoplusNinja/Pride-Campus'
      })
      .setTitle('Why is it important to respect people’s pronouns?')
      .setDescription(
        'You can’t always know what someone’s pronouns are by looking at them. Asking and correctly using someone’s pronouns is one of the most basic ways to show your respect for their gender identity.\nWhen someone is referred to with the wrong pronoun, it can make them feel disrespected, invalidated, dismissed, alienated, or dysphoric ( often all of the above). All major professional psychological and psychiatric associations recognize that inclusive language usage for LGBTQ+ youth and adults drastically decreases experiences of depression, social anxiety, suicidal ideation, and other negative mental health factors.\n It is a privilege to not have to worry about which pronoun someone is going to use for you based on how they perceive your gender. If you have this privilege, yet fail to respect someone else’s gender identity, it is not only disrespectful and hurtful, but also oppressive.\nGet to about different pronouns at [pronoun.is](https://pronoun.is/all-pronouns).\n\nInformation src: [LGBTQ+ Resource Center @University of Wisconsin](https://uwm.edu/lgbtrc/qa_faqs/why-is-it-important-to-respect-peoples-pronouns/)'
      );
    await interaction.reply({ embeds: [embed] });
  }
};
