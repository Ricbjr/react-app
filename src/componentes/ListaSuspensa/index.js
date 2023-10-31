import './ListaSuspensa.css'

const ListaSuspensa = ({label, items,  valor, handleChanged, obrigatorio = false}) => {
    return (<div className="lista-suspensa">
        <label>{label}</label>
        <select required={obrigatorio} value={valor} onChange={evento => handleChanged(evento.target.value)}>
            <option />
            {items.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>)
}

export default ListaSuspensa