import axios from "axios"
import { useEffect, useState } from "react"
import { User } from "../../components/User"
import { InfoUserContainer } from "./styles"
import { NewHomeContainer } from "../../global"

export const Admin = () => {
    const [listUsers, setListUsers] = useState([])

    useEffect(() => {
        async function load() {
            try {
                const users = await axios.get("http://localhost:3000/user")
                setListUsers(users.data);
            } catch (error) {
                console.log(error.response)
            }
        }
        load();
    }, [])
    return(
        <NewHomeContainer>
            <InfoUserContainer>
                {listUsers.map((item) => {
                    return <User key={item.id} user={item}/>
                } )}
            </InfoUserContainer>
        </NewHomeContainer>
    )
}