import District from './District'

const Winery = (props) => {
// console.log(props)
  return <div>
    <div className="container">
    <li>
      <img src={props.logo} />
      <District name={props.district} />
      <p>{props.name}</p>
      <p>{props.favorite}</p>
        <li>{props.location.street}</li>
        <li>{props.location.city}, {props.location.state} {props.location.postcode}</li>
        <li>{props.phone}</li>
        <br></br>
      <a href={props.web_link} >{props.website}</a>
    </li>
    </div>
  </div>
}

export default Winery;