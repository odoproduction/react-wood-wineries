import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineBottle } from '@fortawesome/free-solid-svg-icons'
import { faWineGlass } from '@fortawesome/free-solid-svg-icons'


function Favorite(props) {
  let favorite;
  let iconColor;

  if (props.favorite) {
    favorite = faWineGlass
    iconColor = "#601a32"
  } 
  else {
    favorite = faWineBottle
    iconColor = "#2f391e"
  }
  
  return <div><FontAwesomeIcon icon={favorite} size = '2x' color={iconColor} /></div>;
}

export default Favorite;