import React from "react";
import {
  Cabecalho,
  Container,
  LinkItem,
  LinkTitle,
  List,
  Title,
} from "./styles";

const Header = () => {
  return (
    <Cabecalho>
      <Container>
        <div>
          <Title>
            <LinkTitle href="#">Blindes Vidros</LinkTitle>
          </Title>
        </div>

        <List>
          <li>
            <LinkItem href="#quem-somos">Quem Somos</LinkItem>
          </li>
          <li>
            <LinkItem href="#servicos">Serviços</LinkItem>
          </li>
          <li>
            <LinkItem href="#orcamentos">Orçamentos</LinkItem>
          </li>
          <li>
            <LinkItem href="#contato">Contato</LinkItem>
          </li>
        </List>
      </Container>
    </Cabecalho>
  );
};

export default Header;
