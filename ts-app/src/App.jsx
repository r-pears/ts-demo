import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Header title="Hello World" />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
