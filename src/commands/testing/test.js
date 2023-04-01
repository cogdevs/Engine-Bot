const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test') //name
		.setDescription('Test command'), //description
	async execute(interaction) {
		await interaction.reply('it works!'); //reply
	},
};