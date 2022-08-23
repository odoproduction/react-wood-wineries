import './App.css'
import wineryArray from './wineries.json'
import Winery from './components/Winery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineBottle, faWineGlass } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return (
    <div className="App">
      <span className="titles">
        <h1>Best Woodenville Wineries</h1>
        <h2>by The Emerald Palate</h2>
      </span>
      <div className="favorite-icon">
        <li>
          <FontAwesomeIcon icon={faWineGlass} size="2x" color="#601a32" /> =
          Favorite Winery
        </li>
        <li>
          <FontAwesomeIcon icon={faWineBottle} size="2x" color="#2f391e" /> =
          Worth Checking Out
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
            description={winery.description}
          />
        ))}
      </div>
    </div>
  )
}

export default App
