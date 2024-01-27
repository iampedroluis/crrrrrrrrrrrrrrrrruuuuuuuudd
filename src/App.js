import React from 'react';
import { CrudApp } from "./components/CrudApp";
import { CrudApi } from './components/CrudApi';


function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <CrudApi/>
      <hr />
      <CrudApp/>
    </>
  );
}

export default App;
