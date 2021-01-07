const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (args[0] === "aç") {
    db.set(`${message.guild.id}.kufur`, true);
    message.channel.send("Başarılı Şekilde `Açıldı`");
    return;
  }
  if (args[0] === "kapat") {
    db.delete(`${message.guild.id}.kufur`);
    message.channel.send("Başarılı Şekilde `Kapatıldı` Edildi");
    return;
  }
  message.channel.send("Lüten `aç` yada `kapat` Yazın!");
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["küfür"],
  permLevel: 0
};

exports.help = {
  name: "küfür-engel",
  description: "küfür engeli aktif edersiniz",
  usage: "küfür"
};
