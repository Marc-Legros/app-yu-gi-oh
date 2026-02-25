import {reactive, computed} from 'vue'
import axios from 'axios'

export const store = reactive({
    cards: [], 
    loading: false,
    error: null,
})

export async function fetchCards() {
    store.loading=true
    try {
        const response = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
        store.cards = response.data.data
    }catch{
        console.error("Erreur récupération cards :", error);
    }
}