/* eslint-disable react/prop-types */
import * as Dialog from "@radix-ui/react-dialog"
import { Content, Overlay } from "./styles"
import { useForm } from "react-hook-form";
import { DefaultButton, SpanError } from "../../global";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useParams } from "react-router-dom";


export const UpdateContactModal = ({contact}) => {
    const {userId} = useParams();
    const { register, handleSubmit, setValue } = useForm();
    const {updateContact, errorMessage} = useContext(UserContext);
    console.log(contact)
    const emailsToUpdate = contact.contactEmails.map((item) => item.email);
    const phonesToUpdate = contact.contactPhones.map((item) => item.phone);
    
    setValue("name", contact.name);
    setValue("emails", emailsToUpdate.join(", "));
    setValue("phones", phonesToUpdate.join(", "))
    
    const onsubmit = async (data) => {
        data.emails = data.emails.split(",");
        data.phones = data.phones.split(",");
        updateContact(data, userId, contact.id);
    }

    return(
        <Dialog.Portal>
            <Overlay />
            <Content>
                <div>
                    <h2>Atualizar Contato</h2>
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