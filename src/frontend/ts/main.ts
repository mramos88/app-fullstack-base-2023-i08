
function SayHello(){
    let current_value = document.getElementById("textarea_1") as HTMLInputElement;
    let new_value = "Hello world!!!" + "\n" + current_value.value;
    document.getElementById("textarea_1").innerHTML = new_value;

}

var fun:any = SayHello;
var numer:number = 21;
var nombre: string = "matias";


window.addEventListener("load", () => {
    
    fun();
    SayHello();
});
