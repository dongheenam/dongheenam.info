# build the site in public/
Write-Output "building Hugo..."
hugo --minify

# deploy the website to the public s3 bucket
Write-Output "uploading to dnam.info..."
hugo deploy --confirm --maxDeletes -1

# upload the entire project to the private s3 bucket
Write-Output "uploading to dnam.info.public..."
aws s3 sync . s3://dongheenam.info.source --exclude ".*" --exclude "public/*" --exclude "resources/*" --delete

# upload the source codes to GitHub
Write-Output "uploading to GitHub..."

$today = (Get-Date -DisplayHint Date)
git add *
git commit -m "automatic update on $today"
git push

Write-Output "All complete!"


# other useful commands
# hugo server --bind=192.168.1.110 --baseURL=http://192.168.1.110:1313 -D --disableFastRender --enableGitInfo