<script setup>
import { store, fetchCards, fetchCardsDetails } from '../store/index'
import { ref, computed, onMounted } from 'vue'
import CardsDetails from '../views/CardsDetailsView.vue'

const selectedCard = ref(null)
const search = ref('')
const startIndex = ref(0)
const cardsPerPage = 12

const selectCard = (card) => {
  selectedCard.value = card
  fetchCardsDetails(card.id)
}

const searchResults = computed(() =>
  store.cards.filter(card =>
    card.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

const paginatedCards = computed(() =>
  searchResults.value.slice(startIndex.value, startIndex.value + cardsPerPage)
)

const nextPage = () => {
  if (startIndex.value + cardsPerPage < searchResults.value.length) {
    startIndex.value += cardsPerPage
  }
}

const prevPage = () => {
  if (startIndex.value > 0) {
    startIndex.value -= cardsPerPage
  }
}

onMounted(() => fetchCards())
</script>

<template>
  <div class="home-page">
    <input v-model="search" type="text" placeholder="Rechercher une carte..." class="search-bar"/>

    <ul class="cards-list">
      <li v-for="card in paginatedCards" :key="card.id" class="card-item" @click="selectCard(card)">
        <img :src="card.card_images?.[0]?.image_url_small" :alt="card.name" />
        <span>{{ card.name }}</span>
      </li>
    </ul>

    <div class="pagination" v-if="searchResults.length > cardsPerPage">
      <button @click="prevPage" :disabled="startIndex === 0">← Précédent</button>
      <button @click="nextPage" :disabled="startIndex + cardsPerPage >= searchResults.length">Suivant →</button>
    </div>

    <CardsDetails v-if="selectedCard" :card="selectedCard" />
  </div>
</template>

<style scoped>
.home-page {
  padding: 20px;
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background: #0b1426;
  color: white;
}

.search-bar {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: none;
}

.cards-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  margin: 0;
  width: 100%;
}

.card-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #162a5c;
  padding: 8px;
  border-radius: 6px;
  flex: 1 1 150px;
  max-width: 200px;
  cursor: pointer;
}

.card-item img {
  width: 100%;
  border-radius: 4px;
}

.pagination {
  margin-top: 15px;
  display: flex;
  gap: 10px;
  justify-content: center;
}

.pagination button {
  padding: 6px 12px;
  border-radius: 5px;
  border: none;
  background: #4da6ff;
  color: white;
  cursor: pointer;
}

.pagination button:disabled {
  background: gray;
  cursor: default;
}
</style>