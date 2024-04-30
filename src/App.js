import React from 'react';
import Pokedex from './components/pokedex';
import "./App.css"

function App() {

  
  const [pokemon, setPokemon] = React.useState({});
  const [i,setI] = React.useState(1);

  function Carregar(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => response.json())
    .then((data) => {
      setPokemon(data)
    });
  }

  function Adicionar(){
    setI(i + 1);
  }
  
  function Reduzir(){
    if(i > 1){
      setI(i - 1);
    }
  }

  React.useEffect(() => {
    Carregar();
  },[i]);

  React.useEffect(() => {
    Carregar();
  },[]);

  if(pokemon.name){
    return (
      <>
        <div className='container'>
          <Pokedex pokemon={pokemon} controle={{i, Adicionar, Reduzir}}/>
        </div>
      </>
    )
  }
  else{
    return <button onClick={Carregar}>Carregar</button>
  }

  /*
  return (
    pokemon.sprites ?
    <div className='card mx-auto mt-5' style={{height: "500px",width: "370px"}}>
      <div className='bg-dark-subtle' style={{width: "368px"}}>
        <img className='rounded mx-auto d-block' src={pokemon.sprites.front_default} style={{height: "350px",width: "300px"}}/>
      </div>
      <div className='pt-3'>
        <p className='text-center text-uppercase'>{pokemon.name}</p>
      </div>
      <div>
        <p className='text-center text-uppercase'>{pokemon.abilities[0].ability.name}</p>
      </div>
      <div className='mx-auto'>
        <button class="btn btn-primary">Voltar</button>
        <button class="btn btn-primary ms-3">Próximo</button>
      </div>
    </div>
    :
    <div>
      <button onClick={Carregar}>Carregar</button>
    </div>
    
  );
  */
}



export default App;


