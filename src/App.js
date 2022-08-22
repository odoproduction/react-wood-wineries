import './App.css'
import wineryArray from './wineries.json'
import Winery from './components/Winery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineGlassEmpty } from '@fortawesome/free-solid-svg-icons'
import { faWineGlass } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  //console.log()
  return (
    <div className="App">
      <h1>Best Woodenville Wineries</h1>
      <h2>by The Emerald Palate</h2>
      <div className="favorite-icon">
        <li>
          <FontAwesomeIcon icon={faWineGlass} size="2x" fade /> = Favorite
          Winery
        </li>
        <li>
          <FontAwesomeIcon icon={faWineGlassEmpty} size="2x" fade /> = Worth
          Checking Out
        </li>
      </div>
      <div className="container">
        {wineryArray.map((winery) => (
          <Winery
            key={winery.id}
            logo={winery.logo_path}
            district={winery.district}
            name={winery.name}
            favorite={winery.favorite}
            location={winery.location}
            phone={winery.phone}
            website={winery.website}
            web_link={winery.web_link}
          />
        ))}
      </div>
    </div>
  )
}

export default App
