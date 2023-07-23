
# Ensure we are on the 'gh-pages' branch
echo "------------------Checking if 'gh-pages' branch exists------------------"
git branch gh-pages

# Switch to the 'gh-pages' branch
echo "------------------Switching to 'gh-pages' branch------------------"
git checkout gh-pages

# Create the 'gh-pages' branch if it doesn't exist
echo "------------------Creating 'gh-pages' branch------------------"
git checkout -b gh-pages

# Push the 'gh-pages' branch to the remote 'origin' repository
echo "------------------Pushing 'gh-pages' branch to remote repository------------------"
git push origin gh-pages
