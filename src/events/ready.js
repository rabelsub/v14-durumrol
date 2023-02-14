const { ActivityType } = require('discord.js');
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { readdirSync } = require("fs");
const { ChalkAdvanced } = require("chalk-advanced");
const { MODE, token, sunucuid } = require('../../config.json');
//Made By Ege For RabeL
module.exports = async (client) => {
  const commandFiles = readdirSync("./src/commands/").filter((file) =>
    file.endsWith(".js")
  );
//Made By Ege For RabeL
  const commands = [];
//Made By Ege For RabeL
  for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    commands.push(command.commanddata.toJSON());
    client.commands.set(command.commanddata.name, command);
  }
//Made By Ege For RabeL
  const rest = new REST({
    version: "10",
  }).setToken(token);
//Made By Ege For RabeL
  (async () => {
    try {
      if (MODE === "PRODUCTION") { // Bot üretim modundaysa, tüm sunucular için eğik çizgi komutları yükleyecektir.
        await rest.put(Routes.applicationCommands(client.user.id), {
          body: commands,
        });
        console.log(`${ChalkAdvanced.white("Durum Rol RabeL")} ${ChalkAdvanced.gray(">")} ${ChalkAdvanced.green("Komutlar yerel olarak başarıyla kaydedildi")}`);
//Made By Ege For RabeL
      } else {
        await rest.put(
          Routes.applicationGuildCommands(client.user.id, sunucuid),
          {
            body: commands,
          }
        );
//Made By Ege For RabeL
        console.log(`${ChalkAdvanced.white("Durum Rol RabeL")} ${ChalkAdvanced.gray(">")} ${ChalkAdvanced.green("Komutlar yerel olarak başarıyla kaydedildi")}`);
      }
    } catch (err) {
      if (err) console.error(err);
    }
  })();
  client.user.setPresence({
    activities: [{ name:`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}` + ' Üye | RabeL', type: ActivityType.Listening }],
    status: 'idle',
  });
};
//Made By Ege For RabeL