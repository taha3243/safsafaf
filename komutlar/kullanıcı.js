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
        `**Kullanıcı-Komutları**`,
        `\n<a:kanltik:785778671012544523> \`f!ping\` = Botun Pingini gösterir. \n<a:kanltik:785778671012544523> \`f!avatar\` = Avatarını gösterir.\n<a:kanltik:785778671012544523> \`f!rolbilgi\` = Rol hakkında bilgi alırsınız.\n <a:kanltik:785778671012544523> \`f!yaz\` = Bota İstediğiniz Şeyi Yazdırırsınız.  \n<a:kanltik:785778671012544523> \`f!kullanıcıbilgim\` = Bilgilerinizi Gösterir.  \n<a:kanltik:785778671012544523> \`f!istatistik\` = Botun İstatistiklerini Görüntüler.`
      );
    return message.channel.sendEmbed(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım", "help", "y"],
  permlevel: 0
};

exports.help = {
  name: "kullanıcı",
  description: "Gelişmiş Yardım Menüsü",
  usage: "yardım"
};
//Lord Creative
