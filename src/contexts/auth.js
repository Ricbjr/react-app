import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const backendUrl = "http://testeTrade:5000"
    const [user, setUser] = useState({
        username:null,
        nome:null,
        senha:null,
        id:null
    });

    useEffect(() => {
        
    },[]);

    const login = async (username,senha) => {

        try{
            const response = await axios.get('${backendUrl}/api/usuario', username);

            const hasUser = JSON.parse(response.data);

            if(hasUser?.length)
            {
                if(hasUser.username === username && hasUser.senha === senha)
                {
                    setUser({
                        username:hasUser.username,
                        nome:hasUser.nome, 
                        senha:hasUser.senha,
                        id:hasUser.id
                    });
                    return;
                }else{
                    return "Username ou senha incorretos";
                }
            }else{
                return "Usuário não cadastrado";
            }
        }catch(error){
            return error;
        }
        
    };

    const signup = async (username,nome,senha) => {
        try{

            const response = await axios.get('${backendUrl}/api/usuario', username);
            const hasUser = response.data;
    
            if(hasUser?.length)
            {
                return "Já existe um usuário com este username"
            }

            const novoUsuario = {
                username: username,
                nome: nome,
                senha: senha
            }

            axios.post('${backendUrl}/api/cadastrarusuario', novoUsuario)
                 .then(response => {
                    console.log();
                 })

        }catch (error){
            return error;
        }
        
    };

    const signout = () => {
        setUser({
            username:null,
            nome:null,
            senha:null,
            id:null
        });
    }

    return <AuthContext.Provider
                value={{user,signed: !!user,login,signup,signout}}>
                {children}
           </AuthContext.Provider>
};