const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

{
  "ClientId": 319928722901958656,
  "Token": "MzE5OTI4NzIyOTAxOTU4NjU2.Dn3a0g.GNnrR5LpfzrFD8G5w9XgdWYrT_c",
  "OwnerIds": [
  151447500232851456,
  ],
  "LoLApiKey": "",
  "GoogleApiKey": "AIzaSyDQ1sSErvX20BfnjRH5pSGpe6YQjj3twV4",
  "MashapeKey": "",
  "OsuApiKey": "",
  "SoundCloudClientId": "",
  "CleverbotApiKey": "",
  "CarbonKey": "",
  "Db": {
    "Type": "sqlite",
    "ConnectionString": "Data Source=data/NadekoBot.db"
  },
  "TotalShards": 1,
  "PatreonAccessToken": "",
  "PatreonCampaignId": "334038",
  "RestartCommand": null,
  "ShardRunCommand": "",
  "ShardRunArguments": "",
  "ShardRunPort": null,
  "MiningProxyUrl": null,
  "MiningProxyCreds": null,
  "BotListToken": null,
  "TwitchClientId": null,
  "VotesToken": null,
  "VotesUrl": null,
  "RedisOptions": null
}
