import React from "react";
import "./scss/App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Body from "./components/body/Body";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
