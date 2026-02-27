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

<style scoped>

/* Fond général */
h1 {
  color: #4da6ff;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Liste principale */
ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

/* Bloc deck */
li > strong {
  display: block;
  background-color: #0f1e3d;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #2f5fd0;
  color: #ffffff;
}

/* Cartes dans le deck */
li ul {
  margin-top: 5px;
  padding-left: 15px;
}

li ul li {
  background-color: #162a5c;
  padding: 6px;
  border-radius: 5px;
  color: #cfe2ff;
  font-size: 0.9rem;
}

/* Hover léger */
li ul li:hover {
  background-color: #1f3b85;
  cursor: pointer;
}

</style>