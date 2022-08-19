import District from './District'
import Favorite from './Favorite'

const Winery = (props) => {
// console.log(props)
  return <div>
    <div className="container">
    <li>
      <img src={props.logo} alt='logos'/>
      <p>{props.name}</p>
      <div><Favorite favorite={props.favorite} /></div>
        <li>{props.location.street}</li>
        <li>{props.location.city}, {props.location.state} {props.location.postcode}</li>
        <li>{props.phone}</li>
        <br></br>
      <a href={props.web_link} >{props.website}</a>
      <div className="district_box"><District district={props.district} /></div>
    </li>
    </div>
  </div>
}

export default Winery;