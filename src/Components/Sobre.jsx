import React from "react"
import Perfil from "../assets/perfil.png"
import * as S from "./Style.jsx"

function Sobre() {
    return (
        <S.ContainerSobre>
            <S.Perfil src={Perfil} alt="" />

            <div>
                <h2>Olá, me chamo Elisangela, </h2>
                <h2>venha navegar pelo o meu portólio.</h2>
            </div>

        </S.ContainerSobre>
    )
}

export default Sobre