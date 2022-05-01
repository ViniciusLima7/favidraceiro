import styled from "styled-components";

export const Cabecalho = styled.header`
  background-color: #bb6159;
  height: 120px;
  display: flex;
  align-items: center;
  color: #fff;
  font-family: "Open Sans", sans-serif;
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
    padding: 5px;
  }
`;

export const LinkTitle = styled.a`
  text-decoration: none;
  color: #ffffff;

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

  @media (max-width: 768px) {
    font-size: 13px;
    /* width: 10%; */
    padding-right: 10px;
  }

  &:hover {
    color: #aaa;
  }
`;
