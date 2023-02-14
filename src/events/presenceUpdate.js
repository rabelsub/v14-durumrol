const { status, role_id } = require('../../config.json');
//Made By Ege For RabeL
module.exports = (client, oldPresence, newPresence) => {
//Made By Ege For RabeL
  if(!newPresence?.activities[0]?.state) return;
  if(oldPresence === newPresence) return;
//Made By Ege For RabeL
  const role = newPresence.guild.roles.cache.find(role => role.id === role_id);
//Made By Ege For RabeL
  if(status.includes(newPresence.activities[0]?.state)) {
    // kullanıcı anahtar sözcükler eklediğinde çalıştırılacak işlev
//Made By Ege For RabeL
    if(newPresence.member.roles.cache.has(role_id)) return;
//Made By Ege For RabeL
    newPresence.member.roles.add(role).catch( err => { return; });
  } 
//Made By Ege For RabeL
  if(!status.includes(newPresence.activities[0]?.state)) {
    // kullanıcı anahtar kelimeleri içermediğinde çalıştırılacak işlev
//Made By Ege For RabeL
    if(!newPresence.member.roles.cache.has(role_id)) return;
//Made By Ege For RabeL
    newPresence.member.roles.remove(role).catch( err => { return; });
  }
//Made By Ege For RabeL  
  if(newPresence.activities[0]?.state == '') {
    // kullanıcı anahtar kelimeleri içermediğinde çalıştırılacak işlev
//Made By Ege For RabeL
    if(newPresence.member.roles.cache.has(role_id)) return;
//Made By Ege For RabeL
    newPresence.member.roles.remove(role).catch( err => { return; });
  }
  };
//Made By Ege For RabeL