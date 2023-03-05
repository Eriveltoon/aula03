import Tipo from "./tipo";
import Ability from "./ability";

function PokemonInfo(props){
    let pokemon = props.pokemon;

    return (
        <>
            <div className='pt-3'>
                <p className='text-center text-uppercase'>Peso: {pokemon.weight}</p>    
            </div>
            

            <div className='pt-3'>
                <p className='text-center text-uppercase'>Altura: {pokemon.height}</p>
            </div>

            <div className='d-flex justify-content-center'>
                <ul>
                    { pokemon.types.map(tipo => <Tipo tipo={tipo} />) }
                </ul>
            </div>

            <div className='d-flex justify-content-center'>
                <ul>
                    { pokemon.abilities.map(ability => <Ability ability={ability.ability} />) }
                </ul>
            </div>
        </>
    )
}

export default PokemonInfo;