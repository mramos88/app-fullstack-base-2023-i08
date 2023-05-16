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
            for (var user of this.users) {

                //TODO cambiar ESTO por mostrar estos datos separados por "-" 
                //en un parrafo "etiqueta de tipo <p>"
                console.log(user.mostrar())
            }
        } else if (event.target.id == "btnLogin") {

            var iUser = <HTMLInputElement>document.getElementById("iUser");
            var iPass = <HTMLInputElement>document.getElementById("iPass");
            var username: string = iUser.value;
            var password: string = iPass.value;

            if (username.length > 3 && password.length>3) {
                
                //iriamos al servidor a consultar si el usuario y la cotraseña son correctas
                var parrafo = document.getElementById("parrafo");
                parrafo.innerHTML = "Espere...";
            } else {
                alert("el nombre de usuario es invalido");
            }

        } else {
            //TODO cambiar esto, recuperadon de un input de tipo text
            //el nombre  de usuario y el nombre de la persona
            // validando que no sean vacios
            this.users.push(new Usuario("usernuevo", "usernuevo"));
        }
    }
}


window.addEventListener("load", () => {

    var main: Main = new Main();
    var btnListar: HTMLElement = document.getElementById("btnListar");
    btnListar.addEventListener("click", main);




    var btnAgregar: HTMLElement = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", main);

    var btnLogin = document.getElementById("btnLogin");
    btnLogin.addEventListener("click", main);

});
