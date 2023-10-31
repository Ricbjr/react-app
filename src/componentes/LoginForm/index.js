import { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import './LoginForm.css';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";

const LoginForm = ({}) => {
    const {login} = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        if (!username | !senha)
        {
            setError("Preencha todos os campos");
            return;
        }

        const erroLogin = login(username,senha);

        if(erroLogin)
        {
            setError(erroLogin);
            return;
        }

        navigate("/home");
    }
    return (
        <form className="login-form" onSubmit={aoSubmeter}>
            <Campo
                obrigatorio={true}
                label='Username'
                placeholder='Digite seu username '
                valor={username}
                handleChanged={valor => setUsername(valor)}/>
            <Campo
                obrigatorio={true}
                label='Senha' 
                placeholder='Digite sua senha '
                valor={senha}
                handleChanged={valor => setSenha(valor)}/>
            <Botao texto='Entrar' />
            <h2>{error}</h2>
            <h3>Não tem uma conta?
                <Link to="/signup">&nbsp;Registre-se.</Link>
            </h3>
        </form>
    )
}

export default LoginForm;