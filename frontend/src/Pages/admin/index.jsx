import axios from "axios"
import { useEffect, useState } from "react"
import { User } from "../../components/User"
import { AdminContainer, InfoUserContainer } from "./styles"
import { useParams } from "react-router-dom"

export const Admin = () => {
    const [listUsers, setListUsers] = useState([])
    const {userId} = useParams();
    console.log(userId ? userId : "Não tem usuário.")

    useEffect(() => {
        async function load() {
            try {
                const users = await axios.get("http://localhost:3000/user")
                setListUsers(users.data);
                console.log(users.data)
            } catch (error) {
                console.log(error.response)
            }
        }
        load();
    }, [])
    return(
        <AdminContainer>
            <div className="admin-nav">
                <h2>Usuários Cadastrados</h2>
            </div>
            <InfoUserContainer>
                {listUsers.map((item) => {
                    return <User key={item.id} user={item}/>
                } )}
            </InfoUserContainer>
        </AdminContainer>
    )
}