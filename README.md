# GitHub Deployment Discord Notifier

## Project Overview

This is a Node.js application built with Express that receives GitHub deployment webhooks and sends notifications to Discord. The application follows the MVC (Model-View-Controller) architecture pattern.

## How It Works

1. GitHub sends a webhook to this application when a deployment status changes
2. The application processes the webhook data using the DeploymentModel
3. A formatted notification is sent to a Discord channel via webhook
4. A simple success page is shown to users who visit the application directly

## Project Structure

### Core Files
- `Server.js` - Entry point that starts the Express server
- `app.js` - Express application setup and middleware configuration
- `vercel.json` - Configuration for deploying to Vercel's serverless platform

### MVC Components
- **Models**: Data processing and business logic
  - `deploymentModel.js` - Processes GitHub webhook data
  
- **Views**: User interface templates
  - `home.js` - Simple HTML success page
  
- **Controllers**: Request handlers
  - `githubController.js` - Processes GitHub webhook requests
  - `homeController.js` - Handles web page requests
  
- **Routes**: URL routing
  - `githubRoutes.js` - Routes for GitHub webhook endpoints
  - `homeRoutes.js` - Routes for web pages
  
- **Services**: External integrations
  - `discordServices.js` - Sends notifications to Discord

### Configuration
- `config/config.js` - Application configuration from environment variables
- `.env` - Environment variables (not committed to version control)

## Deployment

This application is designed to be deployed to Vercel as a serverless function. The `vercel.json` file configures how the application runs in Vercel's environment.

## Local Development

1. Clone the repository
2. Create a `.env` file with required environment variables:
   - `PORT` - The port to run the server on (default: 3000)
   - `DISCORD_WEBHOOK_URL` - Your Discord webhook URL
3. Run `npm install` to install dependencies
4. Run `npm start` to start the server
5. The server will be available at http://localhost:3000