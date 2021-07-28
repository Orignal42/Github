import React, { Component } from "react";
import { Button,Card, Form } from 'react-bootstrap';



class Formulaire extends Component{
    constructor(props){
        super(props);
        this.state={
            userInput:'',
            data:[],
        }
    }


onChange(event){
    this.setState({
        userInput:event.target.value
        });
} 

componentDidMount() {
    fetch(`https://api.github.com/users`).then((response)=>response.json()).then(
      (data)=>{
      
        console.log(data)
        this.setState({ data : data})
        
  });
   
  }



render(){
    return(
        <div>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Search</Form.Label>
    <Form.Control type="text" placeholder="Search" />
    <Form.Text className="text-muted">
    
    </Form.Text>
  </Form.Group>
  <Button   variant="primary" type="submit">
    Submit
  </Button>
</Form>
        
        </div>

    );

}

}
export default Formulaire;