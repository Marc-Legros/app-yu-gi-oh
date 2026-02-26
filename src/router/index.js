import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardsListView from '@/views/CardsListView.vue'
import CardsDetailsView from '@/views/CardsDetailsView.vue'
import DeckListView from '@/views/DeckListView.vue'
import DeckDetailsView from '@/views/DeckDetailsView.vue'
import CreateDeckView from '@/views/CreateDeckView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cards',
      name: 'CardsList',
      component: CardsListView,
    },
    {
      path: '/cards/id',
      name: 'CardsDetail',
      component: CardsDetailsView,
    },
    {
      path: '/deck',
      name: 'DeckList',
      component: DeckListView,
    },
    {
      path: '/deck/id',
      name: 'DeckDetails',
      component: DeckDetailsView,
    },
      {
      path: '/create',
      name: 'CreateDeck',
      component: CreateDeckView,
    }
  ],
})

export default router
