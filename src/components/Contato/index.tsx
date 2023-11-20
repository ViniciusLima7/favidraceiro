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
            <Link href="tel:+55-66-8445-6596">Ligar agora</Link>

            <ItemList>(66) 99609-8502</ItemList>
            <ItemList>(66) 98445-6596</ItemList>
          </div>
        </Rodape>
        <Rodape>
          <Title>Endereço</Title>
          <div data-field="address">
            <Link
              href="https://www.google.com/maps/place/R.+Ilda,+185,+Tabapor%C3%A3+-+MT,+78563-000,+Brazil/@-11.3061665,-56.8203283,17z/data=!3m1!4b1!4m5!3m4!1s0x93a8aea45c85acf9:0xdd16e73db7b9df6e!8m2!3d-11.3061718!4d-56.8177534?hl=en&entry=ttu"
              target="_blank"
            >
              Ver rotas
            </Link>
            <Adress>
              <div>Rua Ilda, 185</div>
              {/* <div>Jardim Celeste</div> */}
              <div>Tabaporã - MT</div>
              <div>CEP: 78563-000</div>
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
