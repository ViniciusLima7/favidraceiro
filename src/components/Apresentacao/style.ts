import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 992px;
  margin: auto;
  width: 100%;
  min-width: 320px;
  height: 100vh;
  align-items: center;
  justify-content: space-around;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Texto = styled.div`
  min-height: 200px;
  color: #fff;

  @media (max-width: 768px) {
    p {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 11px;
    }
  }
`;

export const Title = styled.h1`
  color: #bb6159;
  font-size: 48px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 35px;
  }
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

export const Link = styled.a`
  background-color: #bb6159;
  color: white;
  text-align: center;
  border-radius: 30px;
  width: 220px;
  display: block;
  text-decoration: none;
  height: 50px;
  line-height: 50px;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 20px;
  &:hover {
    background-color: #ffe1dd;
    color: #122a57;
    transition: 0.3s ease all;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    width: 150px;
    height: 35px;
    line-height: 35px;
  }
  @media (max-width: 480px) {
    font-size: 13px;
    width: 120px;
    height: 30px;
    line-height: 30px;
    margin-right: 40px;
  }
`;

export const Image = styled.img`
  height: 300px;
  width: 400px;
  border-radius: 50px;
  -webkit-box-reflect: below 5px
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
  @media (max-width: 768px) {
    height: 200px;
    width: 300px;
  }
  @media (max-width: 480px) {
    height: 150px;
    width: 240px;
  }
`;
