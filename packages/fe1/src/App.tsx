import React from 'react';
import logo from './logo.svg';
import { HelloWorld } from '@monorepo/react-component-lib';
import { ExampleComponent } from '@monorepo/react-lib-v2';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HelloWorld msg="Learn React2222" />
          <ExampleComponent text="from lib v2" />
        </a>
      </header>
    </div>
  );
}

export default App;
