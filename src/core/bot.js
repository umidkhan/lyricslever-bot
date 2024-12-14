const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
  ctx.reply(
    `*Assalomu alaykum* [${ctx.from.first_name}](tg://user?id=${ctx.from.id}) 👋\n*Botga xush kelibsiz*\n\nℹ️ Ushbu bot maxsus tayinlangan kanal yoki guruhga reaksiya bosish uchun yaratilgan\n🧑‍💻 _Agar sizga ham shu kabi bot kerak bo'lsa [Umidxon](https://t.me/umidxon_polatxonov)'ga murojaat qiling_`,
    {
      parse_mode: "MarkdownV2",
      reply_to_message_id: ctx.message.message_id,
      disable_web_page_preview: true,
    }
  );
});

bot.on("channel_post", (ctx) => {
  ctx.react("🔥");
});

bot.launch(
  {
    dropPendingUpdates: true,
  },
  () => {
    console.log("Bot started");
  }
);

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

module.exports = bot;