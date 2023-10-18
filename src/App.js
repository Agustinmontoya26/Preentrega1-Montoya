import React from 'react';
import MiComponente from './Components/Pages/Home/Home';
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
        <NavBar></NavBar>
        <ItemListContainer greeting={"Gracias por tu visita"}/>
        <MiComponente></MiComponente>
    </div>
  );
}

export default App;
