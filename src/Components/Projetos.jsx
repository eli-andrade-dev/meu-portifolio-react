import React from "react";
import * as S from "./Style.jsx"

import Instagram from '../assets/instagram.png'
import Git from '../assets/github.png'
import Linkedin from '../assets/linkedin.png'

import SiteMarketing from '../assets/site-marketing.png';
import Cards from '../assets/card-vingadores.png';
import Jogo from '../assets/jogo-da-velha.png'
import Churrascometro from '../assets/churrascometro.png'
import Fantastika from '../assets/fantastika-pet-shop.png'
import Viagem from '../assets/site-viagem.png'

import { GridContainer, Image } from "./Style";

function Projetos() {
    return (
        <section>
            
            <GridContainer>
                <a href='https://modelo-de-landing-page.vercel.app/' target="blank"><Image src={SiteMarketing} alt="Foto 1" /></a>

                <a href='https://jogo-da-velha-iota-weld.vercel.app/' target="blank"><Image src={Jogo} alt="Foto 2" /></a>

                <a href='https://cards-vingadores-animado-chi.vercel.app/' target="blank">
                <Image src={Cards} alt="Foto 2" /></a>

                <a href='https://churrascometro-pi.vercel.app/' target="blank"><Image src={Churrascometro} alt="Foto 3" /></a>
                
                <a href='https://fantastika-pet-shop.vercel.app/' target="blank"><Image src={Fantastika} alt="Foto 4" /></a>
                
                <a href='site-viagem-kappa.vercel.app' target="blank"><Image src={Viagem} alt="Foto 5" /></a>
                
            </GridContainer>

            <S.Inicio2>
                <S.Div>
                  <a href="https://www.instagram.com/elisangela.andrade.144/"><img src=     {Instagram} alt="logo instagram" /></a>
                  <a href="https://github.com/eli-andrade-dev"><img src={Git} alt="" /></a>
                  <a href="https://www.linkedin.com/in/elis-andrade/"><img src={Linkedin}       alt="" /></a>
                </S.Div>

            </S.Inicio2>

        </section>

        
    );
}

export default Projetos;
