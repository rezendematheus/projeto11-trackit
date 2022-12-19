import { useContext, useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import userContext from "./components/userContext";
import Habitos from "./pages/HabitosPage";
import Historico from "./pages/HistoricoPage";
import Hoje from "./pages/HojePage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import React from "react";

function App() {
  const [userdata, setUserdata] = useState()
  const UserData = React.createContext(userContext)
  userdata && console.log(userdata);
  return (
    <UserData.Provider value={userdata}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login setUserdata={setUserdata}/>}/>
            <Route path="/cadastro" element={<Register/>}/>
            <Route path="/habitos" element={<Habitos />}/>
            <Route path="/hoje" element={<Hoje />}/>
            <Route path="/historico" element={<Historico />}/>
        </Routes>
      </BrowserRouter>
    </UserData.Provider>
  );
}

export default App;
