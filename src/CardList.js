import React, { Component } from "react";

import { Button,Card, Form } from 'react-bootstrap';
class CardList extends Component{
constructor(props){
  super(props);

this.state = {
  data: []
}
}
componentDidMount() {
  fetch("https://api.github.com/users").then((response)=>response.json()).then(
    (data)=>{
    
      // console.log(data)
      this.setState({ data : data})
      
});
 
}
render() {
  return(
// console.log(this.state.data),
    <div>


<div className='Card'>
{this.state.data.map(dat => (
    <Card style={{ width: '18rem' }}>

<Card.Body>
  <Card.Title>{dat.login}</Card.Title>
<Card.Text>
<Card.Img variant="top" src={dat.avatar_url} />
<p>{dat.type}</p>
<p>{dat.login}</p>

</Card.Text>
  
</Card.Body>
</Card>
   ))}
 </div> 
    </div>

    

);

}

}
  



export default CardList;