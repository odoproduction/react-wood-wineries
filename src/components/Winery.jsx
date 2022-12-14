import District from './District'
import Favorite from './Favorite'
import Contact from './Contact'

const Winery = (props) => {

  return <div>
    <div className="card">
      <div className="card-inner">
        <p className="text">{props.description}</p>
      </div>
    <li>
      <div className="img-container"><img src={props.logo} alt='logos'/></div>
      <div className="fav-icon"><Favorite favorite={props.favorite} /></div>
      <div><Contact 
        name={props.name}
        phone={props.phone}
        contact={props.location}/></div>
      <a href={props.web_link} >{props.website}</a>
      <p className="district-title">Tasting Room Locations:</p>
      <div className='district-list'>     
        {props.district.map((district) => (
        <District name={district.name} key={district.id}/>))}</div>
    </li>
    </div>
  </div>
}

export default Winery;