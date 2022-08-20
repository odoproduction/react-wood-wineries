import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineGlassEmpty } from '@fortawesome/free-solid-svg-icons'
import { faWineGlass } from '@fortawesome/free-solid-svg-icons'


function Favorite(props) {
  let favorite;
  if (props.favorite) {
    favorite = faWineGlassEmpty 
  } 
  else {
    favorite = faWineGlass
  }
  console.log(props)
  
  return <div><FontAwesomeIcon icon={favorite}/></div>;
}

export default Favorite;