import { Link, useNavigate } from "react-router-dom"
import { DefaultButton, MainContainer, SpanError } from "../../global"
import { LoginContainer } from "./styles"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"
import { useForm } from "react-hook-form"


export const Login = () => {
    const {register, handleSubmit} = useForm();
    const {signIn, errorLoginMessage} = useContext(AuthContext);
    const navigate = useNavigate();

    const onsubmit = async (data) => {
        signIn(data, navigate);
    }

    return(
        <MainContainer>
            <LoginContainer>
                <h2>Acesse suas informações aqui</h2>
                <input type="text" {...register("username")} placeholder="Login"/>
                <DefaultButton onClick={() => handleSubmit(onsubmit)()}>
                    Login
                </DefaultButton>
                <SpanError className={errorLoginMessage === "" ? "" : "active"}>
                    {errorLoginMessage}
                </SpanError>
                <p>Faça o seu cadastro <Link to="/signup">aqui</Link></p>
            </LoginContainer>
        </MainContainer>
       
    )
}