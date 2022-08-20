const Contact = (props) => {

  console.log(props)
  return (
    <div>
      <li>{props.name}</li>
      <li>{props.contact.street}</li>
        <li>{props.contact.city}, {props.contact.state} {props.contact.postcode}</li>
        <li>{props.phone}</li>
    </div>
  )
}

export default Contact;