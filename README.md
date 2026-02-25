# app-yu-gi-oh

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

# Projet Yu-Gi-Oh! – App Interactive Vue.js

## 🎯 Objectif
Créer une application **Yu-Gi-Oh! interactive complète** en **Vue.js** avec gestion de decks, recherche de cartes et statistiques avancées.

---

## 🃏 Fonctionnalités principales

### Liste des cartes
- Pagination
- Recherche par nom
- Filtrer par :
  - Type : Monstre, Magie, Piège
  - Attribut : Attaque, DEF, Archétype, Level, Rareté
- Tri :
  - Alphabétique
  - Deck : plus performant, plus joué, win rate
  - Prix : prix moyen, valeur totale du deck
- Page détail d’une carte avec informations complètes et sets

### CRUD Decks

#### CREATE
- Créer un deck : Nom, Description, Date de création, Date de dernière utilisation

#### READ
- Voir détail d’un deck
- Voir les cartes avec leurs quantités

#### UPDATE
- Modifier le nom, la description ou la quantité d’une carte
- Ajouter une carte au deck
- Supprimer une carte du deck

#### DELETE
- Supprimer un deck entier

---

## ⚖️ Règles de construction des decks
- Maximum 3 exemplaires d’une même carte
- Minimum 40 cartes
- Maximum 60 cartes
- Vérification : assez de monstres / trop de pièges

---

## 📊 Statistiques / Ratios

Pour chaque deck :
- % Monstres
- % Magies
- % Pièges
- Carte la plus utilisée
- Type de carte le plus joué
- Attribut dominant
- Valeur totale estimée du deck (via prix API)

---

## 🎨 Charte graphique
- Couleur principale : Jaune  
- Couleur secondaire : Violet  
- Couleur accent : Rouge  

---

