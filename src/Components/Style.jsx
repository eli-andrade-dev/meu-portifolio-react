import styled from "styled-components"

//----Estilo da navegação

export const Nav = styled.nav`


`

export const Lista = styled.ul`
width: 100%;
border: solid green;
display: flex;
justify-content: space-around;
list-style: none;
height: 20vh;
align-items: center;


a{
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5rem;

}

`

//Estilo Sobre

export const Perfil = styled.img`
    width: 20vw;
    height: 40vh;
    
`

export const ContainerSobre = styled.main`
display: flex;
justify-content: space-evenly;
align-items: center;
margin-top: 3rem;
margin-right: 5rem;
margin-left: 5rem;
gap: 8%;
text-align: justify;
border: solid white;

`




export const Header = styled.header`

width: 100%;
height: 80vh; */

`


//-----Estilo Inicio 

export const Inicio = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 3rem;
`