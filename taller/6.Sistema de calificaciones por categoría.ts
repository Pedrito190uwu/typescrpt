type CategoriaCalificacion = "tareas" | "quices" | "examen";

type Calificacion = {
  estudianteId: number;
  materia: string;
  categoria: CategoriaCalificacion;
  nota: number;
};

type PromediosPorCategoria = {
  tareas: number;
  quices: number;
  examen: number;
};

function calcularPromedios(
  calificaciones: Calificacion[],
  estudianteId: number
): PromediosPorCategoria {
  const delEstudiante = calificaciones.filter(
    (c: Calificacion) => c.estudianteId === estudianteId
  );

  const tareas = delEstudiante.filter((c: Calificacion) => c.categoria === "tareas");
  const quices = delEstudiante.filter((c: Calificacion) => c.categoria === "quices");
  const examenes = delEstudiante.filter((c: Calificacion) => c.categoria === "examen");

  const sumarNotas = (lista: Calificacion[]): number =>
    lista.reduce((acc: number, cur: Calificacion) => acc + cur.nota, 0);

  return {
    tareas: tareas.length > 0 ? sumarNotas(tareas) / tareas.length : 0,
    quices: quices.length > 0 ? sumarNotas(quices) / quices.length : 0,
    examen: examenes.length > 0 ? sumarNotas(examenes) / examenes.length : 0,
  };
}
