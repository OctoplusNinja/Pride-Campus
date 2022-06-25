const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Replies with help! 🎾'),
    async execute(interaction) {
        await interaction.reply('Helpppppppppppp! 🎾');
    }
};
