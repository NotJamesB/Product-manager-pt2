import React from 'react';
import CreateProduct from './components/PersonForm';
import Main from "./view/Main";
import ShowOne from './components/ShowOne';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Main></Main>}/>
        <Route path="/product/:id" element={<ShowOne></ShowOne>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
};

export default App;