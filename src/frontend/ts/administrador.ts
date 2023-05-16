class Administrador extends Persona implements ComportamientoAcceso{
  accesoAmodificaciones(): boolean{
      return true;
  }
  accesoAlLogin(): boolean{
      return true;
  }
}