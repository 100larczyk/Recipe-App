
import Picture from "./UI/Picture"
import Logo from "./UI/Logo"
import SearchBar from "./UI/SearchBar"
import DescriptionTab from "./Components/Recipe/DescriptionTab"
import RecipeSteps from "./Components/Recipe/RecipeSteps"
import Ingredients from "./Components/Recipe/Ingredients"
import RecipeDetails from "./Components/Recipe/RecipeDetails"

function App() {
  

  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="header">
            <Logo />
            <SearchBar />
          </div>
            <div className="row">
              <div className="column descriptionTab">
                <DescriptionTab />
              </div>
              <div className="column pictureDiv">
                <Picture />
              </div>
            </div>
              <div className="row recipeSteps">
                <RecipeSteps />
              </div>
        </div>
          <div className="details">
            <RecipeDetails />
            <Ingredients />
          </div>
      </div>
    </div>
  )
}

export default App


