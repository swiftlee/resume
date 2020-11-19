import React from "react";
import "./scss/App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import logo from "./prof_pic_256.svg";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
