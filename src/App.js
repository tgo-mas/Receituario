import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Introducao from './pages/Introducao/Introducao.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introducao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
