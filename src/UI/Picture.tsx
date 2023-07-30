
import { recipe } from "../mock/recipe"
const Picture = () => {
  return (
    <img className="picture" src={recipe.photo} alt={recipe.title} />
    )
}

export default Picture