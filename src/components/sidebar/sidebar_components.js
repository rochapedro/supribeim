import styled from 'styled-components';

import { Palete2 } from '../../styles/colors';

export const ContainerSidebar = styled.nav`
    background-color: ${Palete2.color2};
    height: 100vh;
    width: 250px;
    position: fixed;
    top: 0;
    left: ${(props) => (props.clicked ? "-100%" : "0")};
    transition: all 0.5s;
`;

export const ContainerMenu = styled.div`
    width: 100%;
    heigth: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const SidebarHeader = styled.div`
    height: 70px;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    padding: 10px;
    color: white;
    font-size: 20px;
`;

export const SidebarLogo = styled.span`
    margin-right: 10px;
`;

export const Menu = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    list-styled: none;
    padding: 0px 10px 10px 10px;
`;

export const MenuItem = styled.li`
    width: 100%;
    heigth: 50px;
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 10px 10px 0px 10px;
    padding: 10px 10px 10px 15px;
    background-color: ${Palete2.color1};
    color: white;
    border-radius: 8px;
    &:hover {
        background-color: ${Palete2.color8};
        cursor: pointer;
    }
`;

export const MenuIcon = styled.span`
    margin-right: 10px;
`;

export const Button = styled.button`
    heigth: 50px;
    width: 50px;
    background-color: blue;
`;

export const IconButton = styled.span`

`;

export const Separador = styled.hr`
    border: 0.5px solid #fff;
    margin: 0px 10px 0px 10px;
`;