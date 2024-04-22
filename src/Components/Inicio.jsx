import React from "react"
import Instagram from '../assets/instagram.png'
import Git from '../assets/github.png'
import Linkedin from '../assets/linkedin.png'
import Perfil from "../assets/perfil.png"
import * as S from "./Style.jsx"

function Inicio(){
return(
    <>
        <S.Inicio>
            <S.Perfil src={Perfil} alt="" />

            <div>
                <h2>Olá, me chamo Elisangela, </h2>
                <h2>venha navegar pelo o meu portólio.</h2>
            </div>

        </S.Inicio>

        <S.Inicio2>
           <S.Div>
             <a href="https://www.instagram.com/elisangela.andrade.144/"><img src={Instagram} alt="logo instagram" /></a>
             <a href="https://github.com/eli-andrade-dev"><img src={Git} alt="" /></a>
             <a href="https://www.linkedin.com/in/elis-andrade/"><img src={Linkedin} alt="" /></a>
           </S.Div>
        </S.Inicio2>

    </>
)
}

export default Inicio

