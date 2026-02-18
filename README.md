# État des Lieux – PWA

Application web progressive pour état des lieux de location saisonnière.

## 📲 Installation sur iPhone

1. Ouvrez le lien dans **Safari** (pas Chrome)
2. Touchez **Partager** (↗️)
3. Touchez **"Sur l'écran d'accueil"**
4. L'app apparaît comme une vraie application !

## 🚀 Hébergement gratuit

### Option 1 : Netlify (le plus simple)

1. Allez sur **https://app.netlify.com/drop**
2. **Glissez-déposez** le dossier `pwa/` entier sur la page
3. C'est en ligne ! Netlify vous donne une URL type `https://xxx.netlify.app`
4. (Optionnel) Changez le nom du site dans Site settings

### Option 2 : GitHub Pages

1. Créez un compte sur **https://github.com** (gratuit)
2. Créez un nouveau repository (ex: `etat-des-lieux`)
3. Uploadez tous les fichiers du dossier `pwa/`
4. Allez dans **Settings** > **Pages**
5. Source : **Deploy from a branch** > **main** > **/ (root)** > **Save**
6. Votre site sera sur `https://votre-nom.github.io/etat-des-lieux/`

### Option 3 : Vercel

1. Allez sur **https://vercel.com**
2. Connectez votre GitHub ou glissez le dossier
3. Déployé automatiquement en HTTPS

## 📁 Fichiers

```
pwa/
├── index.html        ← L'application principale
├── manifest.json     ← Métadonnées PWA (nom, icônes, couleurs)
├── sw.js             ← Service Worker (cache hors-ligne)
├── icon-192x192.png  ← Icône petite
├── icon-512x512.png  ← Icône grande
└── README.md         ← Ce fichier
```

## ✨ Fonctionnalités

- ✅ Formulaire d'état des lieux complet
- ✅ Ajout de photos (galerie + appareil photo)
- ✅ Signature tactile (propriétaire + locataire)
- ✅ Export PDF
- ✅ Envoi par email
- ✅ Fonctionne hors-ligne (PWA)
- ✅ Installable sur iPhone / Android
- ✅ Sauvegarde locale (localStorage)
