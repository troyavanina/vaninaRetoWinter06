import { useState, useEffect } from "react";
import "../assets/style/App.css";
import Pokemones from "../containers/Pokemones";
import Pokemon from "../containers/Pokemon";
import Home from "../containers/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "../containers/Contacto";
import Layout from "../components/Layout";
//import Somos from "../containers/Somos";
import MisFavoritos from "../containers/MisFavoritos";
import UsarContexto from "../contexto/UsarContexto";

function App() {
  return (
    <>
      <BrowserRouter>
        <UsarContexto>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/pokemones" element={<Pokemones />}></Route>
              <Route path="/pokemones/*" element={<Pokemon />}></Route>
              <Route path="/contacto" element={<Contacto />}></Route>
              {/* <Route path="/somos" element={<Somos />}></Route> */}
              <Route path="/misfavoritos" element={<MisFavoritos />}></Route>
            </Routes>
          </Layout>
        </UsarContexto>
      </BrowserRouter>
    </>
  );
}

export default App;
