export async function fetchRecipes(query) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
    return null;
  }
}

export function saveToFavorites(meal) {
  const existing = JSON.parse(localStorage.getItem('favorites')) || []

  const exists = existing.find(item => item.idMeal === meal.idMeal)
  if (!exists) {
    existing.push(meal)
    localStorage.setItem('favorites', JSON.stringify(existing))
    alert(`已收藏「${meal.strMeal}」！`)
  } else {
    alert('這道料理已經收藏過了～')
  }
}
