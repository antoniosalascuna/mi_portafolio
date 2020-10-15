import React from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';

import Micomponente from './components/Micomponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Micomponente/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>


      <section className="componentes"> 
       
      </section>
    </div>
  );
}

export default App;
