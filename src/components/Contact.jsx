const Contact = (props) => {

  return (
    <div>
      <li>{props.name}</li>
      <li>{props.location.street}</li>
        <li>{props.location.city}, {props.location.state} {props.location.postcode}</li>
        <li>{props.phone}</li>
    </div>
  )
}

export default Contact;