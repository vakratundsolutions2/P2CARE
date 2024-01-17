#!/bin/bash
set -e

echo "Deployment started ..."

# Pull the latest version of the app
git pull origin main
echo "New changes copied to server !"

echo "Installing Dependencies..."
npm install --yes

npm run build
<<<<<<< HEAD
          
pm2 start npm --name \"test_server\" -- start
=======

pm2 start npm --name \"test_server\" --start
>>>>>>> 79b946f3855055984fead38ab1152e412f8849e8

echo "Deployment Finished!"
