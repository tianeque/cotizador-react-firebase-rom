import React from "react";

function InformacionTecnica(props) {
  console.log(props);
  return (
    <React.Fragment>
      <div className="container">
        <h3>Informacion Tecnica</h3>
        <div className="row">
          <div className="col">
            <div>
              <label htmlFor="nombre-cliente">Nombre Cliente</label>
              <input
                className="form-control"
                type="text"
                id="nombre-cliente"
                name="nombreCliente"
                defaultValue="Sebastian"
                onChange={props.onChange}
              />
            </div>
            <div>
              <label htmlFor="tipo-trabajo">Tipo de Trabajo</label>
              <input
                className="form-control"
                type="text"
                id="tipo-trabajo"
                name="tipoTrabajo"
                defaultValue="Boletas 1/2 Carta"
              />
            </div>
            <div>
              <label htmlFor="tipo-cliente">Tipo de Cliente</label>
              <input
                className="form-control"
                type="text"
                id="tipo-cliente"
                name="tipoCliente"
                defaultValue="Imprenta"
              />
            </div>
            <div>
              <label htmlFor="cantidad">Cantidad</label>
              <input
                className="form-control"
                type="number"
                id="cantidad"
                name="cantidad"
                defaultValue="1000"
              />
            </div>
            <div>
              <label htmlFor="moldes">Moldes</label>
              <input
                className="form-control"
                type="nPumber"
                id="moldes"
                name="moldes"
                defaultValue="2"
              />
            </div>
            <div>
              <label htmlFor="multiplicidad">Multiplicidad</label>
              <input
                className="form-control"
                type="number"
                id="multiplicidad"
                name="multiplicidad"
                defaultValue="4"
              />
            </div>
            <div>
              <label htmlFor="sobrantes">Sobrantes</label>
              <input
                className="form-control"
                type="number"
                id="sobrantes"
                name="sobrantes"
                defaultValue="10"
              />
            </div>
            <div>
              <label htmlFor="untal">Unidades/Talonario</label>
              <input
                className="form-control"
                type="number"
                id="untal"
                name="untal"
                defaultValue="50"
              />
            </div>
            <div>
              <label htmlFor="diseno">Valor diseño</label>
              <input
                className="form-control"
                type="number"
                id="diseno"
                name="diseno"
                defaultValue="10000"
              />
            </div>
          </div>
          <div className="col">
            <div>
              <label htmlFor="gastos-generales">Gastos Generales</label>
              <input
                className="form-control"
                type="number"
                id="gastos-generales"
                name="gastosGenerales"
                defaultValue="80"
              />
            </div>
            <div>
              <label htmlFor="utilidad">Utilidad</label>
              <input
                className="form-control"
                type="number"
                id="utilidad"
                name="utilidad"
                defaultValue="75"
              />
            </div>
            <div>
              <label htmlFor="impuesto">Impuesto</label>
              <input
                className="form-control"
                type="number"
                id="impuesto"
                name="impuesto"
                defaultValue="30"
              />
            </div>
            <div>
              <label htmlFor="hojas-resma">Hojas Resma</label>
              <input
                className="form-control"
                type="number"
                id="hojas-resma"
                name="hojasResma"
                defaultValue="500"
              />
            </div>
            <div>
              <label htmlFor="costo-resma">Costo Resma</label>
              <input
                className="form-control"
                type="number"
                id="costo-resma"
                name="costoResma"
                defaultValue="3500"
              />
            </div>
            <div>
              <label htmlFor="costo-tinta">Costo Tinta</label>
              <input
                className="form-control"
                type="number"
                id="costo-tinta"
                name="costoTinta"
                defaultValue="1.6"
              />
            </div>
            <div>
              <label htmlFor="alzado">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="alzado"
                  defaultValue="alzado"
                  checked
                />
                Alzado
              </label>
            </div>
            <div>
              <label htmlFor="separado">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="separado"
                  defaultValue="separado"
                  checked
                />
                Separado
              </label>
            </div>
            <div>
              <label htmlFor="corcheteado">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="corcheteado"
                  defaultValue="corcheteado"
                  checked
                />
                Corcheteado
              </label>
            </div>
            <div>
              <label htmlFor="corte">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="corte"
                  defaultValue="corte"
                  checked
                />
                Corte
              </label>
            </div>
            <div>
              <label htmlFor="perforado">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="perforado"
                  defaultValue="perforado"
                  checked
                />
                Perforado
              </label>
            </div>
          </div>
        </div>
        <div className="row botones">
          <button className="btn btn-primary" id="guardar">
            guardar
          </button>
          <input
            className="btn btn-primary"
            type="button"
            defaultValue="Calcular"
            id="btn-calcular-precio"
            data-toggle="modal"
            data-target="#modal-resultados-precio"
          />
          <input
            className="btn btn-primary"
            type="button"
            defaultValue="Ver Detalle"
            id="btn-calcular-detalle"
            data-toggle="modal"
            data-target="#modal-resultados-detalle"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default InformacionTecnica;
