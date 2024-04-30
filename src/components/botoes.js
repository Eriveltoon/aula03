function Botoes(props){
    let controle = props.controle;
    return(
        <>
            <div>
                    <button class="btn btn-primary" onClick={controle.Reduzir}>Voltar</button>
                    <button class="btn btn-primary ms-3" onClick={controle.Adicionar}>Próximo</button>
            </div>
        </>
    )
}

export default Botoes;