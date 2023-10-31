import './CampoCor.css'

const CampoCor = (props) => {

    //<input placeholder={props.placeholder}/>

    const handleChanged = (evento) => {
        props.handleChanged(evento.target.value)
    }
    return (
        <div className="campo-cor"> 
            <label>{props.label}</label>
            <input 
                value={props.valor} 
                onChange={handleChanged} 
                type='color' />
        </div>
    )
}

export default CampoCor;