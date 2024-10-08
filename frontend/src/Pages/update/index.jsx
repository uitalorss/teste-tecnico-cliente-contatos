import { useForm } from "react-hook-form"
import { DefaultButton, MainContainer, SpanError } from "../../global"
import { ContentContainer, FormContainer, FormGroup, NavContainer, SignUpContainer } from "./styles"
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SignIn } from "phosphor-react";
import { UserContext } from "../../context/UserContext";



export const Update = () => {
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);
    const {register, handleSubmit} = useForm();
    const {errorMessage, updateUser, userData, load} = useContext(UserContext);
    const { userId } = useParams();
    const emailsToUpdate = [];
    const phonesToUpdate = [];

    useEffect(() => {
        load(userId);

    }, [])

    userData.userEmails.map((item) => emailsToUpdate.push(item.email));
    userData.userPhones.map((item) => phonesToUpdate.push(item.phone));

    const onsubmit = async (data) => {
        data.emails = data.emails.split(",");
        data.phones = data.phones.split(",");
        updateUser(data, userId);
    }

    return(
        <MainContainer>
            <NavContainer>
                <Link to={`/user`}>
                    <SignIn size={32}/>
                    <p>Voltar</p>
                </Link>
            </NavContainer>
            <ContentContainer>
                <SignUpContainer>
                    <h2>Atualizar dados</h2>
                    <FormContainer>
                        <FormGroup>
                            <label htmlFor="name">Nome</label>
                            <input type="text" {...register("name")} placeholder="Nome" defaultValue={userData.name} required/>
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="username">Usuário</label>
                            <input type="text" {...register("username")} placeholder="Usuário" defaultValue={userData.userName} required/>
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="email">Email</label>
                            <input type="text" {...register("emails")} placeholder="email@email.com" defaultValue={emailsToUpdate.join(", ")}
                            onFocus={() => setIsEmailFocused(true)}
                            onBlur={() => setIsEmailFocused(false)}/>
                            {isEmailFocused && (
                                <span className="tooltip-text">Caso deseje passar mais de um email, separe-os com vírgulas.</span>
                            )}        
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="phone">Telefone</label>
                            <input type="text" {...register("phones")} placeholder="(71)999999999" defaultValue={phonesToUpdate.join(", ")}
                            onFocus={() => setIsPhoneFocused(true)}
                            onBlur={() => setIsPhoneFocused(false)}/>
                            {isPhoneFocused && (
                                <span className="tooltip-text">Caso deseje passar mais de um telefone, separe-os com vírgulas.</span>
                            )}
                        </FormGroup>
                    </FormContainer>

                    <DefaultButton onClick={() => handleSubmit(onsubmit)()} type="submit">
                        Atualizar
                    </DefaultButton>
                    <SpanError className={errorMessage === "" ? "" : "active"}>
                        {errorMessage}
                    </SpanError>
                    
                </SignUpContainer>
            </ContentContainer>
        </MainContainer>
    )
}