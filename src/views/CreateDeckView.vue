<script setup>
import { store, fetchCards } from '../store/index'
import { reactive, ref, computed, onMounted } from 'vue'

const deck = reactive([])
const deckName = ref("")

const startIndex = ref(0)
const cardsPerPage = 20

const loadCards = () => fetchCards()

const addToDeck = (card) => {
  const count = deck.filter(c => c.id === card.id).length
  if (count >= 3) {
    alert("Vous ne pouvez pas ajouter plus de 3 exemplaires de cette carte !")
    return
  }
  deck.push(card)
}

const removeCard = (card) => {
  const index = deck.indexOf(card)
  if (index > -1) {
    deck.splice(index, 1)
  }
}

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

  store.deck.push(NewDeck)
  localStorage.setItem("userDecks", JSON.stringify(store.deck))

  deckName.value = ""
  deck.length = 0
}


const paginatedCards = computed(() =>
  store.cards.slice(startIndex.value, startIndex.value + cardsPerPage)
)

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

    <div class="actions">
      <button @click="loadCards">Charger les cartes</button>
    </div>

    <ul class="cards-list">
      <li 
        v-for="card in paginatedCards" :key="card.id" class="card-item" :class="{ selected: deck.includes(card) }" @click="addToDeck(card)">
        <img class="card-img" :src="card.card_images[0].image_url_small" :alt="card.name">
        {{ card.name }}
      </li>
    </ul>

    <div class="pagination">
      <button @click="prevPage">Précédent</button>
      <button @click="nextPage">Suivant</button>
    </div>

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
.create-deck-page {
  padding: 30px 5%;
  min-height: 100vh;
  background: #0b0f1f;
  color: #fff;
  font-family: 'Verdana', sans-serif;
  text-align: center;
}

button {
  background-color: #1b3c88;
  color: #fff;
  border: 2px solid #4da6ff;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;
}

button:hover {
  background-color: #4da6ff;
  color: #000;
}

.cards-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  justify-items: center;
  margin: 20px 0;
}

.card-item {
  width: 120px;
  cursor: pointer;
  text-align: center;
  border: 2px solid #4da6ff;
  border-radius: 8px;
  padding: 6px;
  background-color: #111f3f;
  transition: all 0.2s ease;
}

.card-item:hover {
  transform: scale(1.05);
  border-color: #ffd700;
}

.card-item.selected {
  border-color: #ff4500;
}

.card-img {
  width: 80px;
  border-radius: 4px;
  margin-bottom: 6px;
  box-shadow: 0 2px 6px #000;
}

.current-deck {
  margin: 30px auto;
  padding: 15px;
  background-color: #111f3f;
  border: 2px solid #4da6ff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  max-width: 500px; 
}

.current-deck h3 {
  margin-bottom: 15px;
  color: #4da6ff;
}

.deck-list {
  list-style: none;
  padding: 0;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.deck-card {
  display: flex;
  justify-content: space-between;
  width: 90%; 
  max-width: 300px; 
  padding: 6px 10px;
  background-color: #0b1426;
  border: 1px solid #4da6ff;
  border-radius: 6px;
}

input {
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #4da6ff;
  background-color: #0b1426;
  color: #fff;
  margin-bottom: 10px;
  width: 80%;
  text-align: center;
}

input:focus {
  outline: none;
  border-color: #ffd700;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 15px 0;
}

@media (max-width: 768px) {
  .cards-list {
    grid-template-columns: repeat(2, 1fr);
  }
  .card-item {
    width: 100px;
  }
  .card-img {
    width: 60px;
  }
  .current-deck {
    max-width: 100%;
    padding: 10px;
  }
  input {
    width: 100%;
  }
}
</style>