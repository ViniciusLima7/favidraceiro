import React from 'react'
import { Container, ContainerExterno, Image, ItemServico, Link, ListaServicos, Text, Title } from './style';
import box from '../../assets/box-banheiro.jpg';
import janela from '../../assets/window-glass.jpg';
import espelho from '../../assets/mirror.jpg';
import moldura from '../../assets/frame-glasses.jpg';
import porta from '../../assets/door-glass.jpg';
import temperado from '../../assets/glass-tempered.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Servicos = () => {

  const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

    return(
       <ContainerExterno>
           <Container id="servicos">
                <Title>Serviços</Title>
        </Container>
        

        <ListaServicos>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            //  autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
          <ItemServico>
                  <div><Image src={box }alt="Box Banheiro" /></div>
                  <Text>Box para Banheiro</Text>
                  <Link href="#orcamentos">Faça seu Orçamento Agora</Link>
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

                 <ItemServico>
                  <div>
                    <Image src={espelho} alt="Espelhos personalizados" />
                  </div>
                  <Text>Vidro Comum</Text>
                  <Link href="#orcamentos">Faça seu Orçamento Agora</Link>
                </ItemServico> 

                 <ItemServico>
                  <div>
                    <Image src={temperado} alt="Espelhos personalizados" />
                  </div>
                  <Text>Vidro Temperado Emodulado</Text>
                  <Link href="#orcamentos">Faça seu Orçamento Agora</Link>
                </ItemServico> 

</Carousel>;
             </ListaServicos> 

            {/* <ListaServicos>
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

            {/* </ListaServicos>  */}
       </ContainerExterno>
    );

}

export default Servicos;