const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const cohere = require('cohere-ai');
cohere.init(process.env.cohereToken);

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hashtag')
    .setDescription('Replies with hashtag related to the input. 📢')
    .addStringOption((option) =>
      option
        .setName('prompt')
        .setDescription('Enter your prompt')
        .setRequired(true)
    ),
  async execute(interaction) {
    let prompt = interaction.options.getString('prompt');
    const response = await cohere.generate('xlarge', {
      prompt: `Given a post, this program will generate relevant hashtags.\n\nPost: Why are there no country songs about software engineering\nHashtag: #softwareengineering\n--\nPost: Your soulmate is in the WeWork you decided not to go to\nHashtag: #wework\n--\nPost: If shes talking to you once a day im sorry bro thats not flirting that standup\nHashtag: #standup\n--\nPost: ${prompt}\nHashtag: \n`,
      max_tokens: 10,
      temperature: 0.5,
      k: 0,
      p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop_sequences: ['--'],
      return_likelihoods: 'NONE'
    });

    let data = response.body.generations[0].text
      .replace(/\n/g, '')
      .replace('--', '')
      .split('#')
      .filter((d) => d !== '');
    const embed = new MessageEmbed()
      .setColor('#FFEE00')
      .setAuthor({
        name: '#hashtag 📢',
        iconURL: 'https://i.imgur.com/PyReIVN.jpg',
        url: 'https://github.com/OctoplusNinja/Pride-Campus'
      })
      .setDescription(
        `${prompt} #${data[0]}\n\n[Share on Twitter](${encodeURI(
          `https://twitter.com/intent/tweet?text=${prompt}&hashtags=${data[0]}`
        )})`
      );
    await interaction.reply({ embeds: [embed] });
  }
};
