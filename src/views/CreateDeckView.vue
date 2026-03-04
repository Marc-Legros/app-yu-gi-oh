<script setup>
import { store, fetchCards } from '../store/index'
import { reactive, ref, computed, onMounted } from 'vue'

// Deck en cours et nom
const deck = reactive([])
const deckName = ref("")

// Pagination
const startIndex = ref(0)
const cardsPerPage = 20

// Charger les cartes depuis le store
const loadCards = () => fetchCards()

// Ajouter une carte au deck (max 3 exemplaires)
const addToDeck = (card) => {
  const count = deck.filter(c => c.id === card.id).length
  if (count >= 3) {
    alert("Vous ne pouvez pas ajouter plus de 3 exemplaires de cette carte !")
    return
  }
  deck.push(card)
}

// Supprimer une carte du deck
const removeCard = (card) => {
  const index = deck.findIndex(c => c.id === card.id)
  if (index !== -1) deck.splice(index, 1)
}

// Enregistrer le deck et sauvegarder dans localStorage
const saveDeck = () => {
  if (deck.length < 40) {
    alert("Le deck doit contenir au moins 40 cartes !")
    return
  }
  if (deck.length > 60) {
    alert("Le deck ne peut pas dépasser 60 cartes !")
    return
  }

  const NewDeck = {
    name: deckName.value,
    cards: [...deck]
  }

  // Ajouter le deck dans le store
  store.deck.push(NewDeck)

  // Sauvegarder dans localStorage
  localStorage.setItem("userDecks", JSON.stringify(store.deck))

  // Réinitialiser le deck en cours
  deckName.value = ""
  deck.length = 0
}

// Cartes paginées
const paginatedCards = computed(() =>
  store.cards.slice(startIndex.value, startIndex.value + cardsPerPage)
)

// Pagination
const nextPage = () => {
  if (startIndex.value + cardsPerPage < store.cards.length) {
    startIndex.value += cardsPerPage
  }
}

const prevPage = () => {
  if (startIndex.value > 0) {
    startIndex.value -= cardsPerPage
  }
}

// Charger les cartes et les decks sauvegardés au montage
onMounted(() => {
  fetchCards()
  const savedDecks = localStorage.getItem("userDecks")
  if (savedDecks) {
    store.deck = JSON.parse(savedDecks)
  }
})
</script>

<template>
  <div class="create-deck-page">

    <!-- Bouton pour charger les cartes -->
    <div class="actions">
      <button @click="loadCards">Charger les cartes</button>
    </div>

    <!-- Liste des cartes avec pagination -->
    <ul class="cards-list">
      <li 
        v-for="card in paginatedCards" 
        :key="card.id" 
        class="card-item"
        :class="{ selected: deck.includes(card) }"
        @click="addToDeck(card)"
      >
        <img class="card-img" :src="card.card_images[0].image_url_small" :alt="card.name">
        {{ card.name }}
      </li>
    </ul>

    <!-- Pagination -->
    <div class="pagination">
      <button @click="prevPage">Précédent</button>
      <button @click="nextPage">Suivant</button>
    </div>

    <!-- Deck en cours -->
    <div class="current-deck">
      <h3>Deck en cours ({{ deck.length }} cartes)</h3>
      <ul class="deck-list">
        <li v-for="card in deck" :key="card.id" class="deck-card">
          {{ card.name }}
          <button @click="removeCard(card)">Supprimer</button>
        </li>
      </ul>
      <input type="text" v-model="deckName" placeholder="Nom du deck">
      <button @click="saveDeck">Enregistrer le deck</button>
    </div>

  </div>
</template>

<style scoped>
/* ===== GENERAL ===== */
.create-deck-page {
  padding: 40px 5%;
  min-height: 100vh;
  background: linear-gradient(to bottom, #0b1426, #111f3f);
  color: white;
  font-family: 'Roboto', sans-serif;
}

/* ===== BOUTONS ===== */
button {
  background: linear-gradient(135deg, #4da6ff, #1b3c88);
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(77,166,255,0.4);
}

button:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 6px 20px rgba(77,166,255,0.6);
}

/* ===== LISTE DES CARTES ===== */
.cards-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.card-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  text-align: center;
  cursor: pointer;
  padding: 12px;
  background: linear-gradient(145deg, #162b55, #0f1e3d);
  border-radius: 12px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.4);
}

.card-item:hover {
  transform: translateY(-5px) scale(1.05);
  border: 1px solid #4da6ff;
  box-shadow: 0 8px 20px rgba(77,166,255,0.5);
}

.card-item.selected {
  border: 2px solid #4da6ff;
  background: linear-gradient(145deg, #1f3b85, #0b1a3b);
}

.card-img {
  width: 80px;
  height: auto;
  border-radius: 6px;
  margin-bottom: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.3);
}

/* ===== DECK EN COURS ===== */
.current-deck {
  margin-top: 40px;
  padding: 20px;
  background: linear-gradient(145deg, #1b2f5c, #0b1e3d);
  border-radius: 12px;
  border: 1px solid #4da6ff;
  box-shadow: 0 6px 20px rgba(0,0,0,0.4);
}

.current-deck h3 {
  margin-bottom: 15px;
  font-size: 1.4rem;
  color: #4da6ff;
}

.deck-list {
  list-style: none;
  padding: 0;
  margin-bottom: 15px;
}

.deck-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  margin-bottom: 8px;
  background: linear-gradient(145deg, #162a55, #0f1e3d);
  border-radius: 8px;
  border: 1px solid #4da6ff;
  transition: all 0.3s ease;
}

.deck-card:hover {
  background: linear-gradient(145deg, #1f3b85, #0b1a3b);
  transform: translateY(-2px);
}

/* ===== INPUT ===== */
input {
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #4da6ff;
  background-color: #162a5c;
  color: white;
  margin-right: 10px;
  transition: all 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #1b3c88;
  box-shadow: 0 0 10px #4da6ff;
}

input::placeholder {
  color: #a8cfff;
}

/* ===== PAGINATION ===== */
.pagination {
  margin: 20px 0;
  display: flex;
  gap: 15px;
  justify-content: center;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .card-item {
    width: 100px;
    padding: 10px;
  }

  .card-img {
    width: 60px;
  }

  input {
    width: 100%;
    margin-bottom: 12px;
  }

  .current-deck {
    padding: 15px; 
  }
}
</style>