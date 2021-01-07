const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {
  const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("36393F")
    .setTimestamp()
    .setAuthor(`${client.user.username}`, client.user.avatarURL)
    .setDescription(" **İşte beni yapan şahsiyet** <@788666828083560449> ");
  message.channel.send(ozelmesajkontrol);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yapımcım", "yapımcı", "yapımcılarım", "yapımcılar"],
  permLevel: 0
};

exports.help = {
  name: "yapımcım",
  description: "Yapımcımı Gosterir.",
  usage: "yapımcım"
};
