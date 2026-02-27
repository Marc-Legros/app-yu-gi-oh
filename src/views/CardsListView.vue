<script>
import {store, fetchCards, fetchCardsDetails} from '../store/index'
import CardsDetails from '../views/CardsDetailsView.vue'
</script>

<template>
    <ul>
        <li v-for="card in store.cards" :key="card.id" @click="selectCard(card)">{{ card.name }}</li>
    </ul>
    <CardsDetails />
    <button @click="loadCards">Charger les cartes</button>
</template>

<script setup>
const loadCards = () => {
  fetchCards()
}

const selectCard= (card) => {
  fetchCardsDetails(card.id)
}

console.log('CardsListView Chargés')
</script>

<style scoped>

ul {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

li {
  padding: 8px 12px;
  margin-bottom: 6px;
  background-color: #0f1e3d;
  border-radius: 6px;
  border: 1px solid #2f5fd0;
  color: #e6f0ff;
  transition: 0.2s ease;
}

li:hover {
  background-color: #162a5c;
  border-color: #4da6ff;
}

button {
  background-color: #1b3c88;
  color: white;
  border: 1px solid #4da6ff;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s ease;
}

button:hover {
  background-color: #2f5fd0;
}

</style>