const axios = require('axios').default;
const config = require('../config/config');

class DiscordService {
  static async sendNotification(content, embed) {
    try {
      const response = await axios.post(config.discordWebhookUrl, {
        content,
        embeds: [embed]
      });
      console.log("Discord notification sent successfully");
      return response;
    } catch (error) {
      console.error(`Error sending to Discord: ${error}`);
      throw error;
    }
  }
}

module.exports = DiscordService;
