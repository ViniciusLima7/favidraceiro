import React from 'react'
import { Container, Link, Texto } from './style';
function Footer(){


    return (
        <Container>
            <Texto>
                © 2021  Blindes Vidros  All Rights Reserved 
                Desenvolvido por | 
                <Link href="https://www.linkedin.com/in/marcos-vinicius-lima/"> Vinicius Lima</Link>                  
            </Texto>
        </Container>
    );                               
}

export default Footer;