const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let p = "+";
  let arg = args.slice(0).join(" ");

  if (!arg[0]) {
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(0xf001fa)
      .setDescription(`[**Fors-Komutlar**]`)
      .addField(
        `**Moderasyon-Komutları**`,
        `\n<a:yldz:785777592665243648> \`f!sa-as {Aç-Kapat}\` = Botun Sa Yazana Cevap Versin mi Vermesin mi? \n<a:yldz:785777592665243648> \`f!kurallar\` = Hazır kuralları kanalınıza atar.`
      );
    return message.channel.sendEmbed(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y2", "yardım2", "help2  "],
  permlevel: 0
};

exports.help = {
  name: "moderasyon2",
  description: "Gelişmiş Yardım Menüsü",
  usage: "yardım"
};
//Lord Creative
