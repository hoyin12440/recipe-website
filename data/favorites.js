export function saveToFavorites(meal, button) {
    const existing = JSON.parse(localStorage.getItem('favorites')) || []
    const exists = existing.find(item => item.idMeal === meal.idMeal)

    if (!exists) {
        existing.push(meal)
        localStorage.setItem('favorites', JSON.stringify(existing))
        button.textContent = '✅Saved!'
    } else {
        button.textContent = '✅Saved Before!'
    }
}