import styled from "styled-components";

export const Cabecalho = styled.header`
  background-color: #bb6159;
  height: 120px;
  display: flex;
  align-items: center;
  color: #fff;
  font-family: "Open Sans", sans-serif;
`;

export const TextoDecorado = styled.h1`
  font-family: "Pinyon Script";
  font-size: 42px;
  margin-right: 25px;
`;

export const Container = styled.div`
  display: flex;
  max-width: 992px;
  margin: auto;
  width: 100%;
  min-width: 320px;
  justify-content: space-between;
`;

export const Title = styled.h1`
  &:hover {
    color: #aaaaaa;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    padding-left: 5px;
  }
  @media (max-width: 480px) {
    font-size: 25px;
    padding-left: 10px;
  }
`;

export const LinkTitle = styled.a`
  text-decoration: none;
  color: #ffffff;
  display: flex;
  align-items: baseline;
  text-align: center;

  &:hover {
    color: #aaaaaa;
  }
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
  max-width: 400px;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  @media (max-width: 768px) {
    justify-content: left;
  }
`;

export const LinkItem = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #aaa;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding-right: 10px;
  }
  @media (max-width: 480px) {
    font-size: 11.5px;
  }
`;
