<script setup>
import { store } from '../store/index'


const decks = store.deck
</script>

<template>
  <div>
    <h1>Decks</h1>

    <div v-for="deck in decks" :key="deck.name" style="margin-bottom:20px; border:1px solid #4da6ff; padding:10px; border-radius:8px; background:#0f1e3d;">
      <h2 style="color:#4da6ff;">{{ deck.name }}</h2>

      <p>
        Monstres: {{ deck.cards.filter(c => c.type?.toLowerCase().includes('monster')).length }},
        Magies: {{ deck.cards.filter(c => c.type?.toLowerCase().includes('spell')).length }},
        Pièges: {{ deck.cards.filter(c => c.type?.toLowerCase().includes('trap')).length }}
      </p>

      <div style="display:flex; flex-wrap:wrap; gap:4px;">
        <div v-for="card in deck.cards" :key="card.id" style="width:50px; text-align:center; background:#162a5c; color:#cfe2ff; border:1px solid #4da6ff; border-radius:4px; font-size:0.6rem; padding:2px;">
          <img :src="card.card_images?.[0]?.image_url_small" style="width:40px; height:auto; display:block; margin:auto 0;">
          {{ card.name }}
        </div>
      </div>
    </div>
  </div>
</template>