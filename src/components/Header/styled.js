import styled from "styled-components";

export const Header = styled.header`
  background: teal;
  padding: 1px;
  box-shadow: 0px 0px 5px #ccc;
  
  
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: bold;

  @media (min-width: 1280px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.h2`
  color: #fff;
  font-size: 16px;

  @media (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  height: 30px
  display: flex;
  flex-direction: column;
  align-items: flex-start

  @media (min-width: 750px) {
    max-width: 750px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px
  }
`;