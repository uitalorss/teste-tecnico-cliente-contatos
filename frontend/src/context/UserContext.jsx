/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [open, setOpen] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false)

    const baseURL = "http://localhost:3000"
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    async function load(userId) {
        try {
            setIsLoading(true)
            const user = await axios.get(`${baseURL}/user/${userId}`)
            setUserData(user.data);
            setIsLoading(false)
        } catch (error) {
            console.log(error.response)
        }
    }

    async function createUser(data, navigate){
        try{
            await axios.post("http://localhost:3000/user",
            data,
            axiosConfig
            );
            setErrorMessage("");
            alert("Usuário cadastrado com sucesso.");
            navigate("/")
        }catch(error){
            setErrorMessage(error.response.data.errors[0].message)
            console.log(error.response.data.errors[0].message)
        }
    }

    async function updateUser(data, userId){
        try {
            await axios.put(`${baseURL}/user/${userId}`, data, axiosConfig);
            setErrorMessage("");
            alert("Usuário atualizado com sucesso.")
        } catch (error) {
            setErrorMessage(error.response.data.errors[0].message)
            console.log(error.response.data.errors[0].message)
        }
    }

    async function deleteUser(userId) {
        try {
            alert("Tem certeza que deseja excluir conta?")
            await axios.delete(`${baseURL}/user/${userId}`)
            alert("Usuário excluído com sucesso.");
            load(userId)
        } catch (error) {
            alert(error.message)
        }
    }

    async function createContact(data, userId) {
        try {
            await axios.post(`${baseURL}/user/${userId}/contact`,
            data,
            axiosConfig,
            );
            setErrorMessage("");
            alert("Contato adicionado com sucesso.");
            setOpen(false);
            load(userId);
        } catch (error) {
            console.log(error.response)
            setErrorMessage(error.response.data.errors[0].message)
        }
    }

    async function updateContact(data, userId, contactId) {
        try {
            await axios.put(`${baseURL}/user/${userId}/contact/${contactId}`,data,axiosConfig);
            alert("Contato atualizado com sucesso.");
            load(userId);
            setOpenUpdateModal(false);
        } catch (error) {
            console.log(error.response)
            setErrorMessage(error.response)
        }
    }

    async function deleteContact(userId, contactId){
        try {
            await axios.delete(`http://localhost:3000/user/${userId}/contact/${contactId}`)
            load(userId);
        } catch (error) {
            alert(error.message)
        }
    }

    return(
        <UserContext.Provider value={{
            userData,
            isLoading,
            deleteContact,
            load,
            createContact,
            errorMessage,
            open,
            setOpen,
            deleteUser,
            createUser,
            updateUser,
            openUpdateModal,
            setOpenUpdateModal,
            updateContact
            }}>
            {children}
        </UserContext.Provider>
    )
}