let ultimosCalculos = [
  //ejemplos escritos a mano
  { plata: 2500, tiempo: 40, interesesGanados: 205.48 },
  { plata: 5000, tiempo: 200, interesesGanados: 2054.79 },
];

class Data {
  constructor(plata, tiempo, todoCorrecto) {
    this.plata = plata;
    this.tiempo = tiempo;
    this.todoCorrecto = todoCorrecto;
  }

  calcularPlazo() {
    return this.plata * ((this.tiempo * 0.75) / 365);
  }

  alertarGanancia() {
    let interesesGanados = (
      Math.round(this.calcularPlazo() * 100) / 100
    ).toFixed(2);

    alert(
      `Intereses recibidos en ${this.tiempo} días son ${interesesGanados} pesos`
    );

    this.guardar(interesesGanados);
  }

  guardar(interesesGanados) {
    ultimosCalculos.push({
      plata: this.plata,
      tiempo: this.tiempo,
      interesesGanados: interesesGanados,
    });

    ultimosCalculos.reverse();

    alert("Ultimos 3 plazos calculados:");

    for (const calculo of ultimosCalculos) {
      alert(`
      Monto: $${calculo.plata}
      Tiempo: ${calculo.tiempo} días
      Ganancia: $${calculo.interesesGanados}`);
    }
  }
}

const dataUsuario = new Data(0, 0, false);

do {
  dataUsuario.plata = parseFloat(
    prompt("Cuanta plata quiere depositar?", "Monto mínimo 1000")
  );
} while (dataUsuario.plata < 1000 || isNaN(dataUsuario.plata));

do {
  dataUsuario.tiempo = parseInt(
    prompt("Por cuantos dias? (TNA 75%)", "30 dias mínimo")
  );
} while (dataUsuario.tiempo < 30 || isNaN(dataUsuario.tiempo));

dataUsuario.todoCorrecto = true;

if (dataUsuario.todoCorrecto) {
  dataUsuario.alertarGanancia();
}
