import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/logo.PNG"

export default function Login() {
    return (
        <Content>
            <div>
                <img src={logo} alt="imagem logo" />
                <h1>TrackIt</h1>
            </div>

            <form onSubmit={""}>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />
                <button type="submit">Entrar</button>
            </form>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
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