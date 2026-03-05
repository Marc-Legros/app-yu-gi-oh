<script setup>
import { store } from '../store/index'

const decks = store.deck
const countType = (cards, type) => 
  cards.filter(c => c.type?.toLowerCase().includes(type)).length
</script>

<template>
  <div>
    <h1>Decks</h1>

    <div v-for="deck in decks" :key="deck.name" class="deck-container">
      <h2>{{ deck.name }}</h2>

      <p>
        Monstres: {{ countType(deck.cards, 'monster') }},
        Magies: {{ countType(deck.cards, 'spell') }},
        Pièges: {{ countType(deck.cards, 'trap') }}
      </p>

      <div class="cards-grid">
        <div 
          v-for="card in deck.cards" :key="card.id" class="card-small"    >
          <img :src="card.card_images?.[0]?.image_url_small" :alt="card.name">
          <span>{{ card.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.deck-container {
  margin-bottom: 20px;
  border: 1px solid #4da6ff;
  padding: 10px;
  border-radius: 8px;
  background: #0f1e3d;
}

.deck-container h2 {
  color: #4da6ff;
  margin-bottom: 5px;
}

.cards-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.card-small {
  width: 50px;
  text-align: center;
  background: #162a5c;
  color: #cfe2ff;
  border: 1px solid #4da6ff;
  border-radius: 4px;
  font-size: 0.6rem;
  padding: 2px;
}

.card-small img {
  width: 40px;
  height: auto;
  display: block;
  margin: auto;
}
</style>