// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineGlassEmpty } from '@fortawesome/free-solid-svg-icons'
import { faWineGlassAlt } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faWineGlassEmpty} />

// ReactDOM.render(element, document.body)

function Favorite(props) {
  let favoriteIcon;
  if (wineries.favorite == 'True') {
    favoriteIcon = <FontAwesomeIcon icon={faWineGlassEmpty} />
  } 
  else {
    favoriteIcon = <FontAwesomeIcon icon={faWineGlassAlt} />;
  }
  console.log(props)
  
  return <div><FontAwesomeIcon icon={favoriteIcon}/>TEST</div>;
}

export default Favorite;