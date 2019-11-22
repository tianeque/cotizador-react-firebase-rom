import React from "react";

function InformacionTecnica() {
  return (
    <React.Fragment>
      <div class="container">
        <h3>Informacion Tecnica</h3>
        <div class="row">
          <div class="col">
            <div>
              <label for="nombre-cliente">Nombre Cliente</label>
              <input
                class="form-control"
                type="text"
                id="nombre-cliente"
                value="Sebastian"
              />
            </div>
            <div>
              <label for="tipo-trabajo">Tipo de Trabajo</label>
              <input
                class="form-control"
                type="text"
                id="tipo-trabajo"
                value="Boletas 1/2 Carta"
              />
            </div>
            <div>
              <label for="tipo-cliente">Tipo de Cliente</label>
              <input
                class="form-control"
                type="text"
                id="tipo-cliente"
                value="Imprenta"
              />
            </div>
            <div>
              <label for="cantidad">Cantidad</label>
              <input
                class="form-control"
                type="number"
                name=""
                id="cantidad"
                value="1000"
              />
            </div>
            <div>
              <label for="moldes">Moldes</label>
              <input
                class="form-control"
                type="nPumber"
                id="moldes"
                value="2"
              />
            </div>
            <div>
              <label for="multiplicidad">Multiplicidad</label>
              <input
                class="form-control"
                type="number"
                id="multiplicidad"
                value="4"
              />
            </div>
            <div>
              <label for="sobrantes">Sobrantes</label>
              <input
                class="form-control"
                type="number"
                id="sobrantes"
                value="10"
              />
            </div>
            <div>
              <label for="untal">Unidades/Talonario</label>
              <input class="form-control" type="number" id="untal" value="50" />
            </div>
            <div>
              <label for="diseno">Valor diseño</label>
              <input
                class="form-control"
                type="number"
                id="diseno"
                value="10000"
              />
            </div>
          </div>
          <div class="col">
            <div>
              <label for="gastos-generales">Gastos Generales</label>
              <input
                class="form-control"
                type="number"
                id="gastos-generales"
                value="80"
              />
            </div>
            <div>
              <label for="utilidad">Utilidad</label>
              <input
                class="form-control"
                type="number"
                id="utilidad"
                value="75"
              />
            </div>
            <div>
              <label for="impuesto">Impuesto</label>
              <input
                class="form-control"
                type="number"
                id="impuesto"
                value="30"
              />
            </div>
            <div>
              <label for="hojas-resma">Hojas Resma</label>
              <input
                class="form-control"
                type="number"
                id="hojas-resma"
                value="500"
              />
            </div>
            <div>
              <label for="costo-resma">Costo Resma</label>
              <input
                class="form-control"
                type="number"
                id="costo-resma"
                value="3500"
              />
            </div>
            <div>
              <label for="costo-tinta">Costo Tinta</label>
              <input
                class="form-control"
                type="number"
                id="costo-tinta"
                value="1.6"
              />
            </div>
            <div>
              <label for="alzado">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="alzado"
                  value="alzado"
                  checked
                />
                Alzado
              </label>
            </div>
            <div>
              <label for="separado">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="separado"
                  value="separado"
                  checked
                />
                Separado
              </label>
            </div>
            <div>
              <label for="corcheteado">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="corcheteado"
                  value="corcheteado"
                  checked
                />
                Corcheteado
              </label>
            </div>
            <div>
              <label for="corte">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="corte"
                  value="corte"
                  checked
                />
                Corte
              </label>
            </div>
            <div>
              <label for="perforado">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="perforado"
                  value="perforado"
                  checked
                />
                Perforado
              </label>
            </div>
          </div>
        </div>
        <div class="row botones">
          <button class="btn btn-primary" id="guardar">
            guardar
          </button>
          <input
            class="btn btn-primary"
            type="button"
            value="Calcular"
            id="btn-calcular-precio"
            data-toggle="modal"
            data-target="#modal-resultados-precio"
          />
          <input
            class="btn btn-primary"
            type="button"
            value="Ver Detalle"
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
