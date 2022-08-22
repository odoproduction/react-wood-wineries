function District(props) {

// console.log(props)
  let districtColor;
  switch(props.name) {
    case 'Hollywood':
      districtColor = '#F8B195'
      break
    case 'Warehouse':
      districtColor = '#F67280'
      break
    default:
      districtColor = '#C06C84'
  }
  console.log(props)
  return (
  <div className='district_color' style={{backgroundColor: districtColor, color: 'black'}}
  >{props.name}
  </div>
  )
};


export default District;