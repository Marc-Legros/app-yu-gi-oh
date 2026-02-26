import {reactive, computed} from 'vue'
import axios from 'axios'

export const store = reactive({
    cards: [], 
    deck: [],
    selectedCard: null,
    loading: false,
    error: null,
})

export async function fetchCards() {
    store.loading=true
    try {
        const response = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
        store.cards = response.data.data
    }catch(error){
        console.error("Erreur récupération cards :", error);
    }
}

export async function fetchCardsDetails(id) {
    store.loading=true
    try {
        const response = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
        store.selectedCard= response.data.data[0]
    }catch (error){
        console.error("Erreur récupération cards :", error);
    }
}