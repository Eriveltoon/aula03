import Imagem from "./imagem";


function Pokemon(props){
    return(
        <div>
            <div>
                <Imagem pokemon={props.sprites.front_default}/>
            </div>
        </div>
    );
}

export default Pokemon;