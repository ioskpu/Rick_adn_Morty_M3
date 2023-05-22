import "./App.css";
import Start from './components/start/Start';
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About"
import Favorites from "./components/Favorites/Favorites";
import Detail from "./components/Detail/Detail"
import Form from "./components/Form/Form";
import Footer from "./components/Nav/Footer";
import axios from "axios";

import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";


const App = () => {

  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

// // datos para acceso falsos
// const username = "henry@mail.com"
// const password = "henry2023"


  // handlers
  const URL_BASE = "http://localhost:3001/rickandmorty/character/";
  //const API_KEY = "e55f4eeff684.4671def8166b7fc446be";

  const onSearch = (id) => {
    axios(`${URL_BASE}/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("¡No hay personajes con este ID!");
        }
      });
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(charactersFiltered);
  };

  // const handleLogin = (userData) => {
  //   if (userData.username === username && userData.password === password){
  //     setAccess(true);
  //     navigate("/home");
  //   }
  //   else alert("Datos incorrectos")
  // }
  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
 }

// renderizado
  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={ onSearch } login = { setAccess } />}

      <Routes>

      <Route path="/" element={<Start login={ login }/>} />

      <Route path='/start' element={<Form login={login}/>} Nav={false}/>

      <Route path="/home" element={<Cards characters={ characters } onClose={ onClose } />} />

      <Route path="/about" element={<About />} />

      <Route path="/favorites" element={<Favorites />} />

      <Route path="/detail/:id" element={<Detail />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
