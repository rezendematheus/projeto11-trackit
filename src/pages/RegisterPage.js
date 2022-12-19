import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/logo.PNG"


export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setUsername] = useState("")
    const [image, setImage] = useState("")
    function regist(e){
        e.preventDefault()
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {email, password, name, image})
        .then(alert("Cadastro realizado!"))
        .catch(err => console.log(err.response.data))
        setEmail("")
        setPassword("")
        setUsername("")
        setImage("")
    }
    return (
        <Content>
            <div>
                <img src={logo} alt="imagem logo" />
                <h1>TrackIt</h1>
            </div>

            <form onSubmit={(e) => regist(e)}>
                <input required type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input required type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input required type="text" placeholder="nome" value={name} onChange={(e) => setUsername(e.target.value)} />
                <input required type="url" placeholder="foto" value={image} onChange={(e) => setImage(e.target.value)} />
                <button type="submit">Entrar</button>
            </form>
            <Link to="/">Já tem uma conta? Faça login!</Link>
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
        margin-top: 68px;
        width: fit-content;
        height: 180px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align:center;
        gap: 6px 0px;
        img{
            height: 50%;
            width: 100%;
        }
        h1{
            height: 50%;
            width: 100%;
            font-size: 69px;
            font-style: 'Playball', sans-serif;
        }
    }
    form{
            font-family: "Lexend Deca", sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 40px;
            gap: 6px 0px;
            input {
                width: 303px;
                height: 45px;
                border: 1px solid #D5D5D5;
                border-radius: 5px;
                ::placeholder{
                    
                    font-size: 20px;
                    padding-left: 12px;
                    color: #DBDBDB;                    
                }
            }
            button {
                border: none;
                color: #FFFFFF;
                width: 303px;
                height: 45px;
                background-color: #52B6FF;
                border-radius: 5px;
            }
        }
        a {
            margin-top: 25px;
                color: #52B6FF;
                :visited{
                    color:none;
                }
            }
`