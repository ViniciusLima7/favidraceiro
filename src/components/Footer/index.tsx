import React from 'react'
import { Container, IconeWhatsApp, Link, LinkWhatsApp, Texto } from './style';
import whatsapp from "../../assets/whatsapp.svg";

function Footer(){


    return (
        <Container>
            <Texto>
                © 2021  All Rights Reserved  Blindes Vidros  |
                Desenvolvido por | 
                <Link href="https://www.linkedin.com/in/marcos-vinicius-lima/" target="_blank"> Vinicius Lima</Link>                  
            </Texto>
            <LinkWhatsApp href="https://web.whatsapp.com/send?phone=5566992029676&text=Olá,%20Gostaria%20de%20um%20orçamento%20pode%20me%20ajudar?" target="_blank">
                <IconeWhatsApp src={whatsapp} alt="ds"></IconeWhatsApp>
            </LinkWhatsApp>
        </Container>
    );                               
}

export default Footer;