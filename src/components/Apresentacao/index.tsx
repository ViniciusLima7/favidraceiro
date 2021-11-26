import React from 'react'
import { Container, Image, Link, Texto, Title } from './style'
import bannerVidro from '../../assets/vidro.jpg';
 const Apresentacao = () => {

    return (
        <Container>
            <Texto>
                <Title>Blindes <br/> Vidros</Title>
                <p>O melhor serviço pra você.</p>
                <p>Trabalhamos com vidros Blindex.</p>
                <Link href="#servicos">Saiba mais !</Link>
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