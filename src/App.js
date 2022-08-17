import './App.css'
import wineryArray from './wineries.json'
import Winery from './components/Winery'

const App = () => {
  console.log()
  return
  ;<div>
    <h1>Best Woodenville Wineries</h1>
    <h2>by The Emerald Palate</h2>
    {wineryArray.map((winery) => (
      <Winery
        key={winery.location.street}
        logo={winery.logo_path}
        district={winery.district}
        name={winery.name}
        favorite={winery.favorite}
        location={winery.location}
        phoneNumber={winery.phone}
        website={winery.website}
      />
    ))}
  </div>
}

export default App
