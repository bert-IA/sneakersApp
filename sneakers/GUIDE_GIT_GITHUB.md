# Guide complet : Créer un repository GitHub et pousser votre projet

## 🎯 Objectif
Créer un repository sur GitHub et y pousser votre projet sneakers-app existant.

---

## 📋 Prérequis
- Avoir un compte GitHub (github.com)
- Avoir Git installé sur votre machine
- Être dans le dossier de votre projet (`h:\B2SIO\REACT_tp\sneakersApp\sneakers`)

---

## 🚀 Étapes détaillées

### Étape 1 : Créer le repository sur GitHub (Interface web)

1. **Connectez-vous à GitHub** → https://github.com
2. **Cliquez sur le bouton vert "New"** (ou l'icône "+" en haut à droite puis "New repository")
3. **Remplissez le formulaire** :
   - **Repository name** : `sneakers-app` (ou le nom de votre choix)
   - **Description** : `Application React pour la vente de sneakers`
   - **Visibilité** : Choisir "Public" ou "Private"
   - ⚠️ **IMPORTANT** : **NE COCHEZ AUCUNE CASE** en bas (ni README, ni .gitignore, ni license)
4. **Cliquez sur "Create repository"**
5. **Gardez cette page ouverte** → vous aurez besoin de l'URL qui s'affiche

---

### Étape 2 : Préparer votre projet local

#### 2.1 Ouvrir le terminal PowerShell
- Ouvrez PowerShell dans le dossier de votre projet
- Ou naviguez vers votre projet :
```powershell
cd "h:\B2SIO\REACT_tp\sneakersApp\sneakers"
```

#### 2.2 Vérifier si Git est déjà initialisé
```powershell
git status
```

**Si vous voyez un message d'erreur** → passez à l'étape 2.3
**Si vous voyez des informations sur les fichiers** → passez directement à l'étape 3

#### 2.3 Initialiser Git (si nécessaire)
```powershell
git init
```

---

### Étape 3 : Préparer les fichiers pour le commit

#### 3.1 Créer un fichier .gitignore (recommandé)
```powershell
New-Item .gitignore -ItemType File
```

Puis ouvrez le fichier `.gitignore` dans votre éditeur et ajoutez :
```
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Production build
build/
dist/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
logs/
*.log
```

#### 3.2 Ajouter tous les fichiers au staging
```powershell
git add .
```

#### 3.3 Vérifier ce qui va être commité
```powershell
git status
```
Vous devriez voir tous vos fichiers en vert (prêts à être commités).

---

### Étape 4 : Faire le premier commit

```powershell
git commit -m "Premier commit : Application React sneakers"
```

---

### Étape 5 : Connecter votre projet au repository GitHub

#### 5.1 Ajouter l'origine distante
⚠️ **Remplacez** `VOTRE-USERNAME` et `sneakers-app` par vos vraies valeurs :

```powershell
git remote add origin https://github.com/VOTRE-USERNAME/sneakers-app.git
```

**Exemple concret** :
```powershell
git remote add origin https://github.com/johnDoe/sneakers-app.git
```

#### 5.2 Vérifier que l'origine est bien ajoutée
```powershell
git remote -v
```

---

### Étape 6 : Pousser votre code sur GitHub

#### 6.1 Créer et pousser la branche principale
```powershell
git branch -M main
```

#### 6.2 Pousser le code
```powershell
git push -u origin main
```

**Si on vous demande vos identifiants** :
- **Username** : Votre nom d'utilisateur GitHub
- **Password** : Votre token d'accès personnel (PAS votre mot de passe GitHub)

---

## 🔐 Configuration du token GitHub (si nécessaire)

Si vous n'avez pas encore de token d'accès personnel :

1. Allez sur GitHub → **Settings** (votre profil)
2. **Developer settings** → **Personal access tokens** → **Tokens (classic)**
3. **Generate new token (classic)**
4. **Cochez** : `repo` (Full control of private repositories)
5. **Générez et copiez** le token
6. **Utilisez ce token** comme mot de passe lors du push

---

## ✅ Vérification

Après avoir suivi toutes les étapes :

1. **Rafraîchissez la page** de votre repository sur GitHub
2. **Vous devriez voir** tous vos fichiers apparaître
3. **Testez** en modifiant un fichier localement, puis :
   ```powershell
   git add .
   git commit -m "Test de modification"
   git push
   ```

---

## 🆘 Commandes utiles pour la suite

### Workflow quotidien
```powershell
# Voir l'état des fichiers
git status

# Ajouter des modifications
git add .
# ou ajouter un fichier spécifique
git add nom-du-fichier.js

# Faire un commit
git commit -m "Description de vos modifications"

# Pousser vers GitHub
git push

# Récupérer les dernières modifications (si vous travaillez en équipe)
git pull
```

### Commandes de diagnostic
```powershell
# Voir l'historique des commits
git log --oneline

# Voir les remotes configurées
git remote -v

# Voir les branches
git branch -a
```

---

## 🐛 Problèmes courants

### Erreur "repository not found"
- Vérifiez l'URL de votre repository
- Vérifiez que vous avez les droits d'accès

### Erreur d'authentification
- Utilisez un token d'accès personnel, pas votre mot de passe
- Vérifiez que votre token a les bonnes permissions

### Erreur "branch ahead/behind"
```powershell
git pull origin main
```

---

## 📝 Notes importantes

- ⚠️ **Toujours faire** `git status` avant de commiter
- ⚠️ **Messages de commit explicites** : décrivez ce que vous avez modifié
- ⚠️ **Régularité** : commitez et pushez régulièrement
- ⚠️ **Backup** : GitHub devient votre sauvegarde, utilisez-le !

---

*Ce guide a été créé pour votre projet sneakers-app. Gardez-le précieusement !*
