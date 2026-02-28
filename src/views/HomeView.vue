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
  <div class="home-page">

    <section class="specific-cards">
      <h2>Cartes</h2>
      <ul class="cards-list">
        <li v-for="card in specificCards" :key="card.id" class="card-item">
          <img :src="card.card_images[0].image_url_small" class="card-img">
        </li>
      </ul>
    </section>

    <section class="decks-section">
      <h2>Decks</h2>
      <ul class="user-decks">
        <li v-for="deck in store.deck" :key="deck.name" class="deck-preview">
          <strong>{{ deck.name }}</strong>
          <ul class="deck-cards">
            <li v-for="card in deck.cards.slice(0,3)" :key="card.id">
              <img :src="card.card_images[0].image_url_small" class="img-preview">
            </li>
          </ul>
        </li>
      </ul>
    </section>

  </div>
</template>


<style scoped>
.home-page {
  padding: 40px;
  min-height: 100vh;
  background: linear-gradient(to bottom, #0b1426, #111f3f);
  color: white;
}

.decks-section {
  margin-top: 60px;
}

/* ===== TITRES ===== */

h2 {
  margin-bottom: 20px;
  font-size: 1.8rem;
  border-left: 4px solid #4da6ff;
  padding-left: 12px;
}

/* ===== CARTES POPULAIRES ===== */

.cards-list {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 20px;
  list-style: none;
}

.card-item {
  background: #162b55;
  padding: 15px;
  border-radius: 15px;
  min-width: 200px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.5);
  transition: all 0.3s ease;
}

.card-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(77,166,255,0.7);
}

.card-img {
  width: 100%;
  border-radius: 10px;
}

/* ===== SECTION DECKS ===== */

.user-decks {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  list-style: none;
  padding: 0;
}

.deck-preview {
  background: #1b2f5c;
  padding: 20px;
  border-radius: 18px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.6);
  transition: 0.3s ease;
}

.deck-preview:hover {
  transform: translateY(-5px);
}

.deck-preview strong {
  font-size: 1.2rem;
  color: #4da6ff;
}

.deck-cards {
  position: relative;
  height: 130px;
  overflow: hidden;
}

.deck-cards li {
  position: absolute;
  top: 0;
  transition: transform 0.3s ease;
}

.deck-cards li:nth-child(1) {
  left: 0;
  z-index: 3;
}

.deck-cards li:nth-child(2) {
  left: 25px;
  z-index: 2;
}

.deck-cards li:nth-child(3) {
  left: 50px;
  z-index: 1;
}

.img-preview {
  width: 70px;
  border-radius: 8px;
  border: 1px solid #4da6ff;
  transition: 0.2s ease;
}

.img-preview:hover {
  transform: scale(1.1);
}

/* ===== RESPONSIVE ===== */

@media (max-width: 768px) {
  .card-img {
    width: 140px;
  }

  h2 {
    font-size: 1.4rem;
  }
}
</style>