import Botoes from "./botoes";
import Navbar from "./navbar";
import PokemonInfo from "./pokemonInfo";



function Pokedex(props){
    return(
        <>
            <div className="caixa">
                <Navbar pokemon={props.pokemon} controle={props.controle}/>
                <PokemonInfo pokemon={props.pokemon}/>
                <Botoes controle={props.controle}/>
            </div>
        </>
    )
}

export default Pokedex;