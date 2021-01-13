import React, { useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [pokemon, setPokemon] = useState([]);

  const getPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        setPokemon(response.data.results);
        // console.log(response);
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
