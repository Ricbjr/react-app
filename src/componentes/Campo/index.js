import './Campo.css'

const Campo = ({ type = 'text', label, placeholder, valor, handleChanged, obrigatorio = false }) => {
    return (<div className={`campo campo-${type}`}>
        <label>{label}</label>
        <input type={type} value={valor} onChange={evento => handleChanged(evento.target.value)} required={obrigatorio} placeholder={placeholder}/> 
    </div>)
}

export default Campo