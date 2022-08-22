import District from './District'
import Favorite from './Favorite'
import Contact from './Contact'

const Winery = (props) => {
// console.log(props)
  return <div>
    <div className="container">
    <li>
      <img src={props.logo} alt='logos'/>
      <div><Favorite favorite={props.favorite} /></div>
      <div><Contact 
        name={props.name}
        phone={props.phone}
        contact={props.location}/></div>
        <br></br>
      <a href={props.web_link} >{props.website}</a>
      <div>      
        {props.district.map((district) => (
        <District name={district.name} key={district.id}/>))}</div>
      {/* <div className="district_box"><District district={props.district} /></div> */}
    </li>
    </div>
  </div>
}

export default Winery;