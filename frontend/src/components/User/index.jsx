import { Contact } from "../contacts";
import { ItemUserContainer, UserContainer } from "./styles";


export const User = ({user}) => {
    console.log(user)
    return(
        <UserContainer>
            <ItemUserContainer>
                <tr>
                    <th>Nome completo</th>
                    <td>{user.name}</td>
                </tr>
            </ItemUserContainer>
            <ItemUserContainer>
                <tr>
                    <th>Usuário</th>
                    <td>{user.userName}</td>
                </tr>
            </ItemUserContainer>
            <ItemUserContainer>
                <tr>
                    <th>emails</th>
                </tr> 
                    {user.userEmails.map((email) => {
                    return(
                        <tr key={email.id}>
                            <th></th>
                            <td >{email.email}</td>
                        </tr>
                    )
                })}                
            </ItemUserContainer>
            <ItemUserContainer>
                <tr>
                    <th>Telefones</th>
                </tr>
                {user.userPhones.map((phone) => {
                return(
                    <tr key={phone.id}>
                        <th></th>
                        <td>{phone.phone}</td>
                    </tr>
                )
            })}
            </ItemUserContainer>
            <ItemUserContainer>
                <tr>
                    <th>Contatos</th>
                </tr>
                <tr className="contact-item">
                    {user.contacts.map((contact) => {
                    return(
                        <Contact key={contact.id} contact={contact}/>
                    )
                })}</tr>
            </ItemUserContainer>

        </UserContainer>
    );
}