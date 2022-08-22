import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineGlassEmpty } from '@fortawesome/free-solid-svg-icons'
import { faWineGlass } from '@fortawesome/free-solid-svg-icons'


function Favorite(props) {
  let favorite;
  if (props.favorite) {
    favorite = faWineGlass 
  } 
  else {
    favorite = faWineGlassEmpty
  }
  console.log(props)
  
  return <div><FontAwesomeIcon icon={favorite} size = '2x' border/></div>;
}

export default Favorite;