class Framework{

  public ejecutarBackEnd(method:string,url:string,callback:HttpResponse,data?:any) {
    var xmlReq = new XMLHttpRequest();        
    xmlReq.onreadystatechange = () => {
        if (xmlReq.readyState == 4) {
            if (xmlReq.status == 200) {
              callback.manejarRespueta(xmlReq.responseText);
            } else {
                alert("Error al buscar los datos!");
            }
        }
    }
    xmlReq.open(method,url ,true);
    xmlReq.send();
//
  }

}