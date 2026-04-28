type SMS = {
  tipo: "sms";
  numero: string;
  mensaje: string;
};

type Email = {
  tipo: "email";
  receptor: string;
  mensaje: string;
};

type Push = {
  tipo: "push";
  esquina: string;
  mensaje: string;
};

type Notificacion = SMS | Email | Push;

function enviarNotificacion(notificacion: Notificacion): void {
  if (notificacion.tipo === "sms") {
    console.log(`Enviando SMS al número ${notificacion.numero}: ${notificacion.mensaje}`);
  } else if (notificacion.tipo === "email") {
    console.log(`Enviando Email a ${notificacion.receptor}: ${notificacion.mensaje}`);
  } else if (notificacion.tipo === "push") {
    console.log(`Enviando Push en esquina ${notificacion.esquina}: ${notificacion.mensaje}`);
  }
}
