import React, { useState } from 'react';

import { ContainerNavbar, Span } from './navbar_components';
import { ContainerSidebar, ContainerMenu, SidebarHeader, SidebarLogo, Menu, MenuItem, MenuIcon, Button, Separador } from '../sidebar/sidebar_components';
import Container from '../container/container';

import { FaNetworkWired, FaBars, FaRegChartBar, FaUsers, FaBoxes, FaMoneyCheck } from 'react-icons/fa';


function Navbar (props) {

    const [active, setActive] = useState(false);
    const handleActive = () => setActive(!active);

    return (
        <>
            <ContainerNavbar clicked={props.clicked}>
                <Span onClick={() => props.handleClick()}> 
                    <FaBars />
                </Span>   
            </ContainerNavbar >
            <ContainerSidebar clicked={props.clicked}>
                <SidebarHeader>
                    <SidebarLogo>
                      <FaNetworkWired/>  
                    </SidebarLogo>
                    SupriBetim
                </SidebarHeader>
                <Separador />
                <ContainerMenu>
                    <Menu>
                        <MenuItem 
                            exact
                            activeClassName="active"
                            to="/">
                            <MenuIcon>
                                <FaRegChartBar />
                            </MenuIcon>
                            Dashboard
                        </MenuItem>
                        <MenuItem 
                            activeClassName="active"
                            to="/users">
                            <MenuIcon>
                                <FaUsers />
                            </MenuIcon>
                            Usuários
                        </MenuItem>
                        <MenuItem 
                            activeClassName="active"
                            to="/materials">
                            <MenuIcon>
                                <FaBoxes />
                            </MenuIcon>
                            Materiais
                        </MenuItem>
                        <MenuItem 
                            activeClassName="active"
                            to="/costcenters">
                            <MenuIcon>
                                <FaMoneyCheck />
                            </MenuIcon>
                            Centro de Custos
                        </MenuItem>
                    </Menu>
                </ContainerMenu>
            </ContainerSidebar>
        </>  
    );
};

export default Navbar;