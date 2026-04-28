type TipoCambio = "nombre" | "correo" | "contraseña";

type Cambio = {
  campo: TipoCambio;
  valorAnterior: string;
  valorNuevo: string;
};

type ResumenCambios = {
  nombre: number;
  correo: number;
  contraseña: number;
};

function resumirCambios(cambios: Cambio[]): ResumenCambios {
  return cambios.reduce(
    (acc: ResumenCambios, cur: Cambio) => {
      if (cur.campo === "nombre") {
        acc.nombre += 1;
      } else if (cur.campo === "correo") {
        acc.correo += 1;
      } else if (cur.campo === "contraseña") {
        acc.contraseña += 1;
      }
      return acc;
    },
    { nombre: 0, correo: 0, contraseña: 0 }
  );
}
