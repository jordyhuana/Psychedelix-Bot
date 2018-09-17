const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'kek') {
    	message.reply(':kek: :kek: :kek: :kek: :kek: :kek: :kek: :kek: :kek: :kek: :kek: :kek: :kek: :kek: :kek: :kek:');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
