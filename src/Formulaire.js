import React, { Component } from "react";
import { Button,Card, Form } from 'react-bootstrap';


class Formulaire extends Component{
  constructor(props) {
    super(props);
    this.state = {      
      UserInput:'',
      Rez:'',
      data:[],
      error:null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.input = React.createRef();

  }

  handleSearch(event) {
    event.preventDefault();
    this.setState({
      UserInput: event.target.value
    })
    console.log( this.state.UserInput)
   




  }
  handleSubmit(event) {
    event.preventDefault()


 
      
      fetch(`https://api.github.com/users/${this.state.UserInput}`)

   
        .then((response)=>{
          console.log(response);
          if (response.ok) {
            response.json()    
              .then((data)=>{
              console.log(data);
             this.setState({ data : data})  
            
              
             })  
          }else{
            new Error(response.status)
this.setState({error: 'fefezfzefzefzef'})
          }
        })          
     
    
      
      
    }
      
  render() {
    console.log(this.state.error);
    if (this.state.error != null) {
      return(<h1>Erreur</h1>)
    }else{

      return (
        <>
          <div className="Form">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={this.handleSearch}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <div className="Card">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={this.state.data.avatar_url} />
              <Card.Body>
                <Card.Title>{this.state.data.login}</Card.Title>
                <Card.Text>
                  <p>Nombre de repos</p>
                  {this.state.data.public_repos}
                  <p>Nombre de followers</p>
                  {this.state.data.followers}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </>
      );
    }
    
  }

}
export default Formulaire;

