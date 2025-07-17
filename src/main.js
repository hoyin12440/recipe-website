import './style.css'
import { fetchRecipes } from '../data/fetchRecipes.js'
import { renderRecipeCards } from '../data/renderCards.js'
import { saveToFavorites } from '../data/favorites.js'


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
  } else {
    document.getElementById('recipes-container').innerHTML = 'No recipes found.'
  }
})

async function init() {
  const meals = await fetchRecipes('chicken')
  console.log("現在 meals 是什麼？", meals)
  
  if (meals) {
    renderRecipeCards(meals)
  }

}

init()
