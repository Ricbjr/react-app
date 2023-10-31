import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`
    //<input placeholder={props.placeholder}/>

    const handleChanged = (evento) => {
        props.handleChanged(evento.target.value)
    }
    return (
        <div className="campo-texto"> 
            <label>{props.label}</label>
            <input 
                value={props.valor} 
                onChange={handleChanged} 
                required={props.obrigatorio}
                placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto;