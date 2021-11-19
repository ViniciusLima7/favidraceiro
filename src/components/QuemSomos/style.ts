import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 992px;
  margin: auto;
  width: 100%;
  min-width: 320px;

  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;
  margin-top: 150px;
`;

export const Title = styled.h2`
  font-size: 32px;
  color: #bb6159;
  display: flex;
  margin-bottom: 20px;
  margin-left: 50px;
  font-family: "Open Sans", sans-serif;
  font-size: 40px;
  &:before {
    content: "";
    height: 50px;
    width: 5px;
    margin-right: 5px;
    background-color: #bb6159;
    position: relative;
  }
`;

export const Text = styled.p`
  margin-left: 50px;
  margin-bottom: 10px;
  width: 90%;
  color: #fff;
`;

export const Image = styled.img`
  height: 350px;
  width: 450px;
  border-radius: 20px;
`;
