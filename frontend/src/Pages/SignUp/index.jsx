import { useForm } from "react-hook-form"
import { DefaultButton, MainContainer, SpanError } from "../../global"
import { ContentContainer, FormContainer, FormGroup, NavContainer, SignUpContainer } from "./styles"
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignIn } from "phosphor-react";
import { UserContext } from "../../context/UserContext";



export const SignUp = () => {
    const {register, handleSubmit} = useForm();
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPhoneFocused, setIsPhoneFocused] = useState(false)
    const {errorMessage, createUser} = useContext(UserContext)
    const navigate = useNavigate();

    const onsubmit = async (data) => {
        data.emails = data.emails.split(",");
        data.phones = data.phones.split(",");
        createUser(data, navigate);
    }

    return(
        <MainContainer>
            <NavContainer>
                <Link to={"/"}>
                    <SignIn size={32}/>
                    <p>Login</p>
                </Link>
            </NavContainer>
            <ContentContainer>
                <SignUpContainer>
                    <h2>Cadastro de usuário</h2>
                    <FormContainer>
                        <FormGroup>
                            <label htmlFor="name">Nome</label>
                            <input type="text" {...register("name")} placeholder="Nome" required />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="username">Usuário</label>
                            <input type="text" {...register("username")} placeholder="Usuário" required/>
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="email">Email</label>
                            <input type="text" {...register("emails")}
                                placeholder="email@email.com"
                                onFocus={() => setIsEmailFocused(true)}
                                onBlur={() => setIsEmailFocused(false)}/>
                            {isEmailFocused && (
                                <span className="tooltip-text">Caso deseje passar mais de um email, separe-os com vírgulas.</span>
                            )}
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="phone">Telefone</label>
                            <input type="text" {...register("phones")} 
                            placeholder="(71)999999999"
                            onFocus={() => setIsPhoneFocused(true)}
                            onBlur={() => setIsPhoneFocused(false)}/>
                            {isPhoneFocused && (
                                <span className="tooltip-text">Caso deseje passar mais de um telefone, separe-os com vírgulas.</span>
                            )}
                        </FormGroup>
                    </FormContainer>

                    <DefaultButton onClick={() => handleSubmit(onsubmit)()} type="submit">
                        Cadastrar
                    </DefaultButton>
                    <SpanError className={errorMessage === "" ? "" : "active"}>
                        {errorMessage}
                    </SpanError>
                    
                </SignUpContainer>
            </ContentContainer>
        </MainContainer>
    )
}