import logo from './logo.svg';
import './App.css';
import { Button,Card, Form } from 'react-bootstrap';
import React, {useState,useEffect} from 'react';
import Formulaire from './Formulaire.js'
import CardList from './CardList.js'
import CardId from './CardId';


function App(){

 

  return (
    <div>
         
          

        <Formulaire/>
          <h1>Derniers événements github</h1>
        <CardId/>
        <h1>Liste des user githubs</h1>
        <CardList/>
  
   </div>
    );
  }
  
export default App;


