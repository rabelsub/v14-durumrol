const { Client, GatewayIntentBits } = require('discord.js');

/* İstemciyi başlat */
const client = new Client({
    intents: [
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildPresences,
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildPresences
    ],
});
//Made By Ege For RabeL
const statusComponents = async () => {
  await require('./util/statusClient')(client);
}

statusComponents();