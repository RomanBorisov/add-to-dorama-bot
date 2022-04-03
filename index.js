const {Client, Intents} = require('discord.js');
const {token} = require('./config.json');

const client = new Client({intents: [Intents.FLAGS.GUILDS]});

client.once('ready', () => {
    console.log('Ready!');
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
        return;
    }

    switch (interaction.commandName) {
        case 'ping':
            await interaction.reply('Pong!');
            return;
        case 'server':
            await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
            return;
        case 'user':
            await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
            return;
        default:
            await interaction.reply('Undefined command.');
            return;
    }
});

client.login(token);