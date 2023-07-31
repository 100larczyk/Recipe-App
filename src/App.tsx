
import Picture from "./UI/Picture"
import Logo from "./UI/Logo"
import SearchBar from "./UI/SearchBar"
import DescriptionTab from "./components/DescriptionTab"
import RecipeSteps from "./components/RecipeSteps"
import Ingredients from "./components/Ingredients"
import RecipeDetails from "./components/RecipeDetails"
import Footer from "./UI/Footer"

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
      <Footer/>
    </div>
    </div>
  )
}

export default App


