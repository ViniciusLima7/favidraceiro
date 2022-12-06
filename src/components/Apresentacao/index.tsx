import React from "react";
import { Container, Image, Link, Texto, Title } from "./style";
import bannerVidro from "../../assets/vidro.jpg";
const Apresentacao = () => {
  return (
    <Container>
      <Texto>
        <Title>
          F.A <br /> VIDRACEIRO
        </Title>
        <p>O melhor serviço pra você.</p>
        <p>Trabalhamos com vidros de qualidade.</p>
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
