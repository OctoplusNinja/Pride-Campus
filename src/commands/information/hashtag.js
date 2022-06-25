const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');
const cohere = require('cohere-ai');
cohere.init('PJtctAYGVUSlyD5mQVbEZFeDaTSTeo54ZNTFo2QC');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hashtag')
        .setDescription('Generate Hashtag for a text')
        .addStringOption(option =>
            option.setName('promt').setDescription("Enter your Promt").setRequired(true)
        ),
    async execute(interaction) {
        let promt = interaction.options.getString('promt');
        const response = await cohere.generate('xlarge', {
            prompt: `Given a post, this program will generate relevant hashtags.\n\nPost: Why are there no country songs about software engineering\nHashtag: #softwareengineering\n--\nPost: Your soulmate is in the WeWork you decided not to go to\nHashtag: #wework\n--\nPost: If shes talking to you once a day im sorry bro thats not flirting that standup\nHashtag: #standup\n--\nPost: ${promt}\nHashtag: \n`,
            max_tokens: 10,
            temperature: 0.5,
            k: 0,
            p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop_sequences: ["--"],
            return_likelihoods: 'NONE'
        });
        let data = response.body.generations[0].text.replace(/\n/g, "").replace("--", "").split("#").filter(d => d !== "");
        const embed = new MessageEmbed().setTitle("Hashtag").setDescription(`${promt} [#${data[0]}](${encodeURI(`https://twitter.com/intent/tweet?text=${promt}`)})`)
        await interaction.reply({ embeds: [embed] });
        //  reply(`[${promt} # ${data[0]}](https://twitter.com/intent/tweet?text=how%20tf%20you%20still%20alive)`);
    }
};

{/* <a href="https://twitter.com/intent/tweet?button_hashtag=LoveTwitter&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-show-count="false">Tweet #LoveTwitter</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */ }