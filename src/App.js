import React from 'react';
import { CrudApp } from "./components/CrudApp";
import { CrudApi } from './components/CrudApi';
import { SongSearch } from './components/SongSearch';


function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <SongSearch/>
      <hr/>
      <CrudApi/>
      <hr />
      <CrudApp/>
    </>
  );
}

export default App;
