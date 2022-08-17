const Winery = (props) => {

  return<div>
    <li>
      <img src={props.logo_path} />
      <p><strong>District: </strong>{props.district}</p>
      <p>{props.name}</p>
      <p>{props.favorite}</p>
      <p>{props.location}</p>
      <p>{props.phoneNumber}</p>
      <p>{props.website}</p>
    </li>
  </div>
}

export default Winery;