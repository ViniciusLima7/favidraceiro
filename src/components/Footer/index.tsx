import React from "react";
import { Container, IconeWhatsApp, Link, LinkWhatsApp, Texto } from "./style";
import whatsapp from "../../assets/whatsapp.svg";

function Footer() {
  return (
    <Container>
      <Texto>
        © 2023 All Rights Reserved F.A VIDRACEIRO | Desenvolvido por |
        <Link
          href="https://www.linkedin.com/in/marcos-vinicius-lima/"
          target="_blank"
        >
          {" "}
          Vinicius Lima
        </Link>
      </Texto>
      <LinkWhatsApp
        href="https://wa.me/5566996098502?text=Olá,%20Gostaria%20de%20um%20orçamento%20pode%20me%20ajudar?"
        target="_blank"
      >
        <IconeWhatsApp src={whatsapp} alt="ds"></IconeWhatsApp>
      </LinkWhatsApp>
    </Container>
  );
}

export default Footer;
