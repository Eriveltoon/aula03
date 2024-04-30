
function Navbar(props){
    let controle = props.controle;
    let pokemon = props.pokemon;

    return (
        <>
            <div>
                <div>
                    <img className="mx-auto d-block" style={{height: "150px",width: "150px"}} src={pokemon.sprites.front_default}/>
                </div>
                <p>{pokemon.name}</p>
                <p>{pokemon.abilities[0].ability.name}</p>
            </div>
        </>
    )
}

export default Navbar;