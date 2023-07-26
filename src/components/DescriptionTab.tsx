import { recipe } from "../mock/recipe"


const DescriptionTab = () => {
  
  return (
    <div>
      <h1>{recipe.title}</h1>
      <h3>Botwinka to zupa. Jaka jest każdy widzi. Raz lepsza, raz gorsza</h3>
      {recipe.tag.map((element, index) => (
        <p className="tagParagraph" key={index}>{element}</p>
      ))}

    </div>
  )
}

export default DescriptionTab