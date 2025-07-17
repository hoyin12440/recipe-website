export function saveToFavorites(meal) {
    const existing = JSON.parse(localStorage.getItem('favorites')) || []
    const exists = existing.find(item => item.idMeal === meal.idMeal)

    if (!exists) {
        existing.push(meal)
        localStorage.setItem('favorites', JSON.stringify(existing))
        alert(`Saved ${meal.strMeal} !`)
    } else {
        alert(`This meal was saved before!`)
    }
}