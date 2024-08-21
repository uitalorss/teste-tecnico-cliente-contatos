/* eslint-disable react/prop-types */
import * as Dialog from "@radix-ui/react-dialog"
import { Content, Overlay } from "./styles"
import { useForm } from "react-hook-form";
import { DefaultButton, SpanError } from "../../global";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";


export const NewContactModal = ({userId}) => {
    const { register, handleSubmit } = useForm();
    const {createContact, createContactErrorMessage} = useContext(UserContext) 
    
    const onsubmit = async (data) => {
        data.emails = data.emails.split(",");
        data.phones = data.phones.split(",");
        createContact(data, userId)
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
                    <SpanError className={createContactErrorMessage === "" ? "" : "active"}>
                        {createContactErrorMessage}
                    </SpanError>
                </div> 
            </Content>
        </Dialog.Portal>
    )
}