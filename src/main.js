import './style.css'
import { fetchRecipes } from '../data/fetchRecipes.js'
import { renderRecipeCards } from '../data/renderCards.js'


const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')

searchBtn.addEventListener('click', async () => {
  const query = searchInput.value.trim()

  let meals = ''

  if (query) {
    meals = await fetchRecipes(query)
  }
  if (meals) {
    renderRecipeCards(meals)
  }
})

async function init() {
  const meals = await fetchRecipes('chicken')
  
  if (meals) {
    renderRecipeCards(meals)
  }

}

init()
