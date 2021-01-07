const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const seksizaman = moment
    .duration(bot.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter("F O R S   'Buyur benim istatistiklerim", bot.user.avatarURL)
    .addField(
      "<a:fors37:785780355893428245> **Botun Sahibi**",
      "<@788666828083560449>| Sarkozy~R#0321"
    )
    .addField(
      "<a:fors37:785780355893428245>  **Geliştirici** ",
      "<@788666828083560449>"
    )
    .addField(
      "<a:fors34:785780354535129098> **Bellek kullanımı**",
      (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
      true
    )

    .addField("<a:fors34:785780354535129098> **Çalışma süresi**", seksizaman)

    .addField(
      "<a:kanltik:785778671012544523> **Kullanıcılar**:",
      bot.guilds.reduce((a, b) => a + b.memberCount, 0)
    )
    .addField(
      "<a:kanltik:785778671012544523> **Sunucular**",
      bot.guilds.size.toLocaleString(),
      true
    )
    .addField(
      "<a:kanltik:785778671012544523> **Kanallar**",
      bot.channels.size.toLocaleString(),
      true
    )
    .addField(
      "<a:kanltik:785778671012544523> **Discord.JS sürüm**",
      "v" + Discord.version,
      true
    )
    .addField(
      "<a:kanltik:785778671012544523> **Node.JS sürüm**",
      `${process.version}`,
      true
    )

    .addField("<a:kanltik:785778671012544523> **Ping**", bot.ping + " ms", true)
    .addField(
      "<a:fors35:785780357034803212> **CPU**",
      `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``
    )
    .addField("<a:fors35:785780357034803212> **Bit**", `\`${os.arch()}\``, true)
    .addField(
      "<a:fors35:785780357034803212> **İşletim Sistemi**",
      `\`\`${os.platform()}\`\``
    )
    .addField(
      "**» Bot Davet**",
      " [Davet Et](https://discord.com/api/oauth2/authorize?client_id=780113292777095178&permissions=8&scope=bot)"
    )
    .addField(
      "**» Uptime Botu Ekleme**",
      " [Bas Ekle](https://discord.com/api/oauth2/authorize?client_id=783388658291179531&permissions=8&scope=bot)"
    );
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i", "YEDEK KOMUT2"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};
