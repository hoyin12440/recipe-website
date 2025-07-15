export function renderRecipeCards(meals) {
    const container = document.getElementById('recipes-container')
    container.innerHTML = ''

    meals.forEach(meal => {
        const card = document.createElement('div')
        card.classList.add('recipe-card')

        card.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <h3>${meal.strMeal}</h3>
        <p>Area: ${meal.strArea}</p>
        <button>View More</button>
        `

        container.appendChild(card)
    })
}
  