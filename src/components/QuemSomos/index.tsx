import React from 'react'
import { Container, Image, Text, Title } from './style';
import bannerVidro2 from '../../assets/vidro2.jpg';


const QuemSomos = () =>{

    return(
       <Container id="quem-somos">
           <div>
                <Title>Quem somos</Title>
                <Text>
                A Blindes Vidros  tem conhecimento técnico e prático no setor vidreiro
                e veio para atender o nicho de mercado que era carente de um bom atendimento, pós venda
                voltado para a satisfação do cliente com preços justos e qualidade em primeiro lugar.
                
                Nos preucupamos não apenas com a qualidade do serviço, mas também com a qualidade do atendimento,
                desde a sua chegada ao nosso site/loja até a instalação do Vidro.
                </Text>
                <Text>
                    Nós rabalhamos com os vidros Blindex, para garantir o melhor produto.
                    </Text>
                <Text>
                Preocupada com a melhoria do setor viemos para fazer o diferencial, trazendo novas
                formas de se trabalhar com vidros.
                 </Text>
            </div>

            <div>
                <Image src={bannerVidro2} alt="balcão de atendimento" />
            </div>
       </Container>
    );

}


export default QuemSomos;