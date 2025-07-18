const container = document.getElementById('favorites-container')
const favorites = JSON.parse(localStorage.getItem('favorites')) || []

if (favorites.length === 0) {
    container.innerHTML = '<p>No favorite recipes yet.</p>'
} else {
    favorites.forEach(meal => {
    const card = document.createElement('div')
    card.classList.add('recipe-card')
    card.innerHTML = `
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
    <h3>${meal.strMeal}</h3>
    <p>${meal.strArea}</p>
    `
    container.appendChild(card)
    })
}