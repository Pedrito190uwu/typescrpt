type Unidad = "cm" | "m" | "km";

function convertirUnidad(valor: number, desde: Unidad, hasta: Unidad): number {
  let valorEnCm: number = 0;

  if (desde === "cm") {
    valorEnCm = valor;
  } else if (desde === "m") {
    valorEnCm = valor * 100;
  } else if (desde === "km") {
    valorEnCm = valor * 100000;
  }

  if (hasta === "cm") {
    return valorEnCm;
  } else if (hasta === "m") {
    return valorEnCm / 100;
  } else if (hasta === "km") {
    return valorEnCm / 100000;
  }

  return valorEnCm;
}