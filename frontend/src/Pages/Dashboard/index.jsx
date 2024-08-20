import { useEffect, useState } from "react"
import { DefaultButton, MainContainer } from "../../global"
import axios from "axios"
import { useParams } from "react-router-dom"
import { User } from "../../components/User"
import { ButtonContainer, DashboardHeaderContainer, UserDataContainer } from "./styles"


export const Dashboard = () => {
    const { userId } = useParams();
    const [userData, setUserData] = useState({})
    const [finishedTimeOut, setFinishedTimeout] = useState(false)
    useEffect(() => {
        async function load(){
            try {
                const user = await axios.get(`http://localhost:3000/user/${userId}`);
                setUserData(user.data);
            } catch (error) {
                console.log(error.response)
            }
        }
        load()
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setFinishedTimeout(true)
        }, 1000)
    })
    return(
        <MainContainer>
            <DashboardHeaderContainer>
                <h2>Bem vindo, {userData.name}</h2>
            </DashboardHeaderContainer>

            <UserDataContainer>
               <h3>Seus dados</h3>
                {finishedTimeOut && <User user={userData}/>}
                <ButtonContainer>
                    <DefaultButton>Alterar dados</DefaultButton>
                    <DefaultButton className="delete">Excluir conta</DefaultButton>
                </ButtonContainer>
            </UserDataContainer>
        </MainContainer>
    )
}