class DeploymentModel {
  constructor(webhookData) {
    this.avatarUrl = webhookData.deployment_status.creator.avatar_url;
    this.state = webhookData.deployment_status.state;
    this.repoName = webhookData.repository.name;
    this.environment = webhookData.deployment_status.environment;
    this.description = webhookData.deployment_status.description;
    this.targetUrl = webhookData.deployment_status.target_url;
  }

  getColor() {
    switch(this.state) {
      case 'failure': return 0xff0000; // Red
      case 'pending': return 0xffff00; // Yellow
      default: return 0x00ff00; // Green for success
    }
  }
}

module.exports = DeploymentModel;
