
function Garage(props) {
    console.log(props)
    return (<h2>I am a: { props.prod.brand } ! color is :{props.prod.color} </h2>);
  }
  


  export default Garage;