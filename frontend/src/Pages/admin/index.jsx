import axios from "axios"
import { useEffect, useState } from "react"
import { User } from "../../components/User"
import { AdminContainer, InfoUserContainer } from "./styles"

export const Admin = () => {
    const [listUsers, setListUsers] = useState([])

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