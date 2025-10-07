@echo off
chcp 65001 >nul
echo ========================================
echo   🚀 Déploiement Automatique GitHub
echo ========================================
echo.

echo 📦 Ajout des fichiers modifiés...
git add .

echo.
echo 📝 Création du commit...
for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c-%%b-%%a)
for /f "tokens=1-2 delims=/:" %%a in ('time /t') do (set mytime=%%a:%%b)
git commit -m "Mise à jour automatique du %mydate% à %mytime%"

if errorlevel 1 (
    echo.
    echo ⚠️  Aucun changement à commiter
    echo.
    pause
    exit /b
)

echo.
echo 🌐 Push vers GitHub...
git push origin main

if errorlevel 1 (
    echo.
    echo ❌ Erreur lors du push
    echo.
    pause
    exit /b
)

echo.
echo ✅ Déploiement réussi !
echo 🌐 Le site sera mis à jour dans quelques minutes
echo.
echo 📍 URL: https://manmbailikol.github.io/Famille_MAI_Officiel/
echo.
pause
