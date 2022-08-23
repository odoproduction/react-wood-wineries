function District(props) {

  let districtColor;
  switch(props.name) {
    case 'Hollywood':
      districtColor = '#6e614c'
      break
    case 'Warehouse':
      districtColor = '#8b8679'
      break
    default:
      districtColor = '#3c1925'
  }
  
  return (
  <div className='district_color' style={{backgroundColor: districtColor, color: '#fff'}}
  >{props.name}
  </div>
  )
};


export default District;