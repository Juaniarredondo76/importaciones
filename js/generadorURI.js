/*let codigo="amd001"
export let uri=`www.cesde/${codigo}`
*/

//sin importar la variable que sea se mpuede exportar 
export function generarURI(codigo){
    /*  
    return(`www.cesde/${codigo}`)
    */
   
    let uri=`https://api.spotify.com/v1/artists/${codigo}/top-tracks?market=US`
    return(uri)

}

