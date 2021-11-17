
import './App.css';
import Apresentacao from './components/Apresentacao';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Header from './components/Header';
import Orcamento from './components/Orcamentos';
import QuemSomos from './components/QuemSomos';
import Servicos from './components/Servicos';

function App() {
  return (
    <>
      <Header/>
      <Apresentacao/>
      <QuemSomos/>
      <Servicos/>
      <Orcamento />
      <Contato/>
      <Footer />
    </>
    
  );
}

export default App;
