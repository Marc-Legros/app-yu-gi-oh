<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      <img src="./assets/17c4ce6f-e2e9-4397-bb51-4c37ea60f152_removalai_preview.png" alt="" class="logo">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/cards">Cards List</RouterLink>
        <RouterLink to="/cards/id">Cards Details</RouterLink>
        <RouterLink to="/deck">Deck List</RouterLink>
        <RouterLink to="/deck/id">Deck Details</RouterLink>
        <RouterLink to="/create">Create</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  z-index: 1000;
  padding: 0.5rem 2rem;
}

.wrapper {
  display: flex;
  justify-content: center; 
  align-items: center;
  gap: 2rem; 
}

.logo {
  font-weight: bold;
  font-size: 1.5rem;
  width: 100px;
}

nav {
  display: flex;
  justify-content: center; 
  gap: 1.5rem; 
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
