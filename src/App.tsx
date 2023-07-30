
import Picture from "./UI/Picture"
import Logo from "./UI/Logo"
import SearchBar from "./UI/SearchBar"
import DescriptionTab from "./components/DescriptionTab"
import RecipeSteps from "./components/RecipeSteps"
import Ingredients from "./components/Ingredients"
import RecipeDetails from "./components/RecipeDetails"

function App() {
  

  return (
    <div className="wrapper">
      <div className="main">
        <div className="header">
          <Logo />
          <SearchBar />
        </div>
        <div className="leftSide">
          <div className="row">
            <div className="column descriptionTab">
               <DescriptionTab />
            </div>
            <div className="column">
              <Picture />
            </div>
          </div>
            <div className="row recipeSteps">
               <RecipeSteps />
             </div>
        </div>
      </div>
      <div className="rightSide">
        <div className="details">
          <RecipeDetails />
          <Ingredients />
        </div>
      </div>
    </div>
  )
}

export default App


