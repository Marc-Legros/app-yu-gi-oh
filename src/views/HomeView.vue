<script setup>
  import { store, fetchCards } from '../store/index'
  import { reactive, ref } from 'vue'
</script>

<template>
  <main>
    <ul>
      <li v-for=" deck in store.deck" :key="deck" class="deck-preview"><strong>{{ deck.name }}</strong>
        <ul>
            <li v-for="card in deck.cards.slice(0,3)" :key="card.id">
              <img :src="card.card_images[0].image_url_small" class="img-preview">
            </li>
        </ul>
        </li>
    </ul>
  </main>
</template>


<style scoped>
.deck-preview strong {
  color: #a8cfff; 
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5); 
  font-weight: bold;
  font-size: 1.1em;
}

.deck-preview {
  position: relative;
  background-color: #0f1e3d;
  border: 2px solid #4da6ff; 
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 0 0 15px rgba(77, 166, 255, 0.5); 
  width: 150px;
}

.img-preview {
  position: absolute; 
  width: 75px;       
  height: auto;
  border-radius: 5px;
  border: 1px solid #4da6ff; 
  box-shadow: 0 0 8px rgba(106, 119, 133, 0.7);
  transition: transform 0.2s;
}

</style>