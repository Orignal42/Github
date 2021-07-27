import React, { Component } from "react";
import { Button,Card } from 'react-bootstrap';

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
    render(){

     
        return (
          console.log(this.state.data),
          <ul>
          
          <p>{this.state.data.login}</p>
          
            {this.state.data.map(dat => (
              <li key={dat.login}>
                {dat.login}
              </li>
            ))}
          </ul>
        );
    
    
    
    }

}



export default CardList;