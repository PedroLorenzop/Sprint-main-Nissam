import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Outlet /> {/* O conteúdo das rotas (como Home, FAQ, etc.) será renderizado aqui */}
      <Footer />
    </>
  );
}

export default App;
