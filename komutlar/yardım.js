const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let prefix = "f!";
  let yardım = new Discord.RichEmbed()
    .setAuthor(`${client.user.username}`, client.user.avatarURL)
    .setColor("RANDOM")
    .addField(
      "Fors BOT",
      `
**f!moderasyon** : Moderasyon Komutlarını Açar.
**f!moderasyon2[Yapılıyor.]** : Moderasyon Komutlarını Açar.
**f!kullanıcı** : Kullanıcı Komutları Açar.
**f!yeni-komutlar** : Yeni Komutları Açar.
**f!eğlence** : Eğlence Komutları Açar.`
    )
    .setImage(
      "https://media.discordapp.net/attachments/664509082992115722/780044043899371540/1.gif"
    )
    .setFooter(
      `${message.author.tag} Tarafından İstendi.`,
      message.author.avatarURL
    )
    .setThumbnail(client.user.avatarURL);
  message.channel.send(yardım);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};
exports.help = {
  name: "yardım"
};
//Lord Creative
