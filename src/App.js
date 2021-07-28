import logo from './logo.svg';
import './App.css';
import { Button,Card, Form } from 'react-bootstrap';
import React, {useState,useEffect} from 'react';
import Formulaire from './Formulaire.js'
import CardList from './CardList.js'
import CardId from './CardId';




const MOVIE_API_URL = "https://api.github.com/users"; // you should replace this with yours


const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

    const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
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

  {/* <h1>Derniers événements github</h1>
<CardId/>
<h1>Liste des user githubs</h1>
<CardList/> */}

 </div>
  );
}

export default App;
