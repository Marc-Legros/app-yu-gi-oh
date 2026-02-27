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
</template>

<script setup>

console.log('CardsDetailsView Chargés')
</script>

<style scoped>

div {
  background-color: #0f1e3d;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #2f5fd0;
  max-width: 600px;
  margin-bottom: 20px;
}

h1 {
  color: #4da6ff;
  margin-bottom: 15px;
}

img {
  width: 220px;
  border-radius: 8px;
  margin-bottom: 15px;
  border: 2px solid #4da6ff;
}

p {
  margin: 8px 0;
  color: #e6f0ff;
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