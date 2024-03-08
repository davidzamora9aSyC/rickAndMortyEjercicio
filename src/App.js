import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail";
import Personajes from "./components/Personajes";
import NavBar from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 return (
   <div className="App">
     <NavBar></NavBar>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Personajes />} />
         <Route path="/personajes" element={<Personajes />} />
         <Route path="/personajes/:personajeId" element={<Detail />} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;