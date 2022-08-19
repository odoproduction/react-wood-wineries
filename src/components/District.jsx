function District(props) {
  // console.log(props)
  let districtColor;
  switch(props.district) {
    case 'Hollywood':
      districtColor = 'red'
      break
    case 'Warehouse':
      districtColor = 'blue'
      break
    default:
      districtColor = 'green'
  }
  console.log(props)
  return (
  <div className='district_color' style={{backgroundColor: districtColor, color: 'black'}}
  >{props.district}
  </div>
  )
};


export default District;