import React from "react";
import { Container, Image, Text, Title } from "./style";
import bannerVidro2 from "../../assets/vidro2.jpg";

const QuemSomos = () => {
  return (
    <Container id="quem-somos">
      <div>
        <Title>Quem somos</Title>
        <Text>
          A F.A VIDRACEIRO tem conhecimento técnico e prático no setor vidreiro
          e veio para atender o nicho de mercado que era carente de agilidade e
          um bom atendimento.
        </Text>
        <Text>
          Nos preucupamos não apenas com a qualidade do serviço, mas também com
          a qualidade do atendimento, desde a sua chegada ao nosso site/loja até
          a instalação do Vidro.
        </Text>
        <Text>Preços justos e qualidade em primeiro lugar.</Text>
        <Text>
          Para maior facilidade do cliente, também oferecemos instalação e
          manutenção de seus vidros, na sua residencia ou empresa.
        </Text>
      </div>

      <div>
        <Image src={bannerVidro2} alt="balcão de atendimento" />
      </div>
    </Container>
  );
};

export default QuemSomos;
