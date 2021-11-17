import React from 'react'
import { Container, ContainerExterno, Image, ItemServico, Link, ListaServicos, Text, Title } from './style';
import box from '../../assets/box-banheiro.jpg';
import janela from '../../assets/window-glass.jpg';
import espelho from '../../assets/mirror.jpg';
import moldura from '../../assets/frame-glasses.jpg';
import porta from '../../assets/door-glass.jpg';
import temperado from '../../assets/glass-tempered.jpg';
const Servicos = () =>{

    return(
       <ContainerExterno>
           <Container id="servicos">
                <Title>Serviços</Title>
            </Container>

            <ListaServicos>
                <ItemServico>
                  <div><Image src={box }alt="Box Banheiro" /></div>
                  <Text>Box para Banheiro</Text>
                  <Link href="#">Faça seu Orçamento Agora</Link>
                </ItemServico>

                <ItemServico>
                  <div><Image src={janela} alt="Janelas de Vidro" /></div>
                  <Text>Janelas</Text>
                  <Link href="#orcamentos">Faça seu Orçamento Agora</Link>
                </ItemServico>

                <ItemServico>
                  <div>
                    <Image src={moldura} alt="Espelhos personalizados" />
                  </div>
                  <Text>Molduras</Text>
                  <Link href="#orcamentos">Faça seu Orçamento Agora</Link>
                </ItemServico>

                <ItemServico>
                  <div>
                    <Image src={porta} alt="Espelhos personalizados" />
                  </div>
                  <Text>Portas</Text>
                  <Link href="#orcamentos">Faça seu Orçamento Agora</Link>
                </ItemServico>

                {/* <ItemServico>
                  <div>
                    <Image src={espelho} alt="Espelhos personalizados" />
                  </div>
                  <Text>Vidro Comum</Text>
                  <Link href="#">Faça seu Orçamento Agora</Link>
                </ItemServico> 

                 <ItemServico>
                  <div>
                    <Image src={temperado} alt="Espelhos personalizados" />
                  </div>
                  <Text>Vidro Temperado Emodulado</Text>
                  <Link href="#">Faça seu Orçamento Agora</Link>
                </ItemServico> */}

            </ListaServicos>
       </ContainerExterno>
    );

}

export default Servicos;