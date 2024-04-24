import logo from './logo.svg';
import './App.css';
import { Flex } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Calc from './components/Calc';
function App() {
  return (
    <Flex
      w="100vw"
      minH="100vh"
      direction="column"
      bg="#fff"
    > 
    <Header title="Calculadora" subtitle="Calculadora de valores CEMIG" />
    <Calc/>
    <Footer title="Calculadora CEMIG"/>
    </Flex>
  );
}

export default App;
