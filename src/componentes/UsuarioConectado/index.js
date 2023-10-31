import './UsuarioConectado.css'
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const UsuarioConectado = ({usuarioConectado}) => {
    const {signout} = useAuth();
    const navigate = useNavigate();

    return(
        <div className="usuario-conectado">
            <div className="topo">
                <h2>{usuarioConectado.nome}</h2>
            </div>
            <div className="rodape">
                <button onClick={() => [signout(), navigate("/")]}>Sair</button>
            </div>
        </div>
        
    );
}

export default UsuarioConectado;