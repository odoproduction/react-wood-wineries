const Winery = (props) => {
console.log(props)
  return <div>
    <div className="container">
    <li>
      <img src={props.logo} />
      <p><strong>District: </strong>{props.district}</p>
      <p>{props.name}</p>
      <p>{props.favorite}</p>
      <ul>
        <li>{props.location.street}</li>
        <li>{props.location.city}, {props.location.state} {props.location.postcode}</li>
        <li>{props.phone}</li>
      </ul>
      <a href={props.web_link} >{props.website}</a>
    </li>
    </div>
  </div>
}

export default Winery;