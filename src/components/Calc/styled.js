import styled from "styled-components";

export const FullContainer = styled.section`
  max-width: 1200px;
 
  width: 800px;
  margin: 0 auto;
  padding: 10px;
  margin-top: 20px;
  box-shadow: 0px 0px 5px #ccc;
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  align-items: center; /*
  height: auto;
  @media (min-width: 900px) {
    max-width: 750px;
    width: 750px;
    padding: 20px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
    width: 1280px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
 
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 16px;

  @media (min-width: 1200px) {
    min-width: 90%;
    width: 90%;
  }
`;

export const ContainerLinha = styled.div`
  margin-top: 10px;
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 15px;
`;

export const LabelTitulo = styled.label`
  font-size: 24px;
  font-weight: bold;
  text-align: left;

  @media (min-width: 750px) {
    font-size: 28px;
  }
`;

export const Label = styled.label`
  font-size: 20px;
  text-align: left;
  margin-top:10px;
  @media (min-width: 750px) {
    font-size: 16px;
  }
`;

export const LabelRadio = styled.span`
  font-size: 14px;
  text-align: left;
  margin-right: 12px;
  margin-top:1px;

  @media (min-width: 750px) {
    font-size: 16px;
  }
`;

export const InputField = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
  margin-right: 10px;
  margin-top:15px;
  
  

`;
export const InputField2 = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
  margin-right: 10px;
  margin-top:15px;
  width:250px;
  

`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    accent-color: black;
    margin-top: 0;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: teal;
  margin-top:15px;
  width:90px;
`;

export const Espaco = styled.div`
  margin-bottom: 20px;
`;

export const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top:20px;
`;

export const TabelaCabecalho = styled.th`
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f2f2f2;
  font-weight: bold;
`;

export const TabelaCelula = styled.td`
  border: 1px solid #ccc;
  padding: 10px;
`;
