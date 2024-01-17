#!/bin/bash
set -e

echo "Deployment started ..."

# Pull the latest version of the app
git pull origin main
echo "New changes copied to server !"

echo "Installing Dependencies..."
npm install --yes

npm run build

pm2 start npm --name \"test_server\" --start

echo "Deployment Finished!"
