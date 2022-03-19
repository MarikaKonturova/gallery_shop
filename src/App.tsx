import React from 'react';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import './styles/css/styles.css'
import {paintings} from './mockData/mockData'
function App() {
  return (
    <div className="App">
     <Header/>
     <Intro/>
     <Main paintings={paintings}/>
     <Footer/>
    </div>
  );
}

export default App;
