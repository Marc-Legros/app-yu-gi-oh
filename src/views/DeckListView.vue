<script>
    import { store, fetchCards } from '../store/index'
    import { reactive, ref } from 'vue'
</script>


<template>
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


/* TITRE PRINCIPAL */
h1 {
  color: #4da6ff;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.8rem;
}

/* LISTE PRINCIPALE DES DECKS */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li.deck-item {
  margin-bottom: 20px;
  background: linear-gradient(145deg, #0f1e3d, #162a5c);
  border-radius: 12px;
  border: 2px solid #4da6ff;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

li.deck-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(77, 166, 255, 0.5);
}

/* NOM DU DECK */
li > strong {
  display: block;
  background-color: #1b2f5c;
  padding: 12px 15px;
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid #4da6ff;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
}

/* LISTE DES CARTES */
li ul {
  margin: 0;
  padding: 8px 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  background-color: #111f3f;
  border-radius: 0 0 10px 10px;
}

/* CARTES MINIATURES */
li ul li.card-item {
  flex: 0 0 auto;
  background-color: #162a5c;
  padding: 4px 6px;
  border-radius: 4px;
  color: #cfe2ff;
  font-size: 0.75rem;
  border: 1px solid #4da6ff;
  transition: all 0.3s ease;
  max-width: 100px;
  text-align: center;
}

li ul li.card-item:hover {
  background-color: #1f3b85;
  transform: scale(1.05);
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(77, 166, 255, 0.4);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  li ul {
    flex-direction: column;
  }

  li ul li.card-item {
    width: 100%;
    font-size: 0.8rem;
    padding: 6px 8px;
  }
}
</style>