# 🚀 Guide de Déploiement Automatique

Ce dossier contient deux scripts pour déployer automatiquement vos modifications sur GitHub Pages.

## 📦 Scripts disponibles

### 1️⃣ `deploy-auto.bat` - Déploiement Automatique
**Usage :** Double-cliquez sur le fichier

**Ce qu'il fait :**
- ✅ Ajoute automatiquement tous les fichiers modifiés
- ✅ Crée un commit avec message auto-généré (date et heure)
- ✅ Pousse vers GitHub
- ✅ Affiche le statut de chaque étape

**Message de commit généré :**
```
Mise à jour automatique du 2025-01-07 à 22:30
```

**Quand l'utiliser :**
- Modifications rapides
- Corrections mineures
- Quand le message de commit importe peu

---

### 2️⃣ `deploy-custom.bat` - Déploiement Personnalisé
**Usage :** Double-cliquez sur le fichier

**Ce qu'il fait :**
- ✅ Ajoute automatiquement tous les fichiers modifiés
- ✅ Vous demande d'entrer un message de commit
- ✅ Crée le commit avec votre message
- ✅ Pousse vers GitHub
- ✅ Affiche le statut de chaque étape

**Exemple d'utilisation :**
```
Message: Ajout de nouvelles photos dans la galerie
```

**Quand l'utiliser :**
- Nouvelles fonctionnalités importantes
- Changements majeurs
- Quand vous voulez un historique clair

---

## 🎯 Workflow Recommandé

### Modifications mineures
1. Modifiez vos fichiers HTML/CSS/JS
2. Double-cliquez sur `deploy-auto.bat`
3. Attendez la confirmation ✅
4. Le site est mis à jour !

### Modifications importantes
1. Modifiez vos fichiers
2. Double-cliquez sur `deploy-custom.bat`
3. Tapez un message descriptif
4. Appuyez sur Entrée
5. Le site est mis à jour !

---

## ⚠️ Important

- **Toujours tester localement** avant de déployer
- Les scripts poussent **tous les fichiers modifiés**
- Le déploiement sur GitHub Pages prend **1-2 minutes**
- Vérifiez que Git est bien configuré sur votre machine

---

## 🔧 En cas de problème

### "Git n'est pas reconnu..."
➜ Installez Git : https://git-scm.com/download/win

### "Aucun changement à commiter"
➜ Normal, signifie qu'il n'y a rien de nouveau à déployer

### "Erreur lors du push"
➜ Vérifiez votre connexion Internet
➜ Vérifiez vos identifiants GitHub

---

## 📍 URL du site
https://manmbailikol.github.io/Famille_MAI_Officiel/
