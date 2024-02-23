#!/bin/bash
set -e

echo "Deployment started ..."

# Pull the latest version of the app
git pull origin main
echo "New changes copied to server !"

echo "Installing Dependencies..."
cd USER
npm install --f
npm run build
cd ..

cd ADMIN
npm install --f
npm run build
cd ..

cd BACKEND
npm install --f
pm2 start 0
cd ..

cd DOCTOR
npm install --f
pm2 start 0
cd ..




echo "Deployment Finished!"
