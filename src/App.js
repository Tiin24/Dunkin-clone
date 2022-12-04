import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Store from "./components/Store/Store";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/store" element={<Store/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
