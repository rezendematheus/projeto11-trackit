import {BrowserRouter, Routes, Route} from "react-router-dom"
import Habitos from "./pages/HabitosPage";
import Historico from "./pages/HistoricoPage";
import Hoje from "./pages/HojePage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/cadastro" element={<Register/>}/>
        <Route path="/habitos" element={<Habitos />}/>
        <Route path="/hoje" element={<Hoje />}/>
        <Route path="/historico" element={<Historico />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
