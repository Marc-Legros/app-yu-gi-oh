<script setup>
import { store, fetchCards } from '../store/index'
import { ref, computed, onMounted } from 'vue'

const search = ref('')
const startIndex = ref(0)
const cardsPerPage = 12

const specificNames = [
    "Blue-Eyes White Dragon",
    "Dark Magician",
    "Kuriboh",
    "Elemental HERO Neos",
    "Stardust Dragon",
    "Exodia the Forbidden One"
]

const specificCards = computed(() =>
    store.cards.filter(card =>
        specificNames.includes(card.name)
    )
)

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

onMounted(() => {
    fetchCards()
})
</script>

<template>
    <div class="home-page">

        <input v-model="search" type="text" placeholder="Rechercher une carte..." class="search-bar"/>

        <div v-if="search === ''">

            <section class="specific-cards">
                <h2>Cartes Spécifiques</h2>
                <ul class="cards-list">
                    <li v-for="card in specificCards" :key="card.id" class="card-item"><img :src="card.card_images[0].image_url_small" class="card-img"/></li>
                </ul>
            </section>

            <section class="decks-section">
                <h2>Decks</h2>
                <ul class="user-decks">
                    <li v-for="deck in store.deck" :key="deck.name" class="deck-preview">
                        <strong>{{ deck.name }}</strong>
                        <ul class="deck-cards">
                            <li v-for="card in deck.cards.slice(0,3)" :key="card.id"><img :src="card.card_images[0].image_url_small" class="img-preview"/></li>
                        </ul>
                    </li>
                </ul>
            </section>

        </div>

        <div v-else>
            <h2>Résultats pour "{{ search }}"</h2>
            <p v-if="searchResults.length === 0">Aucune carte trouvée</p>
            <ul v-else class="cards-list search-results-list">
                <li v-for="card in paginatedCards" :key="card.id" class="card-item"><img :src="card.card_images[0].image_url_small" class="card-img"/></li>
            </ul>

            <div v-if="searchResults.length > cardsPerPage" class="pagination">
                <button @click="prevPage" :disabled="startIndex === 0">Précédent</button>
                <button @click="nextPage" :disabled="startIndex + cardsPerPage >= searchResults.length">Suivant </button>
            </div>
        </div>
    </div>
</template>

<style>
.home-page {
    width: 100vw; 
    min-height: 100vh;
    padding: 90px 40px 40px; 
    background: linear-gradient(to bottom, #0b1426, #111f3f);
    color: white;
    box-sizing: border-box;
}

h2 {
    margin-bottom: 15px;
    font-size: 1.8rem;
    border-left: 4px solid #4da6ff;
    padding-left: 12px;
}

.search-bar {
    width: 100%;
    padding: 10px 15px;
    margin-bottom: 20px;
    border-radius: 8px;
    border: none;
    font-size: 1rem;
    box-sizing: border-box;
}

.cards-list {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: center;
}

.card-item {
    background: #162b55;
    padding: 10px;
    border-radius: 12px;
    flex: 1 1 180px; 
    max-width: 220px; 
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    transition: 0.3s;
    box-sizing: border-box;
    min-width: 150px;
}

.card-item:hover {
    transform: translateY(-5px);
}

.card-img {
    width: 100%;
    border-radius: 8px;
}

.user-decks {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    list-style: none;
    padding: 0;
    width: 100%;
}

.deck-preview {
    background: #1b2f5c;
    padding: 15px;
    border-radius: 12px;
    width: 100%;
}

.deck-preview strong {
    font-size: 1.1rem;
    color: #4da6ff;
}

.deck-cards {
    display: flex;
    gap: 8px;
    margin-top: 8px;
    flex-wrap: wrap;
}

.img-preview {
    width: 60px;
    border-radius: 6px;
    border: 1px solid #4da6ff;
}

.pagination {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
}

.pagination button {
    padding: 6px 12px;
    background: #4da6ff;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}

.pagination button:disabled {
    background: gray;
    cursor: default;
}
</style>