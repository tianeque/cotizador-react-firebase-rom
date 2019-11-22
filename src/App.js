import React from "react";
import "./App.css";
import Opciones from "./components/Opciones";
import InformacionTecnica from "./components/InformacionTecnica";

function App() {
  return (
    <React.Fragment>
      <Opciones />
      <InformacionTecnica />
    </React.Fragment>
  );
}

export default App;
