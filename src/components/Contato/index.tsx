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
              href="https://www.google.com/maps/dir//Avenida+dos+Jatob%C3%A1s,+1063+-+Jardim+Jacarandas,+Sinop+-+State+of+Mato+Grosso/@-11.8800693,-55.5458271,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x93a77fc6fff4a87f:0xe4bc81b62a0cf594!2m2!1d-55.5108073!2d-11.8801555"
              target="_blank"
            >
              Ver rotas
            </Link>
            <Adress>
              <div>Rua Alida, 185</div>
              {/* <div>Jardim Celeste</div> */}
              <div>Tabaporã - MT</div>
              {/* <div>CEP: 78556-650</div> */}
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
