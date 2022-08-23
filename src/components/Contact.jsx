const Contact = (props) => {

  return (
    <div>
      <ul>
        <li>{props.name}</li>
        <li>{props.contact.street}</li>
        <li>{props.contact.city}, {props.contact.state} {props.contact.postcode}</li>
        <li>{props.phone}</li>
      </ul>
    </div>
  )
}

export default Contact;