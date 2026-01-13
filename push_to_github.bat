@echo off
set "PATH=%PATH%;C:\Program Files\Git\cmd"

echo Initializing Git repository...
git init
git add .
git commit -m "Initial commit of Antigravity Portfolio"
git branch -M main

echo.
echo Configuring remote...
git remote add origin https://github.com/mouryunn/resume_mouryunn.git
IF %ERRORLEVEL% NEQ 0 (
    echo Remote 'origin' already exists, updating URL...
    git remote set-url origin https://github.com/mouryunn/resume_mouryunn.git
)

echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo Done!
pause
