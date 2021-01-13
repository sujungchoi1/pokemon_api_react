import React, { useState } from 'react';
import './App.css';


function App() {

  const [pokemon, setPokemon] = useState([]);

  const getPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
          .then(response => {
            console.log('first res=>', response);
            return response.json()
          })
          .then(response => { setPokemon(response.results)
          // .catch(err=>console.log(err));
        });
  };


  return (
    <div className="App">
      <h1>Pokemon API</h1>  
      
      <button onClick={getPokemon}>Fetch Pokemon</button>
      
      <div className="list">
        {pokemon.map((poke, index) => {
          return (<li poke={poke} key={index} > {poke.name} </li>)
        })}
      </div>
      
    </div>
  );
}

export default App;
