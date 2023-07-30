import { recipe } from "../mock/recipe"

const Ingredients = () => {
  return (
    <div className="ingridients">
      <h3>Ingredients</h3>
      {recipe.ingredients.map((element, index)=> 
      <p key={index}>{element}</p>)}
    </div>
  )
}

export default Ingredients