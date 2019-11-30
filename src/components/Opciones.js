import React from "react";

const TipoTrabajo = () => {
  return (
    <>
      <h3>Opciones</h3>
      <div className="col">
        <label htmlFor="fieldset-tipo-trabajo">Tipo trabajo</label>
        <fieldset id="fieldset-tipo-trabajo">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radio-tipo-trabajo"
              id="radio-formulario-carta"
              defaultValue="option1"
            />
            <label
              className="form-check-label"
              htmlFor="radio-formulario-carta"
            >
              Formulario carta
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radio-tipo-trabajo"
              id="radio-formulario-media-carta"
              defaultValue="option2"
            />
            <label
              className="form-check-label"
              htmlFor="radio-formulario-media-carta"
            >
              Formulario media carta
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radio-tipo-trabajo"
              id="radio-formulario-cuarto-carta"
              defaultValue="option3"
            />
            <label
              className="form-check-label"
              htmlFor="radio-formulario-cuarto-carta"
            >
              Formulario cuarto carta
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radio-tipo-trabajo"
              id="radio-formulario-oficio"
              defaultValue="option1"
            />
            <label
              className="form-check-label"
              htmlFor="radio-formulario-oficio"
            >
              Formulario oficio
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radio-tipo-trabajo"
              id="radio-formulario-medio-oficio"
              defaultValue="option2"
            />
            <label
              className="form-check-label"
              htmlFor="radio-formulario-medio-oficio"
            >
              Formulario medio oficio
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radio-tipo-trabajo"
              id="radio-formulario-cuarto-oficio"
              defaultValue="option3"
            />
            <label
              className="form-check-label"
              htmlFor="radio-formulario-cuarto-oficio"
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
    <div className="col">
      <label htmlFor="fieldset-multiplicidad">Multiplicidad</label>
      <fieldset id="fieldset-multiplicidad">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="radio-multiplicidad"
            id="radio-simple"
            defaultValue="option1"
          />
          <label className="form-check-label" htmlFor="radio-simple">
            Simple
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="radio-multiplicidad"
            id="radio-duplicado"
            defaultValue="option2"
          />
          <label className="form-check-label" htmlFor="radio-duplicado">
            Duplicado
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="radio-multiplicidad"
            id="radio-triplicado"
            defaultValue="option3"
          />
          <label className="form-check-label" htmlFor="radio-triplicado">
            Triplicado
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="radio-multiplicidad"
            id="radio-cuadruplicado"
            defaultValue="option4"
          />
          <label className="form-check-label" htmlFor="radio-cuadruplicado">
            Cuadruplicado
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="radio-multiplicidad"
            id="radio-quintuplicado"
            defaultValue="option5"
          />
          <label className="form-check-label" htmlFor="radio-quintuplicado">
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
    <div className="row">
      <label htmlFor="fieldset-multiplicidad">Tipo de cliente</label>
      <fieldset id="fieldset-multiplicidad">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="radio-multiplicidad"
            id="radio-imprenta"
            defaultValue="option1"
          />
          <label className="form-check-label" htmlFor="radio-imprenta">
            Imprenta
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="radio-multiplicidad"
            id="radio-cliente"
            defaultValue="option2"
          />
          <label className="form-check-label" htmlFor="radio-cliente">
            Cliente
          </label>
        </div>
      </fieldset>
    </div>
  );
};

const ValorDiseno = () => {
  return (
    <div className="col">
      <div className="row">
        <label htmlFor="fieldset-multiplicidad">Valor diseño</label>
        <fieldset id="fieldset-multiplicidad">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radio-diseno"
              id="radio-diseno-1000"
              defaultValue="option1"
            />
            <label className="form-check-label" htmlFor="radio-diseno-1000">
              $ 1.000
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radio-diseno"
              id="radio-diseno-2000"
              defaultValue="option1"
            />
            <label className="form-check-label" htmlFor="radio-diseno-2000">
              $ 2.000
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radio-diseno"
              id="radio-diseno-5000"
              defaultValue="option1"
            />
            <label className="form-check-label" htmlFor="radio-diseno-5000">
              $ 5.000
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radio-diseno"
              id="radio-diseno-10000"
              defaultValue="option1"
            />
            <label className="form-check-label" htmlFor="radio-diseno-10000">
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
