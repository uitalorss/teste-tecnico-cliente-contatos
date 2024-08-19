import { Link } from "react-router-dom"
import { DefaultButton, HomeContainer } from "../../global"
import { LoginContainer } from "./styles"


export const Login = () => {
    return(
        <HomeContainer>
            <LoginContainer>
                <h2>Acesse suas informações aqui</h2>
                <input type="text" placeholder="Login"/>
                <DefaultButton>Login</DefaultButton>
                <p>Faça o seu cadastro <Link to="/signup">aqui</Link></p>
            </LoginContainer>
        </HomeContainer>
       
    )
}