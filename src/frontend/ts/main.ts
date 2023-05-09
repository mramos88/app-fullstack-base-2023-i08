
function SayHello(){
    let current_value = document.getElementById("textarea_1") as HTMLInputElement;
    let new_value = "Hello world!!!" + "\n" + current_value.value;
    document.getElementById("textarea_1").innerHTML = new_value;

}

var fun: any = SayHello;

interface ComportamientoAcceso{
    accesoAmodificaciones(): boolean;
    accesoAlLogin():boolean;
}

class Persona {
    public nombre:string;
    public dni: number;

    constructor(nombre: string) {
     
        this.nombre = nombre;
    }
    
    public saludar() {
        console.log("hola soy " + this.nombre);
    }
}

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
class Administrador extends Persona implements ComportamientoAcceso{
    accesoAmodificaciones(): boolean{
        return true;
    }
    accesoAlLogin(): boolean{
        return true;
    }
}
class Main implements EventListenerObject {
    users: Array<Usuario> = new Array();
    
    constructor() {
        var usr1 = new Usuario("mramos", "Matias");
        var usr2 = new Usuario("jlopez", "Juan");
        this.users.push(usr1);
        this.users.push(usr2);
    }
    handleEvent(event) {
        if (event.target.id == "btnListar") {
            for (var user of this.users){
                console.log(user.mostrar())    
            }
            
        } else {
            this.users.push(new Usuario("usernuevo", "usernuevo"));    
        }
        
    }


}


var usr = new Usuario("mramos","Matias");
var adm = new Administrador("Jose");
var per = new Persona("PErsona solo");


var persona1: Persona;

persona1 = usr;

var comportamiento: ComportamientoAcceso = usr;



var comp: ComportamientoAcceso = usr;

usr.saludar();

if (comp.accesoAlLogin()) {
    
}
adm.saludar();





window.addEventListener("load", () => {
    
    var main: Main = new Main();
    var btnListar: HTMLElement = document.getElementById("btnListar");
    btnListar.addEventListener("click", main);

    var btnAgregar: HTMLElement = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", main);
    
});
