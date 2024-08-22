import { useContext, useEffect } from "react"
import { DefaultButton, MainContainer } from "../../global"
import { Link } from "react-router-dom"
import { User } from "../../components/User"
import { ButtonContainer, DashboardHeaderContainer, HeaderUserDataContainer, UserDataContainer } from "./styles"
import { PlusCircle, SignOut } from "phosphor-react"
import * as Dialog from "@radix-ui/react-dialog"
import { NewContactModal } from "../../components/NewContactModal"
import { UserContext } from "../../context/UserContext"


export const Dashboard = () => {
    const { userData, isLoading, load, open, setOpen, deleteUser } = useContext(UserContext);

    useEffect(() => {
        load();
    }, [])
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
                        <NewContactModal userId={userData.id}/>
                    </Dialog.Root>
                </HeaderUserDataContainer>
                {isLoading ? (
                    <h2>Carregando</h2>
                ):(
                    <User user={userData}/>
                )}
                <ButtonContainer>
                    <DefaultButton >
                        <Link to={`/user/update`}>
                            Alterar dados
                        </Link>
                    </DefaultButton>
                    <DefaultButton className="delete" onClick={() => deleteUser()}>Excluir conta</DefaultButton>
                </ButtonContainer>
            </UserDataContainer>
        </MainContainer>
    )
}