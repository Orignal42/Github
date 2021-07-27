import React, { Component } from "react";
import { Button,Card } from 'react-bootstrap';


class CardId extends Component{
  constructor(props){
    super(props);
  
  this.state = {
    data: []
  }
  }
  componentDidMount() {
    fetch("https://api.github.com/users/Orignal42").then((response)=>response.json()).then(
      (data)=>{
      
        // console.log(data)
        this.setState({ data : data})
        
  });
   
  }
  
  render() {
    return(
      <div>
 <p>{this.state.data.login}</p>
 <p>{this.state.data.public_repos}</p>
      </div>

  );

}

}
    


export default CardId;