echo "------------------Removing node-modules------------------"
rm -rf node_modules/

echo "------------------Installing npm dependencies------------------"
npm install

echo "------------------Running application------------------"
ng serve --configuration=development
