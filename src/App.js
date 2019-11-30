import React, { Component } from "react";
import "./App.css";
import Opciones from "./components/Opciones";
import InformacionTecnica from "./components/InformacionTecnica";

class App extends Component {
  constructor() {
    super();
    this.state = {
      nombreCliente: "Sebastian",
      tipoTrabajo: "Boletas 1/4 Carta",
      tipoCliente: "Cliente",
      cantidad: 5000,
      moldes: 2,
      multiplicidad: 4,
      sobrantes: 10,
      untal: 50,
      valorDiseno: 5000,
      gastosGenerales: 85,
      utilidad: 50,
      impuesto: 30,
      hojasResma: 500,
      costoResma: 3500,
      costoTinta: 2,
      alzado: true,
      separado: true,
      corcheteado: true,
      corte: true,
      perforado: true
    };
  }

  onChange = e => {
    this.setState({
      ...this.state,
      parametrosTecnicoEconomicos: {
        ...this.state.parametrosTecnicoEconomicos,
        [e.target.name]: e.target.value
      }
    });
    // this.setState({
    //   state["parametrosTecnicoEconomicos"].[e.target.name]: e.target.value
    // });
  };

  render() {
    return (
      <React.Fragment>
        <Opciones />
        <InformacionTecnica parametros={this.state} onChange={this.onChange} />
      </React.Fragment>
    );
  }
}

export default App;
