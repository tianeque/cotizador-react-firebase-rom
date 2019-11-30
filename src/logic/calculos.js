function validar(parametros) {
  let nombre = parametros.nombre;
  let tipoTrabajo = parametros.tipoTrabajo;
  let tipoCliente = parametros.tipoCliente;
  let cantidad = parametros.cantidad;
  let moldes = parametros.moldes;
  let multiplicidad = parametros.multiplicidad;
  let sobrantes = parametros.sobrantes;
  let untal = parseInt(parametros.untal);
  let diseno = parseInt(parametros.diseno);
  let gastosGenerales = parseInt(parametros.gastosGenerales);
  let utilidad = parseInt(parametros.utilidad);
  let impuesto = parseInt(parametros.impuesto);
  let hojasResma = parametros.hojasResma;
  let costoResma = parametros.costoResma;
  let costoTinta = parametros.costoTinta;

  if (nombre === "") {
    alert("el campo nombre esta vacío");
    return false;
  } else if (tipoTrabajo === "") {
    alert("el campo tipo de trabajo está vacío");
    return false;
  } else if (tipoCliente === "") {
    alert("el campo tipo de cliente está vacío");
    return false;
  } else if (cantidad === "") {
    alert("El campo cantidad está vacío");
    return false;
  } else if (moldes === "") {
    alert("El campo moldes está vacío");
    return false;
  } else if (multiplicidad === "") {
    alert("El campo multiplicidad está vacío");
    return false;
  } else if (sobrantes === "") {
    alert("El campo sobrantes está vacío");
    return false;
  } else if (untal === "") {
    alert("El campo unidades/talonario está vacío");
    return false;
  } else if (diseno === "") {
    alert("El campo Valor diseno está vacío");
    return false;
  } else if (gastosGenerales === "") {
    alert("El campo Gastos Generales está vacío");
    return false;
  } else if (utilidad === "") {
    alert("El campo utilidad está vacío");
    return false;
  } else if (impuesto === "") {
    alert("El campo impuesto está vacío");
    return false;
  } else if (hojasResma === "") {
    alert("El campo hojas resma está vacío");
    return false;
  } else if (costoResma === "") {
    alert("El campo costo resma está vacío");
    return false;
  } else if (costoTinta === "") {
    alert("El campo costo tinta está vacío");
    return false;
  } else {
    return true;
  }
}

// Calculos

function calculos(parametros) {
  if (validar()) {
    let cantidad = parametros.cantidad;
    let moldes = parametros.moldes;
    let multiplicidad = parametros.multiplicidad;
    let sobrantes = parametros.sobrantes;
    let untal = parseInt(parametros.untal);
    let diseno = parseInt(parametros.diseno);
    let gastosGenerales = parseInt(parametros.gastosGenerales);
    let utilidad = parseInt(parametros.utilidad);
    let impuesto = parseInt(parametros.impuesto);
    let hojasResma = parametros.hojasResma;
    let costoResma = parametros.costoResma;
    let costoTinta = parametros.costoTinta;
    let alzado = parametros.alzado;
    let perforado = parametros.perforado;
    let separado = parametros.separado;
    let corcheteado = parametros.corcheteado;
    let corte = parametros.corte;

    const _calculos = {
      pagoOperacionesMenores: 15,
      pagoAlzado: 500,
      pagoImpresion: 1600,
      tirajeUtil: function() {
        return (cantidad / moldes) * multiplicidad;
      },
      tirajeReal: function() {
        return this.tirajeUtil() + sobrantes * multiplicidad;
      },
      costoPapel: function() {
        return (costoResma / hojasResma) * this.tirajeReal();
      },
      diseno: function() {
        return diseno;
      },
      costoImpresion: function() {
        return this.tirajeReal() * costoTinta;
      },
      costoManoDeObra: function() {
        const x = this.tirajeUtil() % 1000;
        if (x === 0) {
          return (this.pagoImpresion * this.tirajeUtil()) / 1000;
        } else {
          return this.pagoImpresion * parseInt(this.tirajeUtil() / 1000 + 1);
        }
      },
      costoAlzado: function() {
        if (alzado) {
          const x = this.tirajeUtil() % 1000;
          if (x === 0) {
            return (this.pagoAlzado * this.tirajeUtil()) / 1000;
          } else {
            return this.pagoAlzado * (parseInt(this.tirajeUtil() / 1000) + 1);
          }
        } else {
          return 0;
        }
      },
      costoPerforado: function() {
        if (perforado) {
          const x = this.tirajeUtil() % 1000;
          if (x === 0) {
            return (this.pagoAlzado * this.tirajeUtil()) / 1000;
          } else {
            return this.pagoAlzado * (parseInt(this.tirajeUtil() / 1000) + 1);
          }
        } else {
          return 0;
        }
      },
      costoTerminado: function() {
        return (this.tirajeUtil() / untal) * this.pagoOperacionesMenores;
      },
      costoSeparado: function() {
        if (separado) {
          return (this.tirajeUtil() / untal) * this.pagoOperacionesMenores;
        } else {
          return 0;
        }
      },
      costoCorcheteado: function() {
        if (corcheteado) {
          return (this.tirajeUtil() / untal) * this.pagoOperacionesMenores;
        } else {
          return 0;
        }
      },
      costoCorte: function() {
        if (corte) {
          return (this.tirajeUtil() / untal) * this.pagoOperacionesMenores;
        } else {
          return 0;
        }
      },
      costoOperacional: function() {
        return (
          diseno +
          this.costoPapel() +
          this.costoImpresion() +
          this.costoManoDeObra() +
          this.costoAlzado() +
          this.costoSeparado() +
          this.costoCorcheteado() +
          this.costoCorte() +
          this.costoTerminado() +
          this.costoPerforado()
        );
      },
      costoTotal: function() {
        return this.costoOperacional() * (1 + gastosGenerales / 100);
      },
      precioDeVenta: function() {
        let precio =
          this.costoTotal() * (1 + utilidad / 100) +
          ((impuesto / 100) * this.costoTotal() * utilidad) / 100;
        precio = Math.ceil(precio / 100) * 100;
        return precio;
      },
      precioConIVA: function() {
        return this.precioDeVenta() * 1.19;
      }
    };

    return _calculos;
  }
}

function $cl(number) {
  let pesos = new Intl.NumberFormat("cl-ES").format(number);
  pesos = `$ ${pesos}`;
  return pesos;
}

export default calculos();
