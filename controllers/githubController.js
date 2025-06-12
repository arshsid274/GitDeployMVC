const DeploymentModel = require('../models/deploymentModel');
const DiscordService = require('../services/discordServices');

exports.handleWebhook = async (req, res) => {
  try {
    const deployment = new DeploymentModel(req.body);
    
    const embed = {
      title: `Deployment ${deployment.state.toUpperCase()} - ${deployment.repoName}`,
      description: `**Environment:** ${deployment.environment}\n**Status:** ${deployment.state}\n**Description:** ${deployment.description}`,
      color: deployment.getColor(),
      thumbnail: {
        url: deployment.avatarUrl,
      },
      url: deployment.targetUrl,
    };
    
    await DiscordService.sendNotification(":wave: Hi mom!", embed);
    res.status(204).send();
  } catch (error) {
    console.error(`Error processing webhook: ${error}`);
    res.status(500).send({ error: 'Failed to process webhook' });
  }
};
