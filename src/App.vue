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
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #0f1e3d;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.4);
  z-index: 1000;
}

.wrapper {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

/* ✅ LOGO FIX */
.logo {
  height: 50px;
  width: auto;
  object-fit: contain;
  display: block;
}

nav {
  display: flex;
  gap: 2rem;
}

nav a {
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: 0.2s ease;
}

nav a:hover {
  color: #4da6ff;
}

nav a.router-link-exact-active {
  color: #4da6ff;
  border-bottom: 2px solid #4da6ff;
}

:global(body) {
  margin: 0;
  padding-top: 70px;
}

</style>

