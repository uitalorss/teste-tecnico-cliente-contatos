import { useForm } from "react-hook-form"
import { DefaultButton, HomeContainer } from "../../global"
import { FormContainer, FormGroup, SignUpContainer, SpanError } from "./styles"
import axios from "axios";
import { useState } from "react";



export const SignUp = () => {
    const {register, handleSubmit} = useForm();
    const [errorMessage, setErrorMessage] = useState("")

    const onsubmit = async (data) => {
        data.emails = data.emails.split(",");
        data.phones = data.phones.split(",");
        console.log(data)

        const axiosConfig = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        try{
            await axios.post("http://localhost:3000/user",
            data,
            axiosConfig
            );
            setErrorMessage("");
            alert("Usuário cadastrado com sucesso.")
        }catch(error){
            setErrorMessage(error.response.data.message)
            console.log(error.response.data.message)
        }
    }
    return(
        <HomeContainer>
            <SignUpContainer>
                <h2>Cadastro de usuário</h2>

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
                    Cadastrar
                </DefaultButton>
                <SpanError className={errorMessage === "" ? "" : "active"}>
                    {errorMessage}
                </SpanError>
                
            </SignUpContainer>
            
        </HomeContainer>
    )
}