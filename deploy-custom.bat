@echo off
chcp 65001 >nul
echo ========================================
echo   🚀 Déploiement avec Message Personnalisé
echo ========================================
echo.

echo 📦 Ajout des fichiers modifiés...
git add .

echo.
echo 📝 Entrez votre message de commit :
set /p commit_message="Message: "

if "%commit_message%"=="" (
    echo.
    echo ❌ Le message de commit ne peut pas être vide
    echo.
    pause
    exit /b
)

echo.
echo 💾 Création du commit...
git commit -m "%commit_message%"

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
