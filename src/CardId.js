import React, { Component } from "react";
import { Button,Card, Form } from 'react-bootstrap';


class CardId extends Component{
  constructor(props){
    super(props);
  
  this.state = {
    data: []
  }
  }
  componentDidMount() {
    fetch("https://api.github.com/events")
      .then((response)=>response.json())
        .then(
      (data)=>{
      
      console.log(data)
        this.setState({ data : data})
        
  });
   
  }
  
  render() {
    return(
      //  console.log(this.state.data),
      <div>

<div className='Card'>
{this.state.data.map(dat => (
      <Card style={{ width: '18rem' }}>

  <Card.Body>
    <Card.Title>{dat.id}</Card.Title>
<Card.Text>
<p>{dat.type}</p>
<p>{dat.actor.login}</p>
<p>{dat.actor.avatar_url}</p>

</Card.Text>
    
  </Card.Body>
</Card>
     ))}
   </div> 
      </div>

      

  );

}

}
    


export default CardId;