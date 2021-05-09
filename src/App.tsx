import React from "react";
import "./scss/App.scss";
import './index.css';
import './styles.css'
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
