import styled from "styled-components";

export const ContainerExterno = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  flex-direction: row;
  width: 1120px;
  display: flex;
  justify-content: space-between;
`;

export const Rodape = styled.div`
  flex: 1;
  margin: 0 18px 42px;
  text-align: start;
`;

export const Title = styled.h3`
  font-weight: bold;
  line-height: 1em;
`;

export const ItemList = styled.li`
  list-style: none;
  text-align: start;
  color: #fff;
`;

export const Link = styled.a`
  background-color: #bb6159;
  margin: 0 0 24px;
  padding: 18px 54px;
  border-radius: 2px;
  color: #fff;
  display: inline-block;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  line-height: 1.5em;
  font-family: "Lora", serif;
  font-weight: 400;

  &:hover {
    background-color: #ffe1dd;
    color: #122a57;
    transition: 0.3s ease all;
  }
`;

export const Adress = styled.address`
  font-style: normal;
  display: block;
  color: #fff;
`;

export const CabecalhoTable = styled.td`
  font-weight: 400;
  text-align: inherit;
  display: table-cell;
  vertical-align: inherit;
  color: #fff;
`;

export const Table = styled.table`
  border-collapse: separate;
  text-indent: initial;
  border-spacing: 2px;
`;

export const InfoTable = styled.th`
  padding: 0 0.5 em;
  display: table-cell;
  vertical-align: inherit;
  color: #fff;
`;

export const Horario = styled.span`
  white-space: nowrap;
`;
