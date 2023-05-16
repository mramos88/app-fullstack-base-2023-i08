class Usuario extends Persona implements ComportamientoAcceso{
  public userName: string;
  constructor(usr: string, x: string) {
      super(x);
      this.userName = usr;
      
  }
  public mostrar(): string{
      return "usuario " + this.userName;
  }
  accesoAmodificaciones(): boolean{
          return false;
  }
  accesoAlLogin(): boolean{
      return true;
  }
  
}