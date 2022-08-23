import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineBottle, faWineGlassEmpty } from '@fortawesome/free-solid-svg-icons'
import { faWineGlass } from '@fortawesome/free-solid-svg-icons'


function Favorite(props) {
  let favorite;
  let iconColor;

  if (props.favorite) {
    favorite = faWineGlass
    iconColor = "#722f37"
  } 
  else {
    favorite = faWineBottle
  }
  // console.log(props)
  
  return <div><FontAwesomeIcon icon={favorite} size = '2x' color={iconColor} border/></div>;
}


export default Favorite;