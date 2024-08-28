/* eslint-disable react/prop-types */
import * as Dialog from "@radix-ui/react-dialog"
import { Content, Overlay } from "./styles"
import { useForm } from "react-hook-form";
import { DefaultButton, SpanError } from "../../global";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";


export const UpdateContactModal = ({contact}) => {
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);
    const { register, handleSubmit } = useForm();
    const {updateContact, errorMessage} = useContext(UserContext);
    
    const onsubmit = async (data) => {
        data.emails = data.emails.split(",");
        data.phones = data.phones.split(",");
        updateContact(data, contact.id);
    }

    const emailsToUpdate = contact.contactEmails.map((item) => item.email);
    const phonesToUpdate = contact.contactPhones.map((item) => item.phone);

    return(
        <Dialog.Portal>
            <Overlay />
            <Content>
                <div>
                    <h2>Atualizar Contato</h2>
                    <input type="text" placeholder="Nome" {...register("name")} defaultValue={contact.name}/>
                    <input type="text" placeholder="E-mail" {...register("emails")} defaultValue={emailsToUpdate}
                    onFocus={() => setIsEmailFocused(true)}
                    onBlur={() => setIsEmailFocused(false)}/>
                    {isEmailFocused && (
                        <span className="tooltip-text">Caso deseje passar mais de um email, separe-os com vírgulas.</span>
                    )}    
                    <input type="text" placeholder="Telefone" {...register("phones")} defaultValue={phonesToUpdate}
                    onFocus={() => setIsPhoneFocused(true)}
                    onBlur={() => setIsPhoneFocused(false)}/>
                    {isPhoneFocused && (
                        <span className="tooltip-text">Caso deseje passar mais de um telefone, separe-os com vírgulas.</span>
                    )}
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