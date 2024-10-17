import './App.css';

//Importar o bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Importar o gerenciador de rotas
import { BrowserRouter, Route, Routes} from "react-router-dom"

//Importar paginas
import ListaDeProdutos from "./pages/ListaDeProdutos.jsx"
import Login from "./pages/Login.jsx"
import CadastroDeProdutos from "./pages/CadastroDeProdutos.jsx"

import NavBarra from "./components/NavBarra.jsx"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarra />
        <Routes>
          <Route path='/' element={<ListaDeProdutos />} />         
          <Route path='/listadeprodutos' element={<ListaDeProdutos />} />
          <Route path='/cadastrodeprodutos' element={<CadastroDeProdutos />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
