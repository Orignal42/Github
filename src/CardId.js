import React, { Component } from "react";



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
      
        // console.log(data)
        this.setState({ data : data})
        
  });
   
  }
  
  render() {
    return(
      // console.log(this.state.data),
      <div>
 
 <p>{this.state.data.id}</p>
 <p>{this.state.data.type}</p>

 {this.state.data.map(dat => (
              <li key={dat.login}>
                {dat.id}
                {dat.type}
              </li>
            ))}
      </div>

  );

}

}
    


export default CardId;