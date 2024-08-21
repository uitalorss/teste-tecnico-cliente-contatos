import { useForm } from "react-hook-form"
import { DefaultButton, MainContainer, SpanError } from "../../global"
import { ContentContainer, FormContainer, FormGroup, NavContainer, SignUpContainer } from "./styles"
import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SignIn } from "phosphor-react";
import { UserContext } from "../../context/UserContext";



export const Update = () => {
    const {register, handleSubmit, setValue} = useForm();
    const {errorMessage, updateUser, userData, load} = useContext(UserContext)
    const { userId } = useParams();
    const emailsToUpdate = [];
    const phonesToUpdate = [];

    useEffect(() => {
        load(userId);

    }, [])
    setTimeout(() => {
        userData.userEmails.map((item) => emailsToUpdate.push(item.email));
        userData.userPhones.map((item) => phonesToUpdate.push(item.phone));
        setValue("name", userData.name);
        setValue("username", userData.userName);
        setValue("emails", emailsToUpdate.join(", "));
        setValue("phones", phonesToUpdate.join(", "))
    }, 1000)

    const onsubmit = async (data) => {
        data.emails = data.emails.split(",");
        data.phones = data.phones.split(",");
        updateUser(data, userId);
    }

    return(
        <MainContainer>
            <NavContainer>
                <Link to={`/user/${userId}`}>
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
                            <input type="text" {...register("name")} placeholder="Nome" required/>
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="username">Usuário</label>
                            <input type="text" {...register("username")} placeholder="Usuário" required/>
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="email">Email</label>
                            <input type="text" {...register("emails")} placeholder="email@email.com"/>
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="phone">Telefone</label>
                            <input type="text" {...register("phones")} placeholder="71999999999"/>
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