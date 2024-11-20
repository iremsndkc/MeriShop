import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import "./index.css";
import Home from "./pages/Home";
import PageContainer from "./containers/PageContainer.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail.jsx";
import Card from "./pages/Card.jsx";

const App = () => {
  return (
    <div>
      <PageContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products/:id" element={<Detail />}></Route>
            <Route path="/card" element={<Card />}></Route>
          </Routes>
        </Router>
      </PageContainer>
    </div>
  );
};

export default App;
