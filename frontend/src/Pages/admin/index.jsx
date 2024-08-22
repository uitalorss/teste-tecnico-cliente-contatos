import { useContext, useEffect } from "react"
import { User } from "../../components/User"
import { AdminContainer, InfoUserContainer } from "./styles"
import { UserContext } from "../../context/UserContext"

export const Admin = () => {
    const {allUsers, loadAdminData} = useContext(UserContext);

    useEffect(() => {
        loadAdminData();
    }, [])
    return(
        <AdminContainer>
            <div className="admin-nav">
                <h2>Usuários Cadastrados</h2>
            </div>
            <InfoUserContainer>
                {allUsers.map((item) => {
                    return <User key={item.id} user={item}/>
                } )}
            </InfoUserContainer>
        </AdminContainer>
    )
}