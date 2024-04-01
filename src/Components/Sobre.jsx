import React from "react"
import Perfil from "../assets/perfil.png"
import * as S from "./Style.jsx"

function Sobre() {
    return (
        <S.ContainerSobre>

            <div>
            <S.Perfil src={Perfil} alt="" />
            </div>
         
            <div>
                <h2>Olá, tenho 41 anos, sou graduada em Licenciatura em Turismo, mas, a paixão que tenho por tecnologia desde a adolescência me "pescou" novamente. </h2>
                
            </div>

        </S.ContainerSobre>
    )
}

export default Sobre