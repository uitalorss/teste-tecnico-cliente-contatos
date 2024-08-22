/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [authenticated, setAuthenticated] = useState(true);
    const [errorLoginMessage, setErrorLoginMessage] = useState("");

    const baseURL = "http://localhost:3000"
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    useEffect(() => {
        if(token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            localStorage.setItem("token", token)
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem("token");
        }
    }, [token]);

    async function signIn(data, navigate){
        try {
            const loginData = await axios.post(`${baseURL}/login`,data, axiosConfig);
            setToken(loginData.data.token);
            navigate("/user")
        } catch (error) {
            if(error.response.status === 404){
                setErrorLoginMessage(error.response.data.message)
            }
            setErrorLoginMessage(error.response.data.errors[0].message);
        }
    }

    async function SignOutUser() {
        alert("Usuário desconectado");
        setToken("");
        setAuthenticated(false);
    }

    return(
        <AuthContext.Provider value={{
            token,
            setToken,
            authenticated,
            setAuthenticated,
            signIn,
            errorLoginMessage,
            SignOutUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}