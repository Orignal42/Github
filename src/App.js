import logo from './logo.svg';
import './App.css';
import { Button,Card, Form } from 'react-bootstrap';
import React, {useState,useEffect} from 'react';
import Formulaire from './Formulaire.js'
import CardList from './CardList.js'
import CardId from './CardId';



function App() {
  const[login,setLogin]= useState('');
  const[followers,setFollowers]= useState('');
  const[following,setFollowing]= useState('');
  const[repos,setRepos]= useState('');
  const[avatar,setAvatar]= useState('');
  const[error,setError]= useState(null);

useEffect(()=>{
fetch("https://api.github.com/users/Orignal42")
.then(res=>res.json())
.then(data=>{
  setData(data)
// console.log(data);
});
  },[]);
  const setData=({
   
     login,
     followers,
     following,
     public_repos,
     avatar_url
  }) =>{
setLogin(login);
setFollowers(followers);
setFollowing(following);
setRepos(public_repos);
setAvatar(avatar_url);
  };


  
  return (
 <div>
  {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={avatar} />
  <Card.Body>
    <Card.Title>{login}</Card.Title>
    <Card.Text>
{followers}
{following}
{repos}

    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}

<Formulaire/>
<CardId/>
<CardList/>

 </div>
  );
}

export default App;
