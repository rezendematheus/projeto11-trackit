import { useContext } from "react";
import UserContext from "./UserContext";
import styled from "styled-components"



export default function Header(){
    const user = useContext(UserContext)
    return(
        <Content>
            <div>
                <h1>
                    TrackIt
                </h1>
                <img src={user.image} alt="user image" />
            </div>
        </Content>
    )
}

const Content = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    background-color: #126BA5;
    justify-content: center;
    position: fixed;
    top: 0px;
    left: 0px;
    div{
        width: 90%;
        display: flex;
        justify-content: space-between;
        text-align: center;
        h1{
            display: flex;
            font-size: 39px;
            font-family: "Playball", sans-serif;
            color: #FFFFFF;
            justify-content: center;
            align-items: center;
        }
        img{
            width: 51px;
            height: 51px;
            border-radius: 50%;
        }
    }
`