
import Picture from "./UI/Picture"
import Logo from "./UI/Logo"
import SearchBar from "./UI/SearchBar"
import DescriptionTab from "./components/DescriptionTab"

function App() {
  

  return (
    <div>
      <div className="header">
      <Logo />
      <SearchBar />
      </div>
      <div className="main">
      <Picture />
      <DescriptionTab />
      </div>
    </div>
  )
}

export default App
