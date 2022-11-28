import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
