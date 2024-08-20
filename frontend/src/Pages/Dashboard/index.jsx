import { useEffect, useState } from "react"
import { DefaultButton, MainContainer } from "../../global"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { User } from "../../components/User"
import { ButtonContainer, DashboardHeaderContainer, HeaderUserDataContainer, UserDataContainer } from "./styles"
import { PlusCircle, SignOut } from "phosphor-react"
import * as Dialog from "@radix-ui/react-dialog"
import { NewContactModal } from "../../components/NewContactModal"


export const Dashboard = () => {
    const { userId } = useParams();
    const [userData, setUserData] = useState({})
    const [finishedTimeOut, setFinishedTimeout] = useState(false)
    const [open, setOpen_] = useState(false);
    function setOpen(data){
        console.log(data)
        setOpen_(data);
    }
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
        }, 500)
    })
    return(
        <MainContainer>
            <DashboardHeaderContainer>
                <h2>Bem vindo, {userData.name}</h2>
                <Link to={"/"}>
                    <SignOut size={32}/>
                    <p>Sair</p>
                </Link>
            </DashboardHeaderContainer>
            <UserDataContainer>
                <HeaderUserDataContainer>
                    <h3>Seus dados</h3>
                    <Dialog.Root open={open} onOpenChange={setOpen}>
                        <Dialog.Trigger asChild>
                            <button>
                                <PlusCircle size={16} />
                                <span>Contato</span>
                            </button>
                        </Dialog.Trigger>
                        <NewContactModal />
                    </Dialog.Root>
                </HeaderUserDataContainer>
                {finishedTimeOut && <User user={userData}/>}
                <ButtonContainer>
                    <DefaultButton>Alterar dados</DefaultButton>
                    <DefaultButton className="delete">Excluir conta</DefaultButton>
                </ButtonContainer>
            </UserDataContainer>
        </MainContainer>
    )
}