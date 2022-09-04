import React from "react";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import "./styles/css/styles.css";
import { observer } from "mobx-react-lite";

function App() {
  return (
    <div className="App">`
      <Header />
      <Intro />
      <Main />
      <Footer />
    </div>
  );
}

export default observer(App);
