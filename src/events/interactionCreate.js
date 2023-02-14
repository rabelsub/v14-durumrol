module.exports = (client, interaction) => {
  if (!interaction.isChatInputCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (!command) return;
  try {
    command.run(interaction, client);
  } catch (err) {
    if (err) console.error(err);
    interaction.reply({
      content: "Bu komut yürütülürken bir hata oluştu.",
      ephemeral: true,
    });
  }
};
//Made By Ege For RabeL