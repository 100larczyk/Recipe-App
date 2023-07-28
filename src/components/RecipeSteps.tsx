import { recipe } from "../mock/recipe"

const RecipeSteps = () => {
  return (
    <div>
      <h2> Przygotowanie</h2>
      {recipe.steps.map((element, index) => 
      <div className="stepIndex" key={index}> <h4> KROK {index + 1}</h4> 
      <p className="step" key={index}>{element}</p>
      </div>)}
    </div>
  )
}

export default RecipeSteps