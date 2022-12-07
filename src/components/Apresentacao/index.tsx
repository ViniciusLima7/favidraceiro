import React from "react";
import { Container, Image, Link, Texto, TextoDecorado, Title } from "./style";
import bannerVidro from "../../assets/vidro.jpg";
const Apresentacao = () => {
  return (
    <Container>
      <Texto>
        <Title>
          <TextoDecorado>F.A</TextoDecorado> VIDRACEIRO
        </Title>
        <p>O melhor serviço pra você.</p>
        <p>Trabalhamos com vidros de qualidade.</p>
        <p>Realizamos sonhos em forma de vidro.</p>
        <p>O Próximo pode ser o seu !</p>
        <Link href="#servicos">Saiba mais !</Link>
      </Texto>
      <div>
        <div>
          <Image src={bannerVidro} alt="Banner Vidro" />
        </div>
      </div>
    </Container>
  );
};

export default Apresentacao;
