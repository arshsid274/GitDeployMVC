require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  discordWebhookUrl: process.env.DISCORD_WEBHOOK_URL
};