import React, { useState } from "react";
import * as S from "./styled";

const FormularioTabela = () => {
  // Estados para armazenar os dados da tabela e os valores digitados nos campos de entrada
  const [tabelaData, setTabelaData] = useState([
    ["Residencial", "68%", "variavel"],
    ["Comercial", "69%", "variavel"],
    ["Rural", "59%", "variavel"],
    ["Poder Público", "72%", "variavel"],
    ["Industrial", "80%", "variavel"]
  ]);
  const [consumoMedio, setConsumoMedio] = useState("");
  const [novaInstalacao, setNovaInstalacao] = useState("");

  // Função para atualizar o valor da célula da última coluna
  const handleUpdateTabela = (rowIndex) => {
    const newTableData = tabelaData.map(row => {
      let newValue;
  
      if (novaInstalacao === "sim") {
        newValue = 1.5; // Se for "sim", definimos como 1,5
      } else {
        const valorConsumoMedio = parseFloat(consumoMedio); // Convertemos para número
      const penultimaColuna = parseFloat(row[row.length - 2]); // Valor da penúltima coluna
      newValue = isNaN(valorConsumoMedio) ? 0 : Math.round((valorConsumoMedio * penultimaColuna) / 115.2); // Realizamos o cálculo
      newValue=(newValue/100).toFixed(1);
      }
  
      // Atualizamos apenas a última célula da linha
      return [...row.slice(0, -1), newValue];
    });
  
    // Atualizamos o estado da tabela com os novos dados
    setTabelaData(newTableData);
  };

  // Manipulador de evento para o campo de entrada do consumo médio
  const handleChangeConsumoMedio = (event) => {
    // Obtém o valor digitado no campo de entrada
    const value = event.target.value;

    // Verifica se o valor digitado é numérico
    if (!isNaN(value)) {
      // Atualiza o estado com o valor digitado
      setConsumoMedio(value);
    }
  };

  const handleChangeNovaInstalacao = (event) => {
    setNovaInstalacao(event.target.value);
  };
  return (
    <S.FullContainer>
      <S.Container>
        
        <S.LabelTitulo fontSize="xl" fontWeight="bold">
          Formulário
        </S.LabelTitulo>


        <S.InputContent>
            <S.Label>Instalação nova:</S.Label>
            <S.RadioGroup value={novaInstalacao} onChange={handleChangeNovaInstalacao}>
              <S.InputField type="radio" name="nova_instalacao" value="sim" checked={novaInstalacao === "sim"}/>
              <S.LabelRadio>Sim</S.LabelRadio>
              <S.InputField type="radio" name="nova_instalacao" value="nao" checked={novaInstalacao === "nao"} />
              <S.LabelRadio>Não</S.LabelRadio>
            </S.RadioGroup>
          </S.InputContent>



        <S.InputContent>
          <S.Label>Consumo médio nos últimos 12 meses:</S.Label>
          <S.InputField2
            type="text"
            value={consumoMedio}
            onChange={handleChangeConsumoMedio}
            placeholder="Digite o consumo médio"
          /> 
          <S.Button onClick={() => handleUpdateTabela(0)}>
          Calcular
        </S.Button>
        </S.InputContent>
        
      </S.Container>

      <S.Espaco />

      <S.Container>
        <S.LabelTitulo fontSize="xl" fontWeight="bold">
          Tabela
        </S.LabelTitulo>
        <S.Tabela>
          <thead>
            <tr>
              <S.TabelaCabecalho>Classe</S.TabelaCabecalho>
              <S.TabelaCabecalho>Percentual consumido entre 6h e 18h</S.TabelaCabecalho>
              <S.TabelaCabecalho>Potência de geração compatível (kw)</S.TabelaCabecalho>
            </tr>
          </thead>
          <tbody>
            {tabelaData.map((linha, index) => (
              <tr key={index}>
                {linha.map((celula, columnIndex) => (
                  <S.TabelaCelula key={columnIndex}>{celula}</S.TabelaCelula>
                ))}
              </tr>
            ))}
          </tbody>
        </S.Tabela>
      </S.Container>
    </S.FullContainer>
  );
};

export default FormularioTabela;
