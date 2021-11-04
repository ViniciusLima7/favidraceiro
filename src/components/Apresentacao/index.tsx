import React from 'react'
import { Container, Image, Link, Texto, Title } from './style'
import bannerVidro from '../../assets/vidro.jpg';
 const Apresentacao = () => {

    return (
        <Container>
            <Texto>
                <Title>Blindex <br/> Vidros</Title>
                <p>O melhor serviço pra você</p>
                <Link href="teste">Saiba mais !</Link>
            </Texto>
            <div>
                <div>
                    <Image src={bannerVidro} alt="Banner Vidro" />
                </div>
            </div>
            
        </Container>
    );
 }

 export default  Apresentacao;