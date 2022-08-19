// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineGlassEmpty } from '@fortawesome/free-solid-svg-icons'
import { faWineGlassAlt } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faWineGlassEmpty} />

// ReactDOM.render(element, document.body)

function Favorite(props) {
  let favorite;
  if (props.favorite == 'True') {
    favorite = <FontAwesomeIcon icon={faWineGlassEmpty} />
  } else {
    favorite = <FontAwesomeIcon icon={faWineGlassAlt} />;
  }
  return <div>{props.favorite}</div>;
}

export default Favorite;