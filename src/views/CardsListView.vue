<script>
import {store, fetchCards} from '../store/index'
</script>

<template>
    <ul>
        <li v-for="card in store.cards" :key="card.id">{{ card.name }}</li>
    </ul>
    <button @click="loadCards">Charger les cartes</button>
</template>

<script setup>
const loadCards = () => {
  fetchCards()
}
console.log('CardsListView Chargés')
</script>