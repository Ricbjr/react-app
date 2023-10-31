import { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import './SignupForm.css';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";

const SignupForm = ({}) => {
    const {signup} = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [nome,setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [informacao, setInformacao] = useState('')

    const submit = (evento) => {
        evento.preventDefault()
        if (!username | !senha | !nome) 
        {
            setInformacao("Preencha todos os campos");
            return;
        }

        const informacaoSignUp = signup(username,nome,senha);

        if(informacaoSignUp)
        {
            setInformacao(informacaoSignUp);
            return;
        }
        
        alert("Usuário criado com sucesso!")

        navigate("/");
    }
    return (
        <form className="signup-form" onSubmit={submit}>
            <h2>Preencha os dados para criar seu usuário.</h2>
            <Campo
                obrigatorio={true}
                label='Username'
                placeholder='Digite qual será seu username '
                valor={username}
                handleChanged={valor => setUsername(valor)}/>
            <Campo
                obrigatorio={true}
                label='Nome'
                placeholder='Digite seu nome '
                valor={nome}
                handleChanged={valor => setNome(valor)}/>
            <Campo
                obrigatorio={true}
                label='Senha' 
                placeholder='Digite sua senha '
                valor={senha}
                handleChanged={valor => setSenha(valor)}/>
            <h3>{informacao}</h3>
            <Botao texto='Criar Usuário' />
        </form>
    )
}

export default SignupForm;