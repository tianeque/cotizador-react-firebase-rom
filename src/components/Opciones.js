import React from "react";

const TipoTrabajo = () => {
  return (
    <>
      <h3>Opciones</h3>
      <div className="col">
        <label for="fieldset-tipo-trabajo">Tipo trabajo</label>
        <fieldset id="fieldset-tipo-trabajo">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radio-tipo-trabajo"
              id="radio-formulario-carta"
              value="option1"
            />
            <label class="form-check-label" for="radio-formulario-carta">
              Formulario carta
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radio-tipo-trabajo"
              id="radio-formulario-media-carta"
              value="option2"
            />
            <label class="form-check-label" for="radio-formulario-media-carta">
              Formulario media carta
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radio-tipo-trabajo"
              id="radio-formulario-cuarto-carta"
              value="option3"
            />
            <label class="form-check-label" for="radio-formulario-cuarto-carta">
              Formulario cuarto carta
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radio-tipo-trabajo"
              id="radio-formulario-oficio"
              value="option1"
            />
            <label class="form-check-label" for="radio-formulario-oficio">
              Formulario oficio
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radio-tipo-trabajo"
              id="radio-formulario-medio-oficio"
              value="option2"
            />
            <label class="form-check-label" for="radio-formulario-medio-oficio">
              Formulario medio oficio
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radio-tipo-trabajo"
              id="radio-formulario-cuarto-oficio"
              value="option3"
            />
            <label
              class="form-check-label"
              for="radio-formulario-cuarto-oficio"
            >
              Formulario cuarto oficio
            </label>
          </div>
        </fieldset>
      </div>
    </>
  );
};

const Multiplicidad = () => {
  return (
    <div class="col">
      <label for="fieldset-multiplicidad">Multiplicidad</label>
      <fieldset id="fieldset-multiplicidad">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radio-multiplicidad"
            id="radio-simple"
            value="option1"
          />
          <label class="form-check-label" for="radio-simple">
            Simple
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radio-multiplicidad"
            id="radio-duplicado"
            value="option2"
          />
          <label class="form-check-label" for="radio-duplicado">
            Duplicado
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radio-multiplicidad"
            id="radio-triplicado"
            value="option3"
          />
          <label class="form-check-label" for="radio-triplicado">
            Triplicado
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radio-multiplicidad"
            id="radio-cuadruplicado"
            value="option4"
          />
          <label class="form-check-label" for="radio-cuadruplicado">
            Cuadruplicado
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radio-multiplicidad"
            id="radio-quintuplicado"
            value="option5"
          />
          <label class="form-check-label" for="radio-quintuplicado">
            Quintuplicado
          </label>
        </div>
      </fieldset>
    </div>
  );
};

const TipoClienteYValorDiseno = () => {
  return (
    <React.Fragment>
      <TipoCliente />
      <ValorDiseno />
    </React.Fragment>
  );
};

const TipoCliente = () => {
  return (
    <div class="row">
      <label for="fieldset-multiplicidad">Tipo de cliente</label>
      <fieldset id="fieldset-multiplicidad">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radio-multiplicidad"
            id="radio-imprenta"
            value="option1"
          />
          <label class="form-check-label" for="radio-imprenta">
            Imprenta
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radio-multiplicidad"
            id="radio-cliente"
            value="option2"
          />
          <label class="form-check-label" for="radio-cliente">
            Cliente
          </label>
        </div>
      </fieldset>
    </div>
  );
};

const ValorDiseno = () => {
  return (
    <div class="col">
      <div class="row">
        <label for="fieldset-multiplicidad">Valor diseño</label>
        <fieldset id="fieldset-multiplicidad">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radio-diseno"
              id="radio-diseno-1000"
              value="option1"
            />
            <label class="form-check-label" for="radio-diseno-1000">
              $ 1.000
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radio-diseno"
              id="radio-diseno-2000"
              value="option1"
            />
            <label class="form-check-label" for="radio-diseno-2000">
              $ 2.000
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radio-diseno"
              id="radio-diseno-5000"
              value="option1"
            />
            <label class="form-check-label" for="radio-diseno-5000">
              $ 5.000
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radio-diseno"
              id="radio-diseno-10000"
              value="option1"
            />
            <label class="form-check-label" for="radio-diseno-10000">
              $ 10.000
            </label>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

function Opciones() {
  return (
    <React.Fragment>
      <div className="container">
        <h1>Cotizador imprenta ROM</h1>
        <div className="row">
          <TipoTrabajo />
          <Multiplicidad />
          <TipoClienteYValorDiseno />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Opciones;
