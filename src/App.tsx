
import Picture from "./UI/Picture"
import Logo from "./UI/Logo"
import SearchBar from "./UI/SearchBar"
import DescriptionTab from "./components/DescriptionTab"
import RecipeSteps from "./components/RecipeSteps"
import Ingredients from "./components/Ingredients"

function App() {
  

  return (
    <div>
      <div className="header">
        <Logo />
        <SearchBar />
      </div>
      <div className="main">
        <div className="leftSide">
          <div className="row">
            <div className="column">
               <DescriptionTab />
            </div>
            <div className="column">
              <Picture />
            </div>
          </div>
            <div className="row">
               <RecipeSteps />
             </div>
        </div>
          <div className="rightSide">
            <Ingredients />
          </div>
      </div>
    </div>
  )
}

export default App


