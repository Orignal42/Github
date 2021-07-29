import logo from './logo.svg';
import './App.css';
import { Button,Card, Form } from 'react-bootstrap';
import React, {useState,useEffect} from 'react';
import Formulaire from './Formulaire.js'
import CardList from './CardList.js'
import CardId from './CardId';


function App(){

  // const [login,setLogin]=useState('');
  // const [followers,setFollowers]=useState('');
  // const [repos,setRepos]=useState('');
  // const [avatar,setAvatar]=useState('');
  // const [UserInput,setUserInput]=useState('');

  // useEffect(()=> {
  //   fetch("https://api.github.com/users")
  //     .then((res)=>res.json())
  //       .then(data=>{
  //         setData(data)
      
  //       console.log(data)
     
        
  // });
   
  // },[]);
  // const setData = ({
  //   login, 
  //   followers,
  //    avatar_url ,
  //     public_repos
  //   })=>{
  // setLogin (login);
  // setFollowers(followers);
  // setRepos (public_repos);
  // setAvatar(avatar_url);
  
  // };

  // const handleSearch= e => {
  //   setUserInput(e.target.value);
  // }

  // const handleSubmit=()=>{
  //   fetch(`https://api.github.com/users/${UserInput}`)
  //   .then((res)=>res.json())
  //       .then(data=>{
  //         setData(data);


  //       });
  //     }

  return (
    <div>
         
          

        <Formulaire/>
          {/* <h1>Derniers événements github</h1> */}
        {/* <CardId/>
        <h1>Liste des user githubs</h1>
        <CardList/> */}
  
   </div>
    );
  }
  
export default App;


