type RolUsuario = "admin" | "editor" | "visitante";

type Usuario = {
  nombre: string;
  edad: number;
  activo: boolean;
  rol: RolUsuario;
};

function filtrarUsuariosActivos(usuarios: Usuario[]): Usuario[] {
  return usuarios.filter(
    (usuario: Usuario) =>
      usuario.edad >= 18 && usuario.activo && usuario.rol !== "visitante"
  );
}
