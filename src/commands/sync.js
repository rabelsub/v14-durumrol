const { SlashCommandBuilder } = require('discord.js');
const { status, role_id, sunucuid } = require('../../config.json');
//Made By Ege For RabeL
module.exports = {
  commanddata: new SlashCommandBuilder().setName("sync").setDescription("Rollerinizi Discord durumunuzla senkronize edin"),
//Made By Ege For RabeL
  async run(interaction, client) {
//Made By Ege For RabeL
	const guild = client.guilds.cache.get(interaction.guild.id);
    const role = guild.roles.cache.find(role => role.id === role_id);
    const member = guild.members.cache.get(interaction.user.id);

    if(status.includes(member.presence.activities[0]?.state)) {
      // kullanıcı anahtar sözcükler eklediğinde çalıştırılacak işlev
  
      if(member.roles.cache.has(role_id))
  
      member.roles.add(role).catch( err => { interaction.reply({ content: "Error: " + err, ephemeral: true }); });
    } else {
      member.roles.remove(role).catch( err => { interaction.reply({ content: "Error: " + err, ephemeral: true }); });
    }
  //Made By Ege For RabeL
    await interaction.reply({
      content: "Roller senkronize edildi!",
      ephemeral: true
      });
  }
};
//Made By Ege For RabeL