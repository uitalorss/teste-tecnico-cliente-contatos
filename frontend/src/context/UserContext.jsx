/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [createContactErrorMessage, setCreateContactErrorMessage] = useState("");
    const [open, setOpen] = useState(false);


    async function load(userId) {
        try {
            setIsLoading(true)
            const user = await axios.get(`http://localhost:3000/user/${userId}`)
            setUserData(user.data);
            setIsLoading(false)
        } catch (error) {
            console.log(error.response)
        }
    }

    async function createContact(data, userId) {
        const axiosConfig = {
            headers: {
                "Content-Type": "application/json"
            },
        };
        try {
            await axios.post(`http://localhost:3000/user/${userId}/contact`,
            data,
            axiosConfig,
            );
            setCreateContactErrorMessage("");
            alert("Contato adicionado com sucesso.");
            setOpen(false);
            load(userId);
        } catch (error) {
            console.log(error.response)
            setCreateContactErrorMessage(error.response.data.errors[0].message)
        }
    }

    async function deleteContact(userId, contactId){
        const link = `http://localhost:3000/user/${userId}/contact/${contactId}`
        console.log(link)
        try {
            await axios.delete(link)
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
            createContactErrorMessage,
            open,
            setOpen,
            }}>
            {children}
        </UserContext.Provider>
    )
}