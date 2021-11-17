import React from 'react'
import { Container, Link, Texto } from './style';
function Footer(){


    return (
        <Container>
            <Texto>
                © 2021  All Rights Reserved  Blindes Vidros  |
                Desenvolvido por | 
                <Link href="https://www.linkedin.com/in/marcos-vinicius-lima/" target="_blank"> Vinicius Lima</Link>                  
            </Texto>
        </Container>
    );                               
}

export default Footer;