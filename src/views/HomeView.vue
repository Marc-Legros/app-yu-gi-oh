<script setup>
  import { store, fetchCards } from '../store/index'
  import { reactive, ref } from 'vue'
  import { computed, onMounted } from 'vue'

const search = ref('')

const specificNames = [
  "Blue-Eyes White Dragon",
  "Dark Magician",
  "Kuriboh",
  "Elemental HERO Neos",
  "Stardust Dragon",
  "Exodia the Forbidden One", 
]

const specificCards = computed(() => {
  return store.cards.filter(card =>
    specificNames.includes(card.name)
  )
})

onMounted(() => {
  fetchCards()
})

</script>

<template>
  <div class="specific-cards">
    <h2>Cartes</h2>
   <ul class="cards-list">
    <li v-for="card in specificCards" :key="card.id" class="card-item">
      <img :src="card.card_images[0].image_url_small" class="card-img">
    </li>
  </ul>
  </div>
  <br>
  <h2>Decks</h2>
    <ul class="user-decks">
      <li v-for=" deck in store.deck" :key="deck" class="deck-preview"><strong>{{ deck.name }}</strong>
        <ul class="deck-cards">
            <li v-for="card in deck.cards.slice(0,3)" :key="card.id">
              <img :src="card.card_images[0].image_url_small" class="img-preview">
            </li>
        </ul>
        </li>
    </ul>
</template>


<style scoped>


.user-decks {
  margin-top: 40px; 
}

.deck-preview strong {
  color: #a8cfff; 
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5); 
  font-weight: bold;
  font-size: 1.1em;
}

.img-preview {
  position: relative; 
  width: 75px;       
  height: auto;
  border-radius: 5px;
  border: 1px solid #4da6ff; 
  box-shadow: 0 0 8px rgba(106, 119, 133, 0.7);
  transition: transform 0.2s;
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

.deck-cards {
  display: flex;      
  gap: 10px;
  padding: 10px 0 0 0;
  list-style: none;
}

.cards-list {
  display: flex;              
  gap: 15px;                   
  overflow-x: auto;           
  padding: 10px;
  list-style: none;
}

.card-item {
  display: flex;
  flex-direction: column;      
  align-items: center;
  background-color: #0f1e3d;
  border: 2px solid #4da6ff;
  border-radius: 10px;
  padding: 5px;
  min-width: 120px;            
  box-shadow: 0 0 10px rgba(77,166,255,0.5);
}

.card-img {
  width: 200px;
  height: auto;
  border-radius: 5px;
  margin-bottom: 5px;
}
</style>