import * as Dialog from "@radix-ui/react-dialog"
import { Content, Overlay } from "./styles"
import { useForm } from "react-hook-form";
import { DefaultButton, SpanError } from "../../global";
import { useState } from "react";
import axios from "axios";


export const NewContactModal = ({userId}) => {
    const { register, handleSubmit } = useForm();
    const [errorMessage, setErrorMessage] = useState("")
    
    const onsubmit = async (data) => {
        data.emails = data.emails.split(",");
        data.phones = data.phones.split(",");
        console.log(data)
        const axiosConfig = {
            headers: {
                "Content-Type": "application/json"
            },
        };
        console.log(userId)
        try {
            await axios.post(`http://localhost:3000/user/${userId}/contact`,
            data,
            axiosConfig,
            );
            setErrorMessage("");
            alert("Contato adicionado com sucesso.");
        } catch (error) {
            console.log(error.response)
            setErrorMessage(error.response.data.errors[0].message)
        }
    }
    return(
        <Dialog.Portal>
            <Overlay />
            <Content>
                <div>
                    <h2>Novo Contato</h2>
                    <input type="text" placeholder="Nome" {...register("name")} />
                    <input type="text" placeholder="E-mail" {...register("emails")} />
                    <input type="text" placeholder="Telefone" {...register("phones")} />
                    <DefaultButton onClick={() => handleSubmit(onsubmit)()}>
                        Adicionar
                    </DefaultButton>
                    <SpanError className={errorMessage === "" ? "" : "active"}>
                        {errorMessage}
                    </SpanError>
                </div> 
            </Content>
        </Dialog.Portal>
    )
}