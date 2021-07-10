import React from "react"
import Move from "./Router"
import {BrowserRouter as Router} from 'react-router-dom';
import Head from "./header/Header"
import Footer from "./footer/Footer.jsx"

function App() {
  return (
    <Router>
      <Head/>
      <main>
        <Move/>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
