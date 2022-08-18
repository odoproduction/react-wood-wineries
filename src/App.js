import './App.css'
import wineryArray from './wineries.json'
import Winery from './components/Winery'

const App = () => {
  //console.log()
  return (
    <div className="App">
      <h1>Best Woodenville Wineries</h1>
      <h2>by The Emerald Palate</h2>
      <div>
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
