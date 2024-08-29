/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { ActionsContactContainer, ContactContainer, ItemContactContainer } from "./styles";
import { UserContext } from "../../context/UserContext";
import { AuthContext } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import {XCircle} from "phosphor-react"


export const Contact = ({contact}) => {
    const{ authenticated } = useContext(AuthContext);
    const {deleteContact, updateContact} = useContext(UserContext);
    const [updateMode, setUpdateMode] = useState(false)
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);
    const { register, handleSubmit } = useForm();

    const emailsToUpdate = contact.contactEmails.map((item) => item.email);
    const phonesToUpdate = contact.contactPhones.map((item) => item.phone);

    const onsubmit = async (data) => {
        if(updateMode){
            data.emails = data.emails.split(",");
            data.phones = data.phones.split(",");
            updateContact(data, contact.id);
            console.log("trabalhar aqui.");
            setUpdateMode(false)
        }else{
            setUpdateMode(true)
        }
    }

    return(
        <ContactContainer>
            <ItemContactContainer className={updateMode ? "input" : "data"}>
                <tr>
                    <th>Nome completo</th>
                    {
                        updateMode ? (
                            <td>
                                <input type="text" placeholder="Nome" {...register("name")} defaultValue={contact.name}/>
                            </td>
                        ):(
                            <td className="data">
                                <span>{contact.name}</span>
                            </td>
                        )
                    }
                </tr>
            </ItemContactContainer>
            <ItemContactContainer className={updateMode ? "input" : "data"}>
                <tr>
                    <th>emails</th>
                </tr> 
                    {updateMode ? (
                        <tr>
                            <th></th>
                            <td className="special-input">
                                <input type="text" placeholder="E-mail" {...register("emails")} defaultValue={emailsToUpdate}
                                onFocus={() => setIsEmailFocused(true)}
                                onBlur={() => setIsEmailFocused(false)}/>
                                {isEmailFocused && (
                                <span className="tooltip-text">Caso deseje passar mais de um email, separe-os com vírgulas.</span>
                                )}
                            </td> 
                        </tr>
                    ):(
                        <>
                            {contact.contactEmails.map((email) => {
                            return(
                                <tr key={email.id}>
                                    <th></th>
                                    <td>{email.email}</td>
                                </tr>
                                )   
                            })} 
                        </>
                    )}
            </ItemContactContainer>
            <ItemContactContainer className={updateMode ? "input" : "data"}>
                <tr>
                    <th>Telefones</th>
                </tr>
                    {updateMode ? (
                        <tr>
                            <th></th>
                            <td className="special-input">
                                <input type="text" placeholder="Telefone" {...register("phones")} defaultValue={phonesToUpdate}
                                onFocus={() => setIsPhoneFocused(true)}
                                onBlur={() => setIsPhoneFocused(false)}/>
                                {isPhoneFocused && (
                                    <span className="tooltip-text">Caso deseje passar mais de um telefone, separe-os com vírgulas.</span>
                                )}
                            </td>
                        </tr>
                    ):(
                        <>
                            {contact.contactPhones.map((phone) => {
                            return(
                                <tr key={phone.id}>
                                    <th></th>
                                    <td>{phone.phone}</td>
                                </tr>
                            )
                            })}
                        </>
                    )}
            </ItemContactContainer>
            <ActionsContactContainer className={authenticated ? "active" : "inactive"}>
                <button onClick={() => handleSubmit(onsubmit)()}>
                    <span>Atualizar</span>
                </button>
                <button className={updateMode ? "updateActive" : "updateInactive"} onClick={() => setUpdateMode(false)}>
                    <XCircle size={24}/>
                </button>
                <button className="delete" onClick={() => deleteContact(contact.id)}>
                    <span>Excluir</span>
                </button>
            </ActionsContactContainer>
        </ContactContainer>
    );
}