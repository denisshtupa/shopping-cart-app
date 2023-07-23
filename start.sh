
# Ensure we are on the 'gh-pages' branch
echo "------------------Installing npm dependencies------------------"
npm install

# Switch to the 'gh-pages' branch
echo "------------------Running application------------------"
ng serve --configuration=development
