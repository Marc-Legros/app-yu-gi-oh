<script setup>
import { store, fetchCards } from '../store/index'
import { reactive, ref } from 'vue'

const deck = reactive([])
const deckName = ref("")

const loadCards = () => {
  fetchCards()
}
 
const addToDeck = (card) => {
  deck.push(card)
}

const saveDeck = () => {
  const NewDeck = {
  name: deckName.value, 
  cards:[...deck]
  }
  store.deck.push(NewDeck)

  localStorage.setItem("decks", JSON.stringify(store.deck))
  deckName.value=""
  deck.length =0
}

</script>

<template>
  <div class="actions">
    <button @click="loadCards">Charger les cartes</button>
  </div>
  

  <ul class="cards-list">
    <li v-for="card in store.cards" :key="card.id" class="card-item":class="{ selected: deck.includes(card) }" @click="addToDeck(card)">
      <img class="card-img" :src="card.card_images[0].image_url_small" :alt="card.name">
      {{ card.name }}
    </li>
  </ul>

  <div>
    <h3>Deck en cours</h3>
    <ul class="cards-list">
      <li v-for="card in deck" :key="card.id">{{ card.name }}</li>
    </ul>
    <input type="text" v-model="deckName" placeholder="Nom du deck">
    <button @click="saveDeck">Enregistrer le deck</button>
  </div>
</template>

<style scoped>

button {
  background-color: #1b3c88;
  color: white;
  border: 1px solid #4da6ff;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 15px;
  transition: 0.2s ease;
  width: auto;
  align-self: flex-start;
}


button:hover {
  background-color: #2f5fd0;
}

.cards-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.card-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  text-align: center;
  cursor: pointer;
  padding: 8px;
  background-color: #0f1e3d;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: 0.2s ease;
}

.card-item:hover {
  background-color: #162a5c;
  border: 1px solid #4da6ff;
}

.card-item.selected {
  border: 2px solid #4da6ff;
  background-color: #1f3b85;
}

.card-img {
  width: 75px;
  height: auto;
  border-radius: 5px;
  margin-bottom: 5px;
}

div {
  margin-top: 30px;
  padding: 15px;
  background-color: #0f1e3d;
  border-radius: 8px;
  border: 1px solid #2f5fd0;
}

input {
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #4da6ff;
  background-color: #162a5c;
  color: white;
  margin-right: 10px;
}

input::placeholder {
  color: #a8cfff;
}

</style>