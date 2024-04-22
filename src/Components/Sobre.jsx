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
                <h2>Olá, tenho 41 anos, sou casada e tenho um filho de 12 anos. Tenho graduação em Licenciatura em Turismo e ministro aulas de arte para aluno do 6º ao 9º ano do ensino fundamental. Mas, a paixão que tenho por tecnologia desde a adolescência me "pescou" novamente. Em 2023 comecei a formação de FrontEnd pelo Projeto Talentos digitais, oferecido pelo Vai na Web. </h2>
                
            </div>

        </S.ContainerSobre>
    )
}

export default Sobre