import Tipo from "./tipo";
import Ability from "./ability";

function PokemonInfo(props){
    let pokemon = props.pokemon;

    return (
        <>
            <div>
                <p>Peso: {pokemon.weight}</p>    
                <p>Altura: {pokemon.height}</p>
                <ul>
                    <li>{ pokemon.types.map(tipo => <Tipo tipo={tipo} />) }</li>
                    <li>{ pokemon.abilities.map(ability => <Ability ability={ability.ability} />) }</li>
                </ul>
            </div>
        </>
    )
}

export default PokemonInfo;