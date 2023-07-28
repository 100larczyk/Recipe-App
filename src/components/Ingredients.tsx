import { recipe } from "../mock/recipe"

const Ingredients = () => {
  return (
    <div>
      {recipe.ingredients.map((element, index)=> 
      <p key={index}>{element}</p>)}
    </div>
  )
}

export default Ingredients