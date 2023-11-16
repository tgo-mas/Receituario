import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Root from './pages/Root/Root.jsx';
import Introducao from './pages/Introducao/Introducao.jsx';
import ListaReceitas from './pages/ListaReceitas/ListaReceitas.jsx';
import Receita from './pages/Receita/Receita.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Introducao />} />
          <Route path="/receitas" element={<ListaReceitas />} />
          <Route path="/receita/:id" element={<Receita />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
