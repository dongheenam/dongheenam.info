# local build command
# hugo server --bind=192.168.1.2 --baseURL=http://192.168.1.2:1313 -D --disableFastRender --enableGitInfo

# cloudinary sync
venv\Scripts\Activate.ps1
cld sync .\assets\ / --push

# github
git push