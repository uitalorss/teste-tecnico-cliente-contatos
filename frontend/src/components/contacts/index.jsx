/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ActionsContactContainer, ContactContainer, ItemContactContainer } from "./styles";
import { UserContext } from "../../context/UserContext";
import { useParams } from "react-router-dom";


export const Contact = ({contact}) => {
    const{ userId } = useParams()
    const {deleteContact} = useContext(UserContext);
    console.log(contact);
    return(
        <ContactContainer>
            <ItemContactContainer>
                <tr>
                    <th>Nome completo</th>
                    <td>{contact.name}</td>
                </tr>
            </ItemContactContainer>
            <ItemContactContainer>
                <tr>
                    <th>emails</th>
                </tr> 
                    {contact.contactEmails.map((email) => {
                    return(
                        <tr key={email.id}>
                            <th></th>
                            <td >{email.email}</td>
                        </tr>
                    )
                })}                
            </ItemContactContainer>
            <ItemContactContainer>
                <tr>
                    <th>Telefones</th>
                </tr>
                {contact.contactPhones.map((phone) => {
                return(
                    <tr key={phone.id}>
                        <th></th>
                        <td>{phone.phone}</td>
                    </tr>
                )
            })}
            </ItemContactContainer>
            <ActionsContactContainer>
                <button>
                        <span>Atualizar</span>
                </button>
                <button className="delete" onClick={() => deleteContact(userId, contact.id)}>
                    <span>Excluir</span>
                </button>
            </ActionsContactContainer>
        </ContactContainer>
    );
}