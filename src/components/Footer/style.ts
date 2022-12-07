import styled from "styled-components";
export const Container = styled.div`
  text-align: center;
`;

export const Texto = styled.p`
  line-height: 1.8em;
  letter-spacing: 1px;

  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 13px;
  }
  @media (max-width: 480px) {
    font-size: 9px;
  }
  @media (max-width: 405px) {
    font-size: 10px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #bb6159;
  font-weight: 549;

  &:hover {
    color: #000;
    /* color: #303f9f; */
    transition: 0.3s ease all;
  }
`;

export const IconeWhatsApp = styled.img`
  position: fixed;
  height: 70px;
  @media (max-width: 768px) {
    height: 60px;
    top: 70%;
    right: 20%;
  }
  @media (max-width: 480px) {
    height: 48px;
    top: 80%;
    right: 10%;
  }
`;

export const LinkWhatsApp = styled.a`
  position: fixed;
  right: 10%;
  bottom: 15%;

  @media (max-width: 768px) {
    right: 9.5%;
    bottom: 11%;
  }
  @media (max-width: 480px) {
    right: 16%;
    bottom: 11%;
  }
`;
