<script setup>
import { store } from '../store/index'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const decks = store.deck

const goToDeck = (deck) => {
  router.push({ name: 'DeckDetails', params: { deckName: deck.name } })
}
</script>

<template>
  <div>
    <h1>Mes Decks</h1>

    <div v-for="deck in decks" :key="deck.name" class="deck-card" @click="goToDeck(deck)">
      <strong>{{ deck.name }}</strong>

      <div class="deck-preview">
        <div v-for="card in deck.cards.slice(0,3)" :key="card.id" class="card-item">
          <img :src="card.card_images?.[0]?.image_url_small" alt="" />
          {{ card.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.deck-card {
  border: 2px solid #4da6ff;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 8px;
  background: #0f1e3d;
  cursor: pointer;
}

.deck-card:hover {
  background: #162a5c;
}

.deck-preview {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 6px;
}

.card-item {
  background: #162a5c;
  color: #cfe2ff;
  font-size: 0.75rem;
  border: 1px solid #4da6ff;
  border-radius: 4px;
  padding: 2px 4px;
  width: 50px;
  text-align: center;
}

.card-item img {
  width: 40px;
  height: auto;
  display: block;
  margin: auto;
}
</style>