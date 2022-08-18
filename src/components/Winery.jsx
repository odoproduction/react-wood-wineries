const Winery = (props) => {
console.log(props)
  return<div className="card">
    <li className="container">
      <img src={props.logo} />
      <p><strong>District: </strong>{props.district}</p>
      <p>{props.name}</p>
      <p>{props.favorite}</p>
      <p>{props.location.city}</p>
      <p>{props.phone}</p>
      <a href={props.web_link} >{props.website}</a>
    </li>
  </div>
}

export default Winery;