import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineGlassEmpty } from '@fortawesome/free-solid-svg-icons'
import { faWineGlassAlt } from '@fortawesome/free-solid-svg-icons'


function Favorite(props) {
  let favorite;
  if (props.favorite) {
    favorite = <FontAwesomeIcon icon={faWineGlassEmpty} />
  } 
  else {
    favorite = <FontAwesomeIcon icon={faWineGlassAlt} />;
  }
  console.log(props)
  
  return <div><FontAwesomeIcon icon={favorite}/>TEST</div>;
}

export default Favorite;