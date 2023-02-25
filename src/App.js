import React from 'react';
import Pokemon from './components/pokemon/pokemon';


function App() {

  
  const [pokemon, setPokemon] = React.useState({});
  function Carregar(){
    fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then((response) => response.json())
    .then((data) => {
    setPokemon(data);
    })
  }
  
  return (

    pokemon.sprites ?
    <div>
      <img src={pokemon.sprites.front_default} />
      
      <div>
        <label>{pokemon.name}</label>
      </div>
      <div>
        <label>{pokemon.abilities[0].ability.name}</label>
      </div>
    </div>
    :
    <div>
      <button onClick={Carregar}>Carregar</button>
    </div>
  );
}



export default App;


