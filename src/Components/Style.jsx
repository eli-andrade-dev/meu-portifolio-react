import styled from 'styled-components';

//----Estilo da navegação

export const Nav = styled.nav`


`

export const Lista = styled.ul`
width: 100%;
display: flex;
justify-content: space-around;
list-style: none;
height: 20vh;
align-items: center;
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

export const Inicio2 = styled.section`
    display: flex;
    justify-content: center;
`
export const Div = styled.div`
    width: 15vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

//-----Estilo Projetos

export const GridContainer = styled.div`
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-left: 5rem;
    height: 510px;
    
`;

export const Image = styled.img`
    width: 25vw;
    height: auto;
    border: solid white;
    border-radius: 10px;
`;


