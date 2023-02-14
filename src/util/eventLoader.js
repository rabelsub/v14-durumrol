const { readdir } = require('fs');
//Made By Ege For RabeL
module.exports = async (client) => {
  readdir('./src/events/', (err, files) => {
    if (err) return console.error(err);
//Made By Ege For RabeL
    files.forEach((file) => {
      const event = require(`../events/${file}`);
      let eventName = file.split('.')[0];
      client.on(eventName, event.bind(null, client));
    });
  });
};
//Made By Ege For RabeL