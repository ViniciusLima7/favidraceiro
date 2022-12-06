import React from "react";
import {
  Adress,
  CabecalhoTable,
  Container,
  ContainerExterno,
  Horario,
  InfoTable,
  ItemList,
  Link,
  Rodape,
  Table,
  Title,
} from "./style";

function Contato() {
  return (
    <ContainerExterno>
      <Container>
        <Rodape>
          <Title id="contato">Contato</Title>
          <div data-field="phone">
            <Link href="tel:+55-66-99202-9676">Ligar agora</Link>

            <ItemList>(66) 99609-8502</ItemList>
            <ItemList>(66) 98445-6596</ItemList>
          </div>
        </Rodape>
        <Rodape>
          <Title>Endereço</Title>
          <div data-field="address">
            <Link
              href="https://www.google.com/maps/dir//Vidra%C3%A7aria+Kito/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce53bd3678594f:0xb5f71e33c03162a6!2m2!1d-46.776565!2d-23.655853"
              target="_blank"
            >
              Ver rotas
            </Link>
            <Adress>
              <div>Av. Jatobás, 1063</div>
              <div>Jardim Celeste</div>
              <div>SINOP - MT</div>
              <div>CEP: 78556-650</div>
              <div>Brasil</div>
            </Adress>
          </div>
        </Rodape>
        <Rodape>
          <Title>Horário de Funcionamento</Title>
          <div>
            <Table>
              <tbody>
                <tr>
                  <CabecalhoTable>Segunda:</CabecalhoTable>
                  <InfoTable>
                    <Horario>08:00 – 18:00</Horario>
                  </InfoTable>
                </tr>
                <tr>
                  <CabecalhoTable>Terça:</CabecalhoTable>
                  <InfoTable>
                    <Horario>08:00 – 18:00</Horario>
                  </InfoTable>
                </tr>
                <tr>
                  <CabecalhoTable>Quarta:</CabecalhoTable>
                  <InfoTable>
                    <Horario>08:00 – 18:00</Horario>
                  </InfoTable>
                </tr>
                <tr>
                  <CabecalhoTable>Quinta:</CabecalhoTable>
                  <InfoTable>
                    <Horario>08:00 – 18:00</Horario>
                  </InfoTable>
                </tr>
                <tr>
                  <CabecalhoTable>Sexta:</CabecalhoTable>
                  <InfoTable>
                    <Horario>08:00 – 18:00</Horario>
                  </InfoTable>
                </tr>
                <tr>
                  <CabecalhoTable>Sábado:</CabecalhoTable>
                  <InfoTable>
                    <Horario>Fechado</Horario>
                  </InfoTable>
                </tr>
                <tr>
                  <CabecalhoTable>Domingo:</CabecalhoTable>
                  <InfoTable>
                    <Horario>Fechado</Horario>
                  </InfoTable>
                </tr>
              </tbody>
            </Table>
          </div>
        </Rodape>
      </Container>
    </ContainerExterno>
  );
}

export default Contato;
