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

  deckName.value=""
  deck.length =0
}

</script>

<template>
  <button @click="loadCards">Charger les cartes</button>

  <ul>
    <li v-for="card in store.cards" :key="card.id" class="card-item":class="{ selected: deck.includes(card) }" @click="addToDeck(card)">
      <img class="card-img" :src="card.card_images[0].image_url_small" :alt="card.name">
      {{ card.name }}
    </li>
  </ul>

  <div>
    <h3>Deck en cours</h3>
    <ul>
      <li v-for="card in deck" :key="card.id">{{ card.name }}</li>
    </ul>
    <input type="text" v-model="deckName" placeholder="Nom du deck">
    <button @click="saveDeck">Enregistrer le deck</button>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.card-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  text-align: center;
  cursor: pointer;
  padding: 5px;
}

.card-item.selected {
  border: 2px solid rgba(93, 84, 36, 0.84);
  background-color: rgba(0, 0, 0, 0.2);
}

.card-img {
  width: 75px;
  height: auto;
  border-radius: 5px;
}
</style>