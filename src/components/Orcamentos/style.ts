import styled from "styled-components";

export const ContainerExterno = styled.div`
  /* width: 60%; */
  background: #fff;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-top: 2px;
  /* margin-left: 20%; */
`;

export const Formulario = styled.form`
  background: #fff;
`;

export const Title = styled.h1`
  font-size: 50px;
  text-transform: uppercase;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
