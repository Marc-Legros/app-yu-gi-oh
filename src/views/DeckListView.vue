<script>
    import { store, fetchCards } from '../store/index'
    import { reactive, ref } from 'vue'
</script>


<template>
    <h1>Liste des decks</h1>
    <ul>
      <li v-for=" deck in store.deck" :key="deck"><strong>{{ deck.name }}</strong>
        <ul>
            <li v-for="card in deck.cards" :key="card.id">{{ card.name }}
            </li>
        </ul>
        </li>
    </ul>
</template>

<script setup>
console.log('DecksListView Chargés')
</script>