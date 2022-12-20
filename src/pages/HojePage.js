import { useContext } from "react"
import UserContext from "../components/UserContext"


export default function Hoje(){
    const user = useContext(UserContext)
    console.log(user)
    return (
        <>
        
        </>
    )
}