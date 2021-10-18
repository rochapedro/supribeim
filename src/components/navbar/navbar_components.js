import styled from 'styled-components';

import { Palete2 } from '../../styles/colors';

export const ContainerNavbar = styled.header`
    background-color: ${Palete2.color1};
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;
    left: ${(props) => (props.clicked ? "0" : "250px")};
    transition: all 0.5s;
`;

export const Button = styled.button`
    heigth: 50px;
    width: 50px;
    background-color: blue;
    margin-left: 100px;
`;

export const Span = styled.span`
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
        height: 2.3em;
        width: 2.3em;
        color: #fff;
        padding: 5px;
    
        &:hover {
            border: 2px solid #fff;
            border-radius: 5px;
        }
    }
`;