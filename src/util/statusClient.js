const { Collection } = require('discord.js');
const { token } = require('../../config.json');
//Made By Ege For RabeL
module.exports = (client) => {
/* Temel olarak olay yükleyiciyi yükleme ironik hakkı */
  require('./eventLoader')(client);
//Made By Ege For RabeL
  /* Takma adlar için yeni bir koleksiyon oluşturuyor. */
  client.commands = new Collection();
//Made By Ege For RabeL
  /* Botun oturumu açılıyor. */
  client.login(token);
};
//Made By Ege For RabeL