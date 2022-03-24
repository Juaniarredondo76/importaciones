async function consumirAPI (URI,TOKEN){
    let parametros={
        method:"GET",
        headers:{Autorization:TOKEN}
    }
    let respuesta=await fetch(URI,parametros)
     let respuestaFinal=respuesta.json()
     return(respuestaFinal)
}