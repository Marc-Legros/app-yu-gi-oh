<script>
import {store, fetchCardsDetails} from '../store/index'
</script>


<template>
    <div v-if="store.selectedCard">
        <h1>{{ store.selectedCard.name }}</h1>
        <img :src="store.selectedCard.card_images[0].image_url" :alt="store.selectedCard.name">
        <p>{{ store.selectedCard.desc }}</p>
        <p> ATK: {{ store.selectedCard.atk }}</p>
        <p> DEF: {{ store.selectedCard.def }}</p>
    </div>
    <p v-else="">Chargement...</p>
    <button @click="loadCards">Charger les cartes</button>
</template>

<script setup>
const loadCards = () => {
  const testId = 89631139  
  fetchCardsDetails(testId)
}
console.log('CardsDetailsView Chargés')
</script>