import './style.css'
import { fetchRechipes } from '../data/fetchRecipes.js'
import { renderRecipeCards } from '../data/renderCards.js'

async function init() {
  const meals = await fetchRechipes('chicken')
  
  if (meals) {
    renderRecipeCards(meals)
  }

}

init()
