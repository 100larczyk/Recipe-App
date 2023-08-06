import { recipe } from "../../mock/recipe"

const RecipeDetails = () => {
  return (
    <div className="recipeDetails">
      <p>Kalorie: {recipe.calories}</p>
      <p>Czas przygotowania: {recipe.time}</p>
    </div>
  )
}

export default RecipeDetails