echo "npm run build..."
npm run build

echo "copy build/ to server"
scp -r build/* ryan@23.105.209.224 -p 30359:/home/ryan/diff-deploy/

echo "Done!"
