type TipoCampo = "texto" | "numero" | "email";

type CampoFormulario = {
  nombre: string;
  tipo: TipoCampo;
  valor: string | number;
};

function validarFormulario(campos: CampoFormulario[]): string[] {
  return campos
    .filter((campo: CampoFormulario) => {
      if (campo.tipo === "texto") {
        return typeof campo.valor !== "string" || campo.valor === "";
      } else if (campo.tipo === "numero") {
        return typeof campo.valor !== "number";
      } else if (campo.tipo === "email") {
        return typeof campo.valor !== "string" || !campo.valor.includes("@");
      }
      return false;
    })
    .map((campo: CampoFormulario) => campo.nombre);
}
