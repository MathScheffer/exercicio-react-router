// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

import { useState } from 'react';
import Produtos from './components/Produtos';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0);
  const { pathname } = window.location;
  console.log(pathname);
  return (
    <>
      <div>
        <Header />
        {pathname == '/produtos' ? <Produtos produtos={produtos} /> : <Home />}
      </div>
    </>
  );
}

export default App;
