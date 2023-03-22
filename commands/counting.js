const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('counting')
		.setDescription('Configures counting.'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
