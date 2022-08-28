import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {DetailPage} from "./pages/DetailPage";
import {Home} from "./pages/Home";
import {MostSearchedPage} from "./pages/MostSearchedPage";
import "./App.css";
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/detail-page/:breedName" element={<DetailPage/>}></Route>
          <Route path="/most-searched-page" element={<MostSearchedPage/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
