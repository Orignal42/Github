import React, { Component } from "react";
import { Button,Card, Form } from 'react-bootstrap';


class Formulaire extends Component{
  constructor(props) {
    super(props);
    this.state = {      
    UserInput:'',
    data:{
      "login": "HamzaKarfa",
      "id": 62702495,
      "node_id": "MDQ6VXNlcjYyNzAyNDk1",
      "avatar_url": "https://avatars.githubusercontent.com/u/62702495?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/HamzaKarfa",
      "html_url": "https://github.com/HamzaKarfa",
      "followers_url": "https://api.github.com/users/HamzaKarfa/followers",
      "following_url": "https://api.github.com/users/HamzaKarfa/following{/other_user}",
      "gists_url": "https://api.github.com/users/HamzaKarfa/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/HamzaKarfa/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/HamzaKarfa/subscriptions",
      "organizations_url": "https://api.github.com/users/HamzaKarfa/orgs",
      "repos_url": "https://api.github.com/users/HamzaKarfa/repos",
      "events_url": "https://api.github.com/users/HamzaKarfa/events{/privacy}",
      "received_events_url": "https://api.github.com/users/HamzaKarfa/received_events",
      "type": "User",
      "site_admin": false,
      "name": null,
      "company": null,
      "blog": "",
      "location": null,
      "email": null,
      "hireable": null,
      "bio": null,
      "twitter_username": null,
      "public_repos": 38,
      "public_gists": 0,
      "followers": 5,
      "following": 1,
      "created_at": "2020-03-26T12:29:02Z",
      "updated_at": "2021-07-29T06:55:25Z"
  }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();

  }

  handleSubmit(event) {
    event.preventDefault();
   this.setState({
     UserInput: this.input.current.value})

  }
  componentDidUpdate() {
    // if (!this.state.data.length) {
      
    //   fetch(`https://api.github.com/users/${this.state.UserInput}`)
    //     .then((response)=>response.json())
    //       .then((data)=>{
    //         console.log(data);
    //         this.setState({ data : data})
    //       });
    //   }
    }
      
  render() {
    return (
      <div>
<div className='Form'>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="" ref={this.input}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
</div>
<div className='Card'>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.state.data.avatar_url} />
  <Card.Body>
    <Card.Title>{this.state.data.login}</Card.Title>
    <Card.Text>
    {this.state.data.public_repos}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
   </div> 
   </div>
   );
    
  }

}
export default Formulaire;

